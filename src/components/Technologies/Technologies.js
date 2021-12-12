import React from 'react';
import { DiFirebase, DiReact, DiZend, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={'3rem'}/>
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={'3rem'}/>
        <ListContainer>
          <ListTitle>BackEnd</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js, Databases and Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={'3rem'}/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size={'3rem'}/>
        <ListContainer>
          <ListTitle>Python Developer</ListTitle>
          <ListParagraph>
            Experience with <br/>
            OpenCV, Numpy and Pandas
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
