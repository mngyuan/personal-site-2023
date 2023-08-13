'use client';

import './globals.css';
import {motion, AnimatePresence} from 'framer-motion';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

import jupiterPic from 'public/jupiter.png';
import {Video} from '@/components/Video';

const inter = Inter({subsets: ['latin']});

//export const metadata = {
//title: 'Kevin Lee',
//description: 'Creative technologist. Ex-Facebook, IBM, RCA.',
//};
//
export const paths = {
  '/': {
    href: '/',
    description:
      'I’m a Creative Technologist, working with web. Previously at the Royal College of Art, Facebook, and IBM.',
    hidden: true,
    hero: (
      <Image
        className="h-full w-full object-cover rounded-md"
        src={jupiterPic}
        alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
      />
    ),
  },
  '/mx-clp': {
    href: '/mx-clp',
    name: 'MX-CLP',
    description:
      'A portable, tactile video editing device using embodied cognition and physical metaphor to spark new creativity.',
    hero: (
      <Video
        className="h-full w-full object-cover rounded-md"
        src="/mxclppromo.mp4"
      />
    ),
  },
  '/this-statement-is-false': {
    href: '/this-statement-is-false',
    name: 'THIS STATEMENT IS FALSE',
    description:
      'An interactive AI art installation asking users to interrogate their relationship with non-human intelligence, present and future.',
  },
  '/summer-love': {
    href: '/summer-love',
    name: 'Summer Love',
  },
  '/here+now': {
    href: '/here+now',
    name: 'HERE + NOW',
    description:
      'An interactive audio installation meant to encourage stillness, reflection, and curiosity in music.',
  },
  '/dreaming': {
    href: '/dreaming',
    name: 'DREAMING',
    description:
      '夢 DREAMING is a photobook containing photo essays and 35mm film photographs taken over 8 weeks traveling Asia alone, reflecting on the incredibly personal mental space a language and culture barrier creates. ',
  },
};

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

export const fadeInItem = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {delay: 0.24 * i, duration: 0.8},
  }),
  hidden: ([i, shouldntTransition]) => ({
    opacity: shouldntTransition ? 1 : 0,
    y: shouldntTransition ? 0 : 4,
    transition: {delay: 0.12 * (10 - i), duration: 0.8},
  }),
};

const Nav = ({links}) => {
  const pathname = usePathname();
  return (
    <div className="h-full w-2/7 top-0 left-5/7 absolute flex flex-col justify-between bg-gradient-to-b from-black from-25% to-60%">
      <motion.div
        className="flex flex-row justify-between p-6 pt-12 pr-12 pb-0"
        variants={fadeInItem}
        custom={[4]}
      >
        <Link href="/">Home</Link>
      </motion.div>
      <nav className="basis-1/2 shrink-0 grow-0 flex flex-col justify-between p-6 pr-12 pb-0">
        <motion.ul variants={fadeInItem} custom={[5]}>
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={`hover:opacity-100 transition-opacity ${
                  link.href === pathname ? 'opacity-100' : 'opacity-50'
                }`}
                href={link.href}
              >
                {link.name} +
              </Link>
            </li>
          ))}
        </motion.ul>
        <motion.div variants={fadeInItem} custom={[6]}>
          <i>About</i>
        </motion.div>
      </nav>
      <div className="basis-1/2 shrink-0 grow-0"></div>
    </div>
  );
};

export default function RootLayout({children}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black`}>
        <AnimatePresence mode="wait">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animatecontainer}
            className="h-full"
            key={pathname}
          >
            <main className="h-full overflow-auto flex flex-col justify-between">
              <div className="flex flex-row justify-between sticky top-0 p-6 pt-12 pl-12 pb-0 pr-2/7">
                <motion.div variants={fadeInItem} custom={[0]} key="name">
                  <Link href="/">Kevin Lee</Link>
                  {pathname !== '/' ? ` / ${paths[pathname].name}` : ''}
                </motion.div>
                <motion.div variants={fadeInItem} custom={[1]} key="resume">
                  <a href="/Kevin Lee CV - Summer 2023.pdf" target="_blank">
                    Resume / CV
                  </a>
                </motion.div>
              </div>
              <motion.div
                className="h-1/2 basis-1/2 shrink-0 grow-0 p-6 pl-12 pb-0 pr-2/7"
                variants={fadeInItem}
                custom={[8]}
              >
                {paths[pathname]?.hero || (
                  <Image
                    className="h-full w-full object-cover rounded-md"
                    src={jupiterPic}
                    alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
                  />
                )}
              </motion.div>
              <div className="sticky top-blurb flex flex-row justify-between">
                <div className="w-5/7 flex flex-row justify-between p-6 pl-12 pb-0 pr-0">
                  <motion.div variants={fadeInItem} custom={[2]} key="email">
                    <a
                      href="mailto:me@mngyuan.com"
                      target="_blank"
                      className="underline"
                    >
                      me@mngyuan.com
                    </a>
                  </motion.div>
                  <motion.div variants={fadeInItem} custom={[3]} key="ig">
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
                  custom={[7]}
                  key="description"
                >
                  {paths[pathname].description}
                </motion.div>
              </div>
              {children}
            </main>
            <Nav links={Object.values(paths).filter((path) => !path.hidden)} />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
