import React from 'react';
import styled from 'styled-components';
// import Button from './../../generic/Form/Buttons/TransparentButton';
// import RubleSign from './../../generic/RubleSign';

const Wrapper = styled.div`
  text-align: center;
  height: 280px;
  padding-top: 15px;
  
  @media (min-width: 768px) {
    height: 350px;
    padding-top: 15px;
  }
`;

const Background = styled.div`
  background-image: url(${({ image }) => image});
  position: relative;
  background-size: cover;
  height: 100%;
`;

const Name = styled.h3`
  color: #fff;
  font-family: 'Roboto',sans-serif;
  font-size: 38px;
  margin: 20px 0;
`;

const Description = styled.p`
  opacity: 0.8;
  font-family: 'Roboto',sans-serif;
  font-size: 18px;
  color: #fff;
  margin: 0;
  padding: 0 30px;
`;

const Shadow = styled.div`
  background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
  background-size: 100% 130%;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Section = styled.section`
  padding-bottom: 60px;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default ({ name, description, price, image, onClick }) => (<Wrapper>
  <Background image={image}>
    <Shadow />
    <CardContent>
      <Section>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Section>
    </CardContent>
  </Background>
</Wrapper>);
