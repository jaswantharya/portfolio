import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: `${10}+`, text: 'Open Source Projects'},
  { number: `${1400}+`, text: 'Leetcode Ranking', },
  { number: `${6688}`, text: 'Rank in Google Hash Code 2021', },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider/>
    <br/>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
