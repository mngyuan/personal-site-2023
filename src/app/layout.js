'use client';

import './globals.css';
import {motion, AnimatePresence} from 'framer-motion';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

import jupiterPic from '../../public/jupiter.png';

const inter = Inter({subsets: ['latin']});

//export const metadata = {
//title: 'Kevin Lee',
//description: 'Creative technologist. Ex-Facebook, IBM, RCA.',
//};
//
const paths = {
  '/mx-clp': {
    href: '/mx-clp',
    name: 'MX-CLP',
    description:
      'This is some lorem ipsum. This is a project description. Tong is very cute. Everybody knows this. She is also outspoken when she cares about something. Which adds to her cuteness when you consider how shy she is otherwise. Very cute. ',
  },
  '/this-statement-is-false': {
    href: '/this-statement-is-false',
    name: 'THIS STATEMENT IS FALSE',
  },
  '/summer-love': {href: '/summer-love', name: 'Summer Love'},
  '/here+now': {href: '/here+now', name: 'HERE + NOW'},
  '/dreaming': {href: '/dreaming', name: 'DREAMING'},
};

const animatecontainer = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  visible: {opacity: 1, transition: {duration: 0.8}},
  hidden: {opacity: 0},
};

const heroImage = {
  visible: {
    opacity: 1,
    transition: {delay: 1, duration: 0.8},
  },
  hidden: {opacity: 0},
};

const Nav = ({links}) => {
  const pathname = usePathname();
  return (
    <div className="h-full w-2/7 top-0 left-5/7 absolute flex flex-col justify-between bg-gradient-to-b from-black from-25% to-60%">
      <motion.div
        className="flex flex-row justify-between p-6 pt-12 pr-12 pb-0"
        variants={item}
      >
        <Link href="/">Home</Link>
      </motion.div>
      <nav className="basis-1/2 shrink-0 grow-0 flex flex-col justify-between p-6 pr-12 pb-0">
        <motion.ul variants={item}>
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
        <motion.div variants={item}>
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
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animatecontainer}
            className="h-full"
          >
            <main className="h-full overflow-auto flex flex-col justify-between">
              <div className="flex flex-row justify-between sticky top-0 p-6 pt-12 pl-12 pb-0 pr-2/7">
                <motion.div variants={item}>{`Kevin Lee${
                  pathname !== '/' ? ` / ${paths[pathname].name}` : ''
                }`}</motion.div>
                <motion.div variants={item}>
                  <a href="/Kevin Lee CV - Summer 2023.pdf" target="_blank">
                    Resume / CV
                  </a>
                </motion.div>
              </div>
              <motion.div
                className="h-1/2 basis-1/2 shrink-0 grow-0 p-6 pl-12 pb-0 pr-2/7"
                variants={heroImage}
              >
                <Image
                  className="h-full w-full object-cover rounded-md"
                  src={jupiterPic}
                />
              </motion.div>
              <div className="sticky top-blurb flex flex-row justify-between">
                <div className="w-5/7 flex flex-row justify-between p-6 pl-12 pb-0 pr-0">
                  <motion.div variants={item}>
                    <a href="mailto:me@mngyuan.com" target="_blank">
                      me@mngyuan.com
                    </a>
                  </motion.div>
                  <motion.div variants={item}>
                    <a href="https://instagram.com/mngyuan" target="_blank">
                      @mngyuan
                    </a>
                  </motion.div>
                </div>
              </div>
              <div className="h-1/4 basis-1/4 shrink-0 grow-0 flex flex-row justify-between items-start">
                <div className="h-full w-5/7"></div>
                <motion.div
                  className="w-2/7 -mt-12 pt-6 pl-6 pr-12 sticky top-blurb"
                  variants={item}
                >
                  I’m a Creative Technologist, working with web. Previously at
                  the Royal College of Art, Facebook, and IBM.
                </motion.div>
              </div>
              {children}
            </main>
            <Nav links={Object.values(paths)} />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
