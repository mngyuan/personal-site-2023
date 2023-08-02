'use client';

import './globals.css';
import {motion, AnimatePresence} from 'framer-motion';
import {Inter} from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

import jupiterPic from '../../public/jupiter.png';

const inter = Inter({subsets: ['latin']});

//export const metadata = {
//title: 'Kevin Lee',
//description: 'Creative technologist. Ex-Facebook, IBM, RCA.',
//};

const Nav = () => (
  <div className="h-full w-2/7 top-0 left-5/7 absolute flex flex-col justify-between bg-gradient-to-b from-black from-25% to-60%">
    <div className="flex flex-row justify-between p-6 pt-12 pr-12 pb-0">
      <Link href="/">Home</Link>
    </div>
    <nav className="basis-1/2 shrink-0 grow-0 flex flex-col justify-between p-6 pr-12 pb-0">
      <ul>
        <li>
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/mx-clp"
          >
            MX-CLP +
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/this-statement-is-false"
          >
            THIS STATEMENT IS FALSE +
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/summer-love"
          >
            Summer Love +
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/here+now"
          >
            HERE + NOW +
          </Link>
        </li>
        <li>
          <Link
            className="opacity-50 hover:opacity-100 transition-opacity"
            href="/dreaming"
          >
            DREAMING +
          </Link>
        </li>
      </ul>
      <div>
        <i>About</i>
      </div>
    </nav>
    <div className="basis-1/2 shrink-0 grow-0"></div>
  </div>
);

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black`}>
        <AnimatePresence>
          <main className="h-full overflow-auto flex flex-col justify-between">
            <div className="flex flex-row justify-between sticky top-0 p-6 pt-12 pl-12 pb-0 pr-2/7">
              <motion.div>Kevin Lee</motion.div>
              <div>
                <a href="/Kevin Lee CV - Summer 2023.pdf" target="_blank">
                  Resume / CV
                </a>
              </div>
            </div>
            <div className="h-1/2 basis-1/2 shrink-0 grow-0 p-6 pl-12 pb-0 pr-2/7">
              <Image
                className="h-full w-full object-cover rounded-md"
                src={jupiterPic}
              />
            </div>
            <div className="sticky top-blurb flex flex-row justify-between">
              <div className="w-5/7 flex flex-row justify-between p-6 pl-12 pb-0 pr-0">
                <div>
                  <a href="mailto:me@mngyuan.com" target="_blank">
                    me@mngyuan.com
                  </a>
                </div>
                <div>
                  <a href="https://instagram.com/mngyuan" target="_blank">
                    @mngyuan
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-start">
              <div className="h-full w-5/7"></div>
              <div className="w-2/7 -mt-6 px-6 sticky top-blurb">
                I’m a Creative Technologist, working with web. Previously at the
                Royal College of Art, Facebook, and IBM.
              </div>
            </div>
            {children}
          </main>
          <Nav />
        </AnimatePresence>
      </body>
    </html>
  );
}
