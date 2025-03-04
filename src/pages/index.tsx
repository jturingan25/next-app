// pages/index.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return <div>Redirecting...</div>;
};

export default Home;
