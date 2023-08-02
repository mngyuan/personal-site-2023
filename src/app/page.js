import Image from 'next/image';
import Link from 'next/link';

import jupiterPic from '../../public/jupiter.png';

export default function Home() {
  return (
    <>
      <main className="h-full overflow-auto flex flex-col justify-between bg-black text-white">
        <div className="flex flex-row justify-between sticky top-0 p-6 pt-12 pl-12 pb-0 pr-2/7">
          <div>Kevin Lee</div>
          <div>Resume / CV</div>
        </div>
        <div className="h-1/2 basis-1/2 shrink-0 grow-0 p-6 pl-12 pb-0 pr-2/7">
          <Image
            className="h-full w-full object-cover rounded-md"
            src={jupiterPic}
          />
        </div>
        <div className="flex flex-row justify-between basis-1/2 shrink-0 grow-0 sticky top-blurb p-6 pl-12 pb-0 pr-2/7">
          <div>me@mngyuan.com</div>
          <div>@mngyuan</div>
        </div>
        <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
          <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
            <Image
              className="h-full w-full object-cover rounded-md"
              src={jupiterPic}
            />
          </div>
          <div className="w-2/7 pt-6 px-6 sticky top-blurb">
            I’m a Creative Technologist, working with web. Previously at the
            Royal College of Art, Facebook, and IBM.
          </div>
        </div>
        <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
          <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
            <Image
              className="h-full w-full object-cover rounded-md"
              src={jupiterPic}
            />
          </div>
          <div className="w-2/7 pt-6 px-6 sticky top-blurb">
            I’m a Creative Technologist, working with web. Previously at the
            Royal College of Art, Facebook, and IBM.
          </div>
        </div>
        <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
          <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
            <Image
              className="h-full w-full object-cover rounded-md"
              src={jupiterPic}
            />
          </div>
          <div className="w-2/7 pt-6 px-6 sticky top-blurb">
            I’m a Creative Technologist, working with web. Previously at the
            Royal College of Art, Facebook, and IBM.
          </div>
        </div>
      </main>
      <div className="h-full w-2/7 top-0 left-5/7 absolute flex flex-col justify-between bg-black text-white">
        <div className="flex flex-row justify-between p-6 pt-12 pr-12 pb-0">
          Home
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
    </>
  );
}
