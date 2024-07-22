import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';

import herenowPic1 from 'public/screencap0clean.jpg';
import herenowPic2 from 'public/Every Day I Wake Up Inside Gizmo-52.jpg';
import herenowPic3 from 'public/Every Day I Wake Up Inside Gizmo-54.jpg';
import herenowPic4 from 'public/screencap1.jpg';

const HereNow = () => {
  return (
    <SharedLayout>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={herenowPic1}
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
            src={herenowPic2}
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
            src={herenowPic3}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row
        left={
          <Image
            className="lg:h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={herenowPic4}
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
