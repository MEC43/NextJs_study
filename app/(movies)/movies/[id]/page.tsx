import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export default async function MovieDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <div>
      <h3>Movie datail page</h3>
      <Suspense fallback={<h1>영화에 대한 정보를 불러오는 중입니다....</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>영화의 예고편을 불러오는 중입니다....</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
