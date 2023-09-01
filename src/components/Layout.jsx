import Head from 'next/head';
import Header from '@/components/Header';

export default function Layout({
  children,
  description = 'GDG Aba brings together developers and tech enthusiasts from Aba and its surrounding areas. Our aim is to facilitate knowledge sharing, project collaboration, and engaging discussions related to Google technologies and web development.',
  title,
}) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{`GDG Aba - ${title}`}</title>
      </Head>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        {children}
      </main>
      <footer></footer>
    </>
  );
}
