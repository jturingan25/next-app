// src/pages/_app.tsx
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { AppProps } from 'next/app';  
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noLayoutRequired = router.pathname === '/login' || router.pathname === "/"; 

  // Render the layout for pages other than the login page
  if (noLayoutRequired) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
