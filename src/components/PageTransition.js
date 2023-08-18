'use client';

import React, {forwardRef} from 'react';
import {motion} from 'framer-motion';
import {usePathname} from 'next/navigation';

function PageTransition({children, ...rest}, ref) {
  const pathname = usePathname();
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

  return (
    <motion.div
      ref={ref}
      key={pathname}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={animatecontainer}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
