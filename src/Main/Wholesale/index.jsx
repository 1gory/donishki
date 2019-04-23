import React from 'react';
import styled from 'styled-components';
import H2 from '../../generic/H2';
import GhostButton from '../../generic/GhostButton';
import background from './background.jpg';

const Wrapper = styled.div`
  background-size: cover;
  background-image: url(${background});
  text-align: center;
  position: relative;
  height: 480px;
`;

const Shadow = styled.div`
  background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
  background-size: 100% 130%;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 5%;
  width: 100%;

  @media (min-width: 768px) {
    top: 10%;
  }
`;

const StyledH2 = styled(H2)`
  font-size: 32px;
  margin: 0;
  padding: 20px;
  color: #fff;

  @media (min-width: 768px) {
    padding: 35px 0;
    font-size: 48px;
  }
`;

const Article = styled.article`
  margin: 0 auto;
  margin-bottom: 30px;
  padding 0 20px;
  font-family: 'Roboto-Light', sans-serif;
  line-height: 1.6em;
  text-align: left;
  color: #fff;
  
  @media (min-width: 768px) {
    margin-bottom: 50px;
    width: 970px;
  }
`;

const GetPriceButton = styled(GhostButton)`
  background-color: #59cb78;
  border-radius: 25px;
  padding: 16px 25px;
  border: none;
`;

const GetPriceLink = GetPriceButton.withComponent('a');

const StyledGetPriceLink = styled(GetPriceLink)`
  color: #fff;
  font-family: 'Roboto-Light', sans-serif;
  text-decoration: none;
`;

export default () => (
  <Wrapper>
    <Shadow />
    <ContentWrapper>
      <StyledH2>Заказать оптом</StyledH2>
      <Article>
        Оптовая закупка донышек для вязания корзинок – это выгодное предложение для мастериц по всей
        России. Техническое оснащение и профессионализм наших сотрудников позволяют производить по
        500 изделий в день. Мы являемся надежным поставщиком деревянных заготовок, поэтому вы можете
        не сомневаться в оперативности изготовления, качественной работе и выгодных условиях
        сотрудничества. Для каждого заказчика проводится индивидуальная консультация с подбором
        необходимых изделий и заготовок из фанеры.
      </Article>
      <StyledGetPriceLink href="/wholesale_price.pdf" target="_blank">
        Скачать оптовый прайс
      </StyledGetPriceLink>
    </ContentWrapper>
  </Wrapper>
);