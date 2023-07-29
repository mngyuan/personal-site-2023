import Image from 'next/image';
import Link from 'next/link';

import jupiterPic from '../../public/jupiter.png';

export default function Home() {
  return (
    <main className="grid grid-cols-7 gap-4 min-h-screen p-4 text-white bg-black">
      <div className="col-span-5 grid grid-rows-7 gap-4">
        <div className="row-span-4 flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="">Kevin Lee</div>
            <div className="">Test</div>
          </div>
          <Image src={jupiterPic} />
          <div className="flex flex-row justify-between">
            <div className="">Kevin Lee</div>
            <div className="">Test</div>
          </div>
        </div>
        <div className="row-span-3"></div>
      </div>
      <nav className="col-span-2 grid grid-rows-7 gap-4">
        <div className="row-span-4 flex justify-between flex-col">
          <div>Home</div>
          <ul>
            <li>
              <Link href="/dreaming">MX-CLP</Link>
            </li>
            <li>
              <Link href="/dreaming">THIS STATEMENT IS FALSE</Link>
            </li>
            <li>
              <Link href="/dreaming">Summer Love</Link>
            </li>
            <li>
              <Link href="/dreaming">HERE + NOW</Link>
            </li>
            <li>
              <Link href="/dreaming">DREAMING</Link>
            </li>
          </ul>
          <div>
            <i>About</i>
          </div>
        </div>
        <div className="row-span-3 flex items-center justify-between flex-col">
          <p>
            I’m a Creative Technologist, working with web. Previously at the
            Royal College of Art, Facebook, and IBM.
          </p>
        </div>
      </nav>
    </main>
  );
}
