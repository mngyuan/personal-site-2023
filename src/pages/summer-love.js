import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';

import jupiterPic from 'public/jupiter.png';
import mxclpPic1 from 'public/mxclp-screencap.jpg';
import mxclpPic2 from 'public/mxclp-screencap2.jpg';
import mxclpPic3 from 'public/mxclp-screencap3.jpg';

const SummerLove = () => {
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
      ></Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic2}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        Summer Love was prepared for my good friends mr. hong and Molly, who
        performed live music and a DJ set with the visuals in the background. It
        was made with a mix of found footage, re-interpreted footage from my
        favorite Asian cinema, and photographs I took.
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={mxclpPic3}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row
        left={
          <Image
            className="h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={jupiterPic}
            alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
          />
        }
        final
      >
        I drew heavy inspiration from the colorful aesthetic of Hong Kong 茶餐廳
        menus, and timed the video to match the time of sunset in Brooklyn on
        the day of the event.
      </Row>
    </SharedLayout>
  );
};

export default SummerLove;
