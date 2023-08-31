import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/router';

import '@/styles/globals.css';

// AnimatePresence only supports one child in mode="wait", which we need in
// order to run exit animations before the next entry animations. The one
// child is a motion.div, which will wait for all children motion.div's exit
// animations to run before exiting itself with when: 'afterChildren'.
const animatecontainer = {
  visible: {
    opacity: 1,
  },
  hidden: {
    // 'hidden' is here just to wait, don't actually want to fade out container
    opacity: 1,
    transition: {
      when: 'afterChildren',
      duration: 0.01,
    },
  },
};

function App({Component, pageProps}) {
  const router = useRouter();
  const pageKey = router.asPath;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animatecontainer}
      >
        <Component key={pageKey} {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
