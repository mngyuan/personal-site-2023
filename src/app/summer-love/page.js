'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {motion} from 'framer-motion';

import jupiterPic from 'public/jupiter.png';
import mxclpPic1 from 'public/mxclp-screencap.jpg';
import mxclpPic2 from 'public/mxclp-screencap2.jpg';
import mxclpPic3 from 'public/mxclp-screencap3.jpg';

import {fadeInItem, paths} from '../layout';

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex flex-row justify-between sticky top-0 p-6 pt-12 pl-12 pb-0 pr-2/7">
        <motion.div variants={fadeInItem} custom={0} key="name">
          <Link href="/">Kevin Lee</Link>
          {pathname !== '/' ? ` / ${paths[pathname].name}` : ''}
        </motion.div>
        <motion.div variants={fadeInItem} custom={1} key="resume">
          <a href="/Kevin Lee CV - Summer 2023.pdf" target="_blank">
            Resume / CV
          </a>
        </motion.div>
      </div>
      <motion.div
        className="h-1/2 basis-1/2 shrink-0 grow-0 p-6 pl-12 pb-0 pr-2/7"
        variants={fadeInItem}
        custom={8}
      >
        <Image
          className="h-full w-full object-cover rounded-md"
          src={jupiterPic}
        />
      </motion.div>
      <div className="sticky top-blurb flex flex-row justify-between">
        <div className="w-5/7 flex flex-row justify-between p-6 pl-12 pb-0 pr-0">
          <motion.div variants={fadeInItem} custom={2} key="email">
            <a
              href="mailto:me@mngyuan.com"
              target="_blank"
              className="underline"
            >
              me@mngyuan.com
            </a>
          </motion.div>
          <motion.div variants={fadeInItem} custom={3} key="ig">
            <a
              href="https://instagram.com/mngyuan"
              target="_blank"
              className="underline"
            >
              @mngyuan
            </a>
          </motion.div>
        </div>
      </div>
      <div className="h-1/4 basis-1/4 shrink-0 grow-0 flex flex-row justify-between items-start">
        <div className="h-full w-5/7"></div>
        <motion.div
          className="w-2/7 -mt-12 pt-6 pl-6 pr-12 sticky top-blurb"
          variants={fadeInItem}
          custom={7}
          key="description"
        >
          {paths[pathname].description}
        </motion.div>
      </div>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <motion.div
          className="h-full w-5/7 p-6 pl-12 pr-0 pb-0"
          variants={fadeInItem}
        >
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic1}
          />
        </motion.div>
        <motion.div
          className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb"
          variants={fadeInItem}
        >
          Video editing today lives almost entirely digitally, behind thumb taps
          or mouse clicks and keyboard shortcuts. What if the work of editing
          wasn’t hidden behind software interfaces, and their workflow of
          constant interruption and stopping and starting?
        </motion.div>
      </div>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic2}
          />
        </div>
        <div className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb">
          MX-CLP is a new portable video editing paradigm which hopes to
          reintroduce tactility and foster new forms of visual storytelling.
        </div>
      </div>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic3}
          />
        </div>
        <div className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb">
          Cognition is aided by physical movement - not only through their
          expressiveness, but in their ability to embody cognitive processes. By
          encouraging play, creativity, and experimentation, and by breaking out
          of a purely software interaction space, we might enable new forms of
          expression.
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
          Just as in the music industry, where interface innovation forms the
          basis for entire new genres of sound, an accessible approach to video
          editing could revolutionize visual storytelling. That is the spirit
          behind MX-CLP, a portable, all-in-one video editing device which
          inspires creatives to find new stories to tell.
        </div>
      </div>
    </>
  );
}
