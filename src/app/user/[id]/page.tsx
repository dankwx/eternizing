import { createClient } from "@/utils/supabase/server";

interface Props {
  params: { id: string };
}

export default async function Users({ params }: Props): Promise<JSX.Element> {
  const { id } = params;
  const supabase = createClient();

  // Consulta para buscar notas associadas a um usuário específico
  const { data: user, error } = await supabase
    .from("VideoClaim")
    .select("*")
    .eq("userId", parseInt(id));

  if (error) {
    console.error("Erro ao buscar as notas:", error.message);
    return <div>Erro ao carregar as notas</div>;
  }

  return (
    <div>
      <h1>Videos Reinvindicados pelo Usuário {id}:</h1>
      <br />
      <ul>
        {user.map((user: any) => (
          <li key={user.id}>
            <strong>{user.videoUrl}</strong>: {user.videoTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}
