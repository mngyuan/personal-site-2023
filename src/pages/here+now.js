import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';

import jupiterPic from 'public/jupiter.png';
import mxclpPic1 from 'public/mxclp-screencap.jpg';
import mxclpPic2 from 'public/mxclp-screencap2.jpg';
import mxclpPic3 from 'public/mxclp-screencap3.jpg';

const HereNow = () => {
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
        Here + Now gives you a tactile connection to the digital reconstruction
        of audio, putting a direct link from the hand to loudness, complexity,
        and destruction. It responds immediately to the weight and pressure of
        the hand. When you squeeze, the music played becomes progressively
        louder and more mangled as the pressure increases.
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
        The experience of destroying the music as you hold it in your hand
        invites you to let go a little and be gentle - the original music can
        only be heard when touching as lightly as possible. Touching lightly,
        however, decreases the volume, and is made very difficult by the extreme
        pressure sensitivity.
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
            className="lg:h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={jupiterPic}
            alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
          />
        }
        final
      >
        Only by holding gingerly and leaning in can the music be heard in its
        original form.
      </Row>
    </SharedLayout>
  );
};

export default HereNow;
