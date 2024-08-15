import Image from 'next/image';
import {motion} from 'framer-motion';
import SharedLayout, {Row, fadeInItem} from '@/components/SharedLayout';

import taPic1 from 'public/ta wip for mock-02.png';
import taPic2 from 'public/research-slide-mock-04.png';
import taPic3 from 'public/research-slide-mock-03.png';
import taPic4 from 'public/Screen Shot 2021-06-27 at 11.15.06 AM.webp';
import taPic5 from 'public/TA long card-02.png';
import taPic6 from 'public/Screenshot 2024-08-15 at 6.51.53 PM.png';

const TA = () => {
  return (
    <SharedLayout>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={taPic1}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        By encouraging people who natively read Chinese characters to deeper
        question their formation, and the implications it has for Chinese /
        Japanese societies, I hope to reveal a flexibility and playfulness built
        into one of the world’s oldest languages.
      </Row>
      <Row>
        This project began with examining potentially problematic character
        compositions by focusing on the character construction itself within
        both Chinese and Japanese language contexts.
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={taPic2}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        Commonly, design projects focusing on Chinese eschew difficult
        conversations by highlighting the few playful and fully semantic
        character constructions—it was my goal here to tackle the much more
        complicated truth of phonetic borrowing, embedded sexism, and more.
      </Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={taPic3}
            alt="MX-CLP, a new video editing interface"
          />
        }
      ></Row>
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={taPic4}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        I interviewed Japanese calligraphers, feminist activists, and through
        the use of translators, conducted ethnographic research on the link
        between Chinese characters in use in Japan and the Japanese psyche. This
        included a workshop conducted for calligraphy students on inventing new
        Kanji.
      </Row>
      <Row />
      <Row
        left={
          <Image
            className="h-full w-full object-cover rounded-md"
            src={taPic5}
            alt="MX-CLP, a new video editing interface"
          />
        }
      >
        In the end, “TA” presents 祂 , the third personal pronoun for deities,
        as an alternative to gendered pronouns in Chinese, alongside 㐴 , a
        character resembling the english letters T and A. It’s a provocation to
        hanzi / kanji literate peoples everywhere - to examine their written
        language more deeply, appreciate its history, and to think about its
        future, a critically important task today as the art and daily task of
        writing Chinese characters is slowly disappearing digitally. If the
        future is Chinese, what characters will it use?
      </Row>
      <Row
        left={
          <a href="https://criticalcode.recipes/" target="_blank">
            <Image
              className="h-full w-full object-cover rounded-md"
              src={taPic6}
              alt="MX-CLP, a new video editing interface"
            />
          </a>
        }
      ></Row>
      <Row>
        This project was adapted for and featured in the{' '}
        <a href="https://criticalcode.recipes/" target="_blank">
          Critical Coding Cookbook
        </a>
        , a book of speculative recipes on intersectional feminist approaches to
        teaching and learning, published by XinXin and Katherine Moriwaki of
        Parsons School of Design.
      </Row>
    </SharedLayout>
  );
};

export default TA;
