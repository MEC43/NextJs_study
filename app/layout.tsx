import Navigation from '../components/navigation';

export const metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: '메타데이터는 병합된다',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
