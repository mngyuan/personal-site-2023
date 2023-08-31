import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {fadeInItem} from '@/components/SharedLayout';

import jupiterPic from 'public/jupiter.png';
import mxclpPic1 from 'public/mxclp-screencap.jpg';
import mxclpPic2 from 'public/mxclp-screencap2.jpg';
import mxclpPic3 from 'public/mxclp-screencap3.jpg';

const MXCLP = () => {
  return (
    <SharedLayout>
      <div className="h-1/2 basis-1/2 shrink-0 grow-0 flex flex-row justify-between items-start">
        <motion.div
          className="h-full w-5/7 p-6 pl-12 pr-0 pb-0"
          variants={fadeInItem}
          custom={[9]}
        >
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic1}
            alt="MX-CLP, a new video editing interface"
          />
        </motion.div>
        <motion.div
          className="w-2/7 pt-6 pl-6 pr-12 sticky top-blurb"
          variants={fadeInItem}
          custom={[10]}
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
            alt="MX-CLP, a new video editing interface"
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
            alt="MX-CLP, a new video editing interface"
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
            alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
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
    </SharedLayout>
  );
};

export default MXCLP;
