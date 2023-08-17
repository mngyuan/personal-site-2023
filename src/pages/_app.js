import '../app/globals.css';
import {AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/router';

function MyApp({Component, pageProps}) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <AnimatePresence mode="wait">
      <Component key={pageKey} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
