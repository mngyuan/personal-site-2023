'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';

import jupiterPic from '../../../public/jupiter.png';

const pageContent = {
  visible: {opacity: 1, transition: {delay: 1.4, duration: 0.8}},
  hidden: {opacity: 0},
};

export default function Home() {
  return (
    <motion.div variants={pageContent}>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
          <Image
            className="h-full w-full object-cover rounded-md"
            src={jupiterPic}
          />
        </div>
        <div className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb">
          I’m a Creative Technologist, working with web. Previously at the Royal
          College of Art, Facebook, and IBM.
        </div>
      </div>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
          <Image
            className="h-full w-full object-cover rounded-md"
            src={jupiterPic}
          />
        </div>
        <div className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb">
          I’m a Creative Technologist, working with web. Previously at the Royal
          College of Art, Facebook, and IBM.
        </div>
      </div>
    </motion.div>
  );
}
