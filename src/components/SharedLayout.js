import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useState} from 'react';

import jupiterPic from 'public/jupiter.png';
import thisStatementPic from 'public/this-statement-is-false-rca-1.png';
import {Video} from '@/components/Video';

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
    hero: (
      <Image
        className="h-full w-full object-cover rounded-md"
        src={thisStatementPic}
        alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
      />
    ),
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

export const Row = ({left, final, children}) => {
  const finalRowClassname = 'h-full basis-full';
  const rowClassname = 'h-1/2 basis-1/2';
  return (
    <motion.div
      className={`${
        final ? finalRowClassname : rowClassname
      } shrink-0 grow-0 flex flex-row justify-between items-start`}
      variants={fadeInItem}
      custom={[9]}
    >
      <motion.div
        className="h-full w-5/7 p-6 pl-12 pr-0 pb-0"
        variants={fadeInItem}
        custom={[9]}
      >
        {left}
      </motion.div>
      <motion.div
        className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb"
        variants={fadeInItem}
        custom={[10]}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Nav = ({links}) => {
  // Cache pathname to prevent flicker during exit animations
  const pathnameDynamic = usePathname();
  const [pathname, setPathName] = useState(pathnameDynamic);

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

const SharedLayout = ({children}) => {
  // Cache pathname to prevent re-renders when usePathname reports a
  // route change. this prevents flicker when Nav or SharedLayout
  // content updates when the router changes before the exit animation
  // has finished. we only ever want to be fully re-rendered by our
  // parent component
  const pathnameDynamic = usePathname();
  const [pathname, setPathName] = useState(pathnameDynamic);

  return (
    <>
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
    </>
  );
};

export default SharedLayout;