// VideoClaimForm.tsx

"use client"

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from "next/navigation";

// Definição do esquema para VideoClaim
const VideoClaimSchema = z.object({
  videoUrl: z.string().min(1, 'Video URL is required'),
  videoTitle: z.string().min(1, 'Video title is required'),
});

const VideoClaimForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof VideoClaimSchema>>({
    resolver: zodResolver(VideoClaimSchema),
    defaultValues: {
      videoUrl: '',
      videoTitle: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof VideoClaimSchema>) => {
    try {
      // Substitua '/api/video-claim' pelo endpoint adequado em sua aplicação
      const response = await fetch('/api/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          videoUrl: values.videoUrl,
          videoTitle: values.videoTitle,
        }),
      });

      if (response.ok) {
        router.push('/dashboard'); // Redirecionar para a página apropriada após a criação bem-sucedida
        toast({
          title: 'Success',
          description: 'Video claim created successfully!',
        });
      } else {
        throw new Error('Failed to create video claim');
      }
    } catch (error) {
      console.error('Error creating video claim:', error);
      toast({
        title: 'Error',
        description: 'Failed to create video claim. Please try again later.',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://www.youtube.com/watch?v=example" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="videoTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Video Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the video title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-6" type="submit">
          Create Video Claim
        </Button>
      </form>
    </Form>
  );
};

export default VideoClaimForm;
