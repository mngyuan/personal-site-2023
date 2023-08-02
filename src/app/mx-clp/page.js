import Image from 'next/image';

import jupiterPic from '../../../public/jupiter.png';

export default function Home() {
  return (
    <>
      <div className="h-1/4 basis-1/4 shrink-0 grow-0"></div>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <div className="h-full w-5/7 p-6 pl-12 pr-0 pb-0">
          <Image
            className="h-full w-full object-cover rounded-md"
            src={jupiterPic}
          />
        </div>
        <div className="w-2/7 pt-6 px-6 sticky top-blurb">
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
        <div className="w-2/7 pt-6 px-6 sticky top-blurb">
          I’m a Creative Technologist, working with web. Previously at the Royal
          College of Art, Facebook, and IBM.
        </div>
      </div>
    </>
  );
}
