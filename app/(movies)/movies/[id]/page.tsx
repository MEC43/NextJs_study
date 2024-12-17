import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>영화에 대한 정보를 불러오는 중입니다....</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>영화의 예고편을 불러오는 중입니다....</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
