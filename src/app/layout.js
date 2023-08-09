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
  '/': {
    href: '/',
    description:
      'I’m a Creative Technologist, working with web. Previously at the Royal College of Art, Facebook, and IBM.',
    hidden: true,
  },
  '/mx-clp': {
    href: '/mx-clp',
    name: 'MX-CLP',
    description:
      'A portable, tactile video editing device using embodied cognition and physical metaphor to spark new creativity.',
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
    description:
      'An interactive audio installation meant to encourage stillness, reflection, and curiosity in music.',
  },
  '/here+now': {href: '/here+now', name: 'HERE + NOW'},
  '/dreaming': {href: '/dreaming', name: 'DREAMING'},
};

const animatecontainer = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const fadeInItem = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {delay: 0.24 * i, duration: 0.8},
  }),
  hidden: {opacity: 0, y: 4},
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
        variants={fadeInItem}
        custom={4}
      >
        <Link href="/">Home</Link>
      </motion.div>
      <nav className="basis-1/2 shrink-0 grow-0 flex flex-col justify-between p-6 pr-12 pb-0">
        <motion.ul variants={fadeInItem} custom={5}>
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
        <motion.div variants={fadeInItem} custom={6}>
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
                <motion.div variants={fadeInItem} custom={0}>
                  <Link href="/">Kevin Lee</Link>
                  {pathname !== '/' ? ` / ${paths[pathname].name}` : ''}
                </motion.div>
                <motion.div variants={fadeInItem} custom={1}>
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
                  <motion.div variants={fadeInItem} custom={2}>
                    <a
                      href="mailto:me@mngyuan.com"
                      target="_blank"
                      className="underline"
                    >
                      me@mngyuan.com
                    </a>
                  </motion.div>
                  <motion.div variants={fadeInItem} custom={3}>
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
