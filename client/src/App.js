import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Carousel from "./components/carousel";
import "./App.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Gotham-Black";
  src: url("https://cpxfonts.cc/Gotham-Black.otf")
    format("opentype");
  font-weight: normal;
  font-style: normal;
}
 
@font-face {
  font-family: "Gotham-Ligth";
  src: url("https://cpxfonts.cc/Gotham-Ligth.otf")
    format("opentype");
}
 
@font-face {
  font-family: "Gotham-Medium";
  src: url("https://cpxfonts.cc/Gotham-Medium.otf")
    format("opentype");
  font-weight: normal;
  font-style: normal;
}
 
@font-face {
  font-family: "Gotham-Thin";
  src: url("https://cpxfonts.cc/Gotham-Thin.otf")
    format("opentype");
  font-weight: normal;
  font-style: normal;
}
 
@font-face {
  font-family: "Gotham-Ultra";
  src: url("https://cpxfonts.cc/Gotham-Ultra.otf")
    format("opentype");
  font-weight: normal;
  font-style: normal;
}
`

const MainSection = styled.section`

  background-image: url(https://imagedelivery.net/lfSRFuvEHojPT-iMbdh4pw/00a7aad6-e87f-44ce-7059-1c59831f5800/public);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;



  @media screen and (min-width: 768px){
    flex-direction: row-reverse;

    div{
      width: 670px;
      margin: auto;
      display: block
    }
  }
`

const Headline = styled.h1`
  color: white;
  font-size: 45px;
  width:280px;
  line-height: 110%;
  font-family:"Gotham-Ultra";
  display: block;
  margin: 15px auto;
  text-align: left;
  font-weight: 500;

  @media screen and (min-width: 768px){
    font-size: 65px;
    width:399px;
    font-weight: 900;

  }

`
const Bonus = styled.span`
  color: #4174c7;
  font-size: 60px;
  font-weight: 700;

  @media screen and (min-width: 768px){
    font-size: 85px;
    font-weight: 900;
  }
`

const List = styled.ul`
  // width: 280px;
  display:block;
  margin: 20px 0px 20px 15px;
  color: white;
  font-size: 25px;
  list-style: none;
  line-height: 110%

`

const LI = styled.li`
  font-family: "Gotham-Thin";
  list-style-image: url(https://imagedelivery.net/lfSRFuvEHojPT-iMbdh4pw/8fc799a0-fd57-485d-e6e5-8d4ed431a200/public);
  font-size: 28px;
  margin: 10px 0px;
  

  @media screen and (min-width: 768px){
    margin: 20px 0px 20px 105px;
    font-size: 35px;

  }

`
const ContainerImg = styled.div`
  background-image: url(https://imagedelivery.net/lfSRFuvEHojPT-iMbdh4pw/8be787a0-0b6b-4e2c-86e5-f58cc631a100/public);
  background-size: 100% 100%;
  height: 350px;
  rotate: 3deg;
  scale: 1.1;
  position: relative;

  @media screen and (min-width: 768px){
    height: 100%;
    scale: 1.4;
    rotate: 5deg;
    margin: 200px 0px 0px -300px !important;
    background-size: 700px;
    background-repeat: no-repeat;
    background-position: bottom left;
  }

`

const float = keyframes`
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-20px); /* Adjust the distance as needed */
}
`;


const Player = styled.img`
  width: 155px;
  display: block;
  rotate: -3deg;
  margin: -20px auto 10px auto;
  animation: ${float} 5s ease-in-out infinite;


  @media screen and (min-width: 768px){
    display: none;
  }
  `


const PlayerDesktop = styled.img`
  width: 500px;
  margin-left: 250px;
  margin-top: -100px;
  scale: 0.5;
  animation: ${float} 5s ease-in-out infinite;


  @media screen and (max-width: 768px){
    display: none;
  }
`


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const Ball = styled.img`
  width: 50px;
  position: absolute;
  top: -20px;
  right: 80px;
  animation: ${rotate} 35s linear infinite; 


  @media screen and (min-width: 768px){
    width: 120px !important;
    position: absolute;
    right: -120px;
    top: 20px;
  }
`
const BtnContainer = styled.div`
  rotate: -3deg;
  display: block;
  margin: auto;

  @media screen and (min-width: 768px){
    display: none !important;
  }
`

const BtnContainer2 = styled.div`
  rotate: 0.5deg;
  display: block;
  margin: 0px auto !important;
  display:none;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Btn = styled.a`
  display:block;
  margin: 0px auto 0px auto;
  text-align: center;
  color: black;
  background-color: white;
  max-width: 180px;
  border-radius: 8px;
  padding: 10px;
  font-size: 17px;
  text-decoration: none;
  font-weight: 600;
  font-family: "Gotham-Thin";


  @media screen and (min-width: 768px){
    max-width: 350px;
    font-size: 30px;
    padding: 20px 0px;
    font-weight: 700;

  
`

const BonusSection = styled.section`
  background-color: black;
  padding: 5px 10px;
  font-family: "Gotham-Medium";


  h2{
    color: white;
    text-align: center;
  }

  div{
    margin: 10px 0px;
  }

`

const BonusList = styled.div`
  @media screen and (min-width: 768px){
    display: flex;
    justify-content: center;
    gap: 55px;
  }
`

const BonusDiv = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

const Nums = styled.div`
  border: 3px solid #4174c7;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;  /* Add this to center the content horizontally */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0px 0px;
  font-family: "Gotham-Medium"

  @media screen and (min-width: 768px){
    width: 60px;
    height: 60px;
    font-size: 30px !important;
    }

`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;


`

const Info = styled.p`
  color: #4174c7;
  margin:0px;
  text-align: left;
  font-weight: 700;

  @media screen and (min-width: 768px){
    font-size: 26px;
  }
`

const Descript = styled.p`
  color: white;
  margin: 0px;
  font-size: 14px;
`
const ContainerRedirect = styled.section`
  background-color: #101318;
  text-align: center;
  color: white;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const Arrow = styled.div`
  border: 1px solid white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;

  img{
    margin: auto;
    display: block;
    width: 16px;
  }
`

const Sponsors = styled.section`
  background-color: #1C2026;
  padding: 15px 15px;

  h3{
    margin: 0px;
    color: white;
  }

  p{
    margin: 10px 0px;
    color: gray;
    font-size: 13px;
  }
`
const Prizes = styled.footer`
  padding: 10px;
  background-color: #101419;
  color: white;

  h3{
    color: white;
    font-weight: 500;
  }
`;



const Prize = styled.img`
  // flex: 1; /* Makes sure images take available space and wrap correctly */
  // max-width: 40%;
  margin: 5px 8px; /* Optional: adds spacing between images */

  width: 120px;
  
  @media screen and (min-width: 768px){
    width: 130px !important;
  }
`

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Ensures images wrap if they exceed container width */
  margin: 0 auto; /* Center the container horizontally */
`;

const Play = styled.div`
  align-items: center;
  display:flex;
  justify-content: center;
  gap: 20px;
  padding: 20px 0px;
  margin: 20px auto;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`

const Age = styled.img`
  width: 40px !important;
`

const Android = styled.img`
  width: 130px;
`

const Bottom = styled.div`
  position: absolute;
  height: 180px;
  width: 100vw;
  bottom: 0;
  background-color: #4174c7;
`

function App() {
  const [offerUrl, setOfferUrl] = useState('')

  useEffect(()=>{
    if(window){
      setOfferUrl(window.offer)
    }
  }, [])


  return (
    <div className="App">
      <GlobalStyle />
      <MainSection>
        <div>
          <Headline>
            GANHE ATÉ <Bonus>R$ 1.000</Bonus> EM BÔNUS
          </Headline>
          <List>
            <LI style={{ fontFamily:'Gotham-Thin' }}>
              Pagamentos via Pix
            </LI>
            <LI style={{ fontFamily:'Gotham-Thin' }}>
              Jogos ao vivo
            </LI>
            <LI style={{ fontFamily:'Gotham-Thin' }}>
              Super Odds
            </LI>
          </List>
          <br></br>
          <BtnContainer2>
              <Btn href={offerUrl}>
                ABRA SUA CONTA
              </Btn>
            </BtnContainer2>
        </div>
        <div>
          <ContainerImg>
            <div>
              <Ball src="https://visuals.kaizengaming.com/io/api/image/optimize?u=https%3A%2F%2Fc.bannerflow.net%2Faccounts%2Fbetano-stoiximan%2F5e3174ae9562931f344ad1a5%2Fimages%2F0d0dc9ab-2e13-427c-a53c-7989067f67a4.png&w=143&h=171&q=99&f=webp&rt=contain" alt="" />
            </div>
            <div>
              <Player src="https://imagedelivery.net/lfSRFuvEHojPT-iMbdh4pw/ab8a7bb2-a58d-4186-7772-bee6c6d7d300/public" alt="" />

              <PlayerDesktop src="https://imagedelivery.net/lfSRFuvEHojPT-iMbdh4pw/ab8a7bb2-a58d-4186-7772-bee6c6d7d300/public" />
            </div>
            <BtnContainer>
              <Btn href={offerUrl}>
                ABRA SUA CONTA
              </Btn>
            </BtnContainer>
          </ContainerImg>
        </div>
      </MainSection>
      <BonusSection>
        <h2>
          COMO GANHAR SEU BÔNUS
        </h2>
        <BonusList>
          <div>
            <BonusDiv>
              <Nums>
                <p>
                  1
                </p>
              </Nums>
              <ContainerInfo>
                <Info>
                  CRIE SUA CONTA
                </Info>
                <Descript>
                  FÁCIL E RÁPIDO EM ALGUNS MINUTOS
                </Descript>
              </ContainerInfo>
            </BonusDiv>
          </div>
          <div>
            <BonusDiv>
              <Nums>
                <p>
                  2
                </p>
              </Nums>
              <ContainerInfo>
                <Info>
                    FAÇA UM DEPÓSITO
                </Info>
                <Descript>
                  DEPÓSITO MÍNIMO DE R$50
                </Descript>
              </ContainerInfo>
            </BonusDiv>
          </div>
          <div>
            <BonusDiv>
              <Nums>
                <p>
                  3
                </p>
              </Nums>
              <ContainerInfo>
                <Info>
                  RECEBA SEU BÔNUS
                </Info>
                <Descript>
                  RECEBA O DOBRO NA HORA
                </Descript>
              </ContainerInfo>
            </BonusDiv>
          </div>
        </BonusList>
      </BonusSection>
      {/* <ContainerRedirect>
        <span>
          Consulte T&C 
        </span>
        <Arrow>
          <img src="https://landingpages.kaizengaming.com/new-logo-layout/external_link_arrow.svg" />
        </Arrow>
      </ContainerRedirect>
      <Sponsors>
        <h3>
          PATROCINADOR OFICIAL
        </h3>
        <p>
          Apoiamos o Esporte e o Fair-Play
        </p>
        <Carousel />
      </Sponsors> */}
      {/* <Prizes>
        <h3>
          Prêmios
        </h3>
        <CenteredDiv>
          <Prize src="https://landingpages.kaizengaming.com/new-logo-br-sport/awd_egr-award-2022-operator-of-the-year.png" alt="" />
          <Prize src="https://landingpages.kaizengaming.com/new-logo-br-sport/awd_egr-award-2022-operator-of-the-year.png" alt="" />
          <Prize src="https://landingpages.kaizengaming.com/new-logo-br-sport/awd_egr-award-2022-operator-of-the-year.png" alt="" />
          <Prize src="https://landingpages.kaizengaming.com/new-logo-br-sport/awd_egr-award-2022-operator-of-the-year.png" alt="" />
          <Prize src="https://landingpages.kaizengaming.com/new-logo-br-sport/awd_egr-award-2022-operator-of-the-year.png" alt="" />
        </CenteredDiv>
        <div>
          <p>
              Aplicativos Móveis
          </p>
          <div>
              <Android src="https://landingpages.kaizengaming.com/new-logo-br-sport/icon-android.png" alt="" />
          </div>
        </div>
        <Play>
          <>
            <Age width={20} src="https://landingpages.kaizengaming.com/new-logo-br-sport/discl_18.png" alt="" />
          </>
          Jogue com responsabilidade
        </Play>
      </Prizes> */}
    </div>
  );
}

export default App;
