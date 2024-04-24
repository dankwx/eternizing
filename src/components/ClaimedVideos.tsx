import { createClient } from "@/utils/supabase/server";

export default async function ClaimedVideos() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("VideoClaim").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
