import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+919014637477">+91&nbsp; 9014637477</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:jaswantharyaa@gmail.com">
            jaswantharyaa@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/jaswantharya' target={'_blank'}>
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/m-jaswanth-76a465196/' target={'_blank'}>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://instagram.com/mjaswanth18_' target={'_blank'}>
            <AiFillInstagram size='3rem'/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      <CompanyContainer>
        <Slogan>
          Copyrights &copy; Jaswanth 2021.
        </Slogan>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;