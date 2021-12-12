import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello...! <br/>
        I'm Jaswanth
      </SectionTitle>
      <SectionText>
        I design and develop websites, online stores and services for customers of all sizes in a stylish mannner. Aspiring developers to take their development skills to the next level and build awesome apps.
      </SectionText>
      <Button onClick={() => (location.href = "mailto:jaswantharyaa@gmail.com")}>
        Hire Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;