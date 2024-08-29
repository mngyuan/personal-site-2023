import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';
import {Video} from '@/components/Video';

import teachingPic1 from 'public/IMG_3358.webp';
import teachingPic2 from 'public/IMG_5942.webp';
import teachingPic3 from 'public/IMG_5927.webp';

const Teaching = () => {
  return (
    <SharedLayout>
      <Row
        left={
          <Video
            className="h-full w-full object-cover rounded-md"
            autoPlay
            muted
            loop
            src="/IMG_4221-h265.mp4"
          />
        }
      >
        Student work from my class titled "Creative Coding Primer", from an
        exercise I designed for introducing javascript with generative drawing
        in p5.js.
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={teachingPic1}
            alt="A classroom full of students working together at different tables."
          />
        }
      >
        Diploma students engage in group activities in the lecture room at UAL
        Creative Computing Institute.
      </Row>
      <Row>
        I've really enjoyed teaching creative computing / creative coding and
        software to artists because I've found it to be very empowering for
        their work and lives, and surprisingly relevant to contemporary social
        issues, movements, and culture.
      </Row>
      <Row
        tall
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={teachingPic2}
            alt="A pen plotter is mounted to a wall and a large roll of paper with drawings on it is coming out of it like a printer."
          />
        }
      >
        Student work at the CCI 2024 Summer Festival using an Axidraw pen
        plotter and p5.js with ml5.js.
      </Row>
      <Row
        final
        left={
          <Image
            className="lg:h-1/2 w-full object-cover rounded-md sticky top-22 -z-10"
            src={teachingPic3}
            alt="A pen plotter is mounted to a wall and a large roll of paper with drawings on it is coming out of it like a printer."
          />
        }
      >
        A gift from my students, myself rendered as a Mii (I happened to wear
        the exact same clothes as the Mii on the day this was revealed to me).
      </Row>
    </SharedLayout>
  );
};

export default Teaching;
