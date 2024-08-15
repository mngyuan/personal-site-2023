import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';

import figure from 'public/Device Mockup.png';
import mxclpPic1 from 'public/mxclp-screencap.webp';
import mxclpPic2 from 'public/mxclp-screencap2.webp';
import mxclpPic3 from 'public/mxclp-screencap3.webp';

const MXCLP = () => {
  return (
    <SharedLayout>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic1}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        Video editing today lives almost entirely digitally, behind thumb taps
        or mouse clicks and keyboard shortcuts. What if the work of editing
        wasn’t hidden behind software interfaces, and their workflow of constant
        interruption and stopping and starting?
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic2}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        MX-CLP is a new portable video editing paradigm which hopes to
        reintroduce tactility and foster new forms of visual storytelling.
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic3}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        Cognition is aided by physical movement - not only through their
        expressiveness, but in their ability to embody cognitive processes. By
        encouraging play, creativity, and experimentation, and by breaking out
        of a purely software interaction space, we might enable new forms of
        expression.
      </Row>
      <Row
        left={
          <Image
            className="lg:h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={figure}
            alt="A diagram of MX-CLP, a portable video editing device with a circular touch pad and a large screen"
          />
        }
        final
      >
        Just as in the music industry, where interface innovation forms the
        basis for entire new genres of sound, an accessible approach to video
        editing could revolutionize visual storytelling. That is the spirit
        behind MX-CLP, a portable, all-in-one video editing device which
        inspires creatives to find new stories to tell.
      </Row>
    </SharedLayout>
  );
};

export default MXCLP;
