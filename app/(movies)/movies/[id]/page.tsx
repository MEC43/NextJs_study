export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  console.log('params:', { id });

  return <h1>MovieDetail {id}</h1>;
}
