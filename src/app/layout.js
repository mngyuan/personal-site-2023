'use client';

import './globals.css';
import {AnimatePresence} from 'framer-motion';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

//export const metadata = {
//title: 'Kevin Lee',
//description: 'Creative technologist. Ex-Facebook, IBM, RCA.',
//};
//
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-black`}>
        <div className="h-full w-full">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </div>
      </body>
    </html>
  );
}
