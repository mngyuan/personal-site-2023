import Head from 'next/head';
import PageTransition from '@/components/PageTransition';
import Layout from '@/components/Layout';

export default function Home(props, ref) {
  return (
    <PageTransition ref={ref}>
      <Layout />
    </PageTransition>
  );
}
