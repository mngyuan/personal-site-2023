import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';

import dreamingPic1 from 'public/047A2006-expanded.webp';
import dreamingPic2 from 'public/047A2008.webp';
import dreamingPic3 from 'public/IMG_7871.webp';
import dreamingPic4 from 'public/Screen Shot 2022-02-08 at 9.27.13 PM.webp';
import dreamingPic5 from 'public/afterword.webp';
import dreamingPic6 from 'public/129283090033.webp';
import dreamingPic7 from 'public/2390-36.webp';

const Dreaming = () => {
  return (
    <SharedLayout>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={dreamingPic1}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={dreamingPic2}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row>
        I hand bound each copy, printing, cutting, and glueing the pages
        together, and laser cutting the covers. I sold a limited run of them and
        shipped around the world.
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={dreamingPic6}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={dreamingPic7}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row />
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={dreamingPic3}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        DREAMING was featured at the Tokyo Art Book Fair in 2022 at the Museum
        of Contemporary Art in Tokyo.
        <br />
        <br />
        This project was deeply personal, containing reflections on my heritage.
      </Row>
      <Row
        left={
          <Image
            className="lg:h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={dreamingPic4}
            alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
          />
        }
        final
      >
        Excerpt from the foreword:
      </Row>
      <Row>
        <quote className="italic">
          <br />I spent two months wandering Asia alone in 2019, meditating in
          the incredibly personal mental space a language and culture barrier
          creates. Crowded public spaces took on a dream-like quality, as if
          they existed solely for myself as places to both confront and embrace
          a surreal familiarity - the familiarity of a First Home, experienced
          through memories of color and spice and foreign tongues spoken in
          adopted homes. The East is at once immediate and inaccessible, a place
          imagined but never fathomed in its whole, its realities and
          complexities a sensory overload for those who have long walked the
          lonesome path of diaspora.
        </quote>
      </Row>
      <Row
        left={
          <Image
            className="lg:h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={dreamingPic5}
            alt="A pixelated image of a stylized Jupiter, in red against a blue sky"
          />
        }
        final
      >
        <quote className="italic">
          Suddenly I found myself overwhelmed with a litany of colors, each one
          more resonant than the last, their understated vibrancies completing
          empty chords within me: the jade of faded ads, the soft filtered gold
          of the Asian sun, the screams of neon, the gaudy brilliance of bus
          sides and bus seats, the piercing blue of the shadows cast by
          salarymen and their briefcases, the eggshell white and cream of the
          lines drawn on the regal Toyota Crown.
        </quote>
      </Row>
    </SharedLayout>
  );
};

export default Dreaming;
