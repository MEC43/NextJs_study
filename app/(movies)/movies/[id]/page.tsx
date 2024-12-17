import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';
import { Metadata } from 'next';

type IParams = Promise<{ id: string }>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
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
