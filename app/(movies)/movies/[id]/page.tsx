import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = await response.json();
  return json;
}

async function getVideo(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  console.log('fetching 시작');
  const { id } = await params;
  const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  console.log('fetching 끝');
  return <h1>{movie.title}</h1>;
}
