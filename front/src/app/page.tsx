"use client";

import styled from "styled-components";
import Nav from "@/components/Nav";
import Card from "@/components/Cards";
import FooterPage from "@/components/Footer";
//HERO
const breakpoints = {
  mobile: "768px", // Puedes ajustar el valor según tus necesidades
};

const Container = styled.div`
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
`;

const MainSection = styled.section`
  text-align: left;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 15%;
  background: url(/acces/img/HERO.png);
  background-size: cover;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    padding-bottom: 5%;
  }
`;

const TitleH1 = styled.h1`
  font-size: 10rem;
  color: #003c71;
  height: 11rem;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 4rem;
    height: auto;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 20px;
  color: white;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffffff44;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #003c71;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 15px 0;
    font-size: 1.2rem;
  }
`;

const Titleh3 = styled.h3`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  font-size: 3rem;
  border-top: solid 2px #003c71;
  border-bottom: solid 2px #003c71;
  color: #003c71;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
    padding: 15px 0;
  }
`;

const Services = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const IconServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 20rem;
  border: solid 1px black;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const ImgIconArrendamiento = styled.img`
  height: 70%;
  width: 100%;
  border: solid 1px black;

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    width: 100%;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <MainSection>
        {/*---------------NAV---------------- */}
        <Nav />
        {/*---------------SECTION HERO---------------- */}
        <div className="ml-5">
          <TitleH1 className="xs: text-xs">Medellín</TitleH1>
          <Subtitle>Un lugar para vivir</Subtitle>
          <Button>Conoce más</Button>
        </div>
      </MainSection>
      <Titleh3>¿Qué desea realizar hoy?</Titleh3>
      {/*---------------SECTION ICONS CUSTOMERS---------------- */}
      <section className="section-icon-home h-60 w-100 p-5 flex flex-row flex-nowrap justify-around align-around bg-[#003C71] mb-10 mt-40 ">
        <div className="w-1/4 h-full flex justify-center items-center flex-col text-center">
          <img
            src="/acces/icons/arrendatario.png"
            alt="arrendatario"
            className="h-3/5 cursor-pointer"
          />
          <h4 className="h-1/5 w-full flex justify-center items-center text-white font-bold cursor-pointer">
            Arrendatario
          </h4>
        </div>
        <div className="w-1/4 h-fullx flex justify-center items-center flex-col text-center ">
          <img
            src="/acces/icons/arrendamiento.png"
            alt="arrendador"
            className="h-3/5 cursor-pointer object-fill "
          />
          <h4 className="h-1/5 w-full flex justify-center items-center text-white font-bold cursor-pointer">
            Arrendador
          </h4>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center flex-col text-center">
          <img
            src="/acces/icons/vendedor.png"
            alt="vendedor"
            className="h-3/5 cursor-pointer"
          />
          <h4 className="h-1/5 w-full flex justify-center items-center  text-white font-bold cursor-pointer">
            Vendedor
          </h4>
        </div>
      </section>
      {/*---------------SECTION TARGETS "DESTACADOS"---------------- */}
      <section className="h-full w-full mt-40 ">
        {/*---------------TITLE 2 "DESTACADOS" AND DESCRIPTION----------- */}
        <div className="flex flex-col ">
          <Titleh3>Destacados</Titleh3>
          <h4 className="text-[#747474] text-center  ">
            Descubre las nuevas tendencias e incorporaciones trasadas en el
            ultimo mes.
          </h4>
        </div>
        {/*---------------TARGETS---------------- */}
        <div className="section-targets flex flex-col-3 justify-around items-center container-cards h-full w-full gap-40 p-10">
          {/*---------------CONTAINER TARGETS---------------- */}
          {/*---------------CARD 1---------------- */}
          <Card></Card>
          {/*---------------CARD 2---------------- */}
          <Card></Card>
          {/*---------------CARD 3---------------- */}
          <Card></Card>
        </div>
        {/*---------------BUTTON MORE TARGETS---------------- */}
        <div className="flex justify-center items-center w-full">
          <button className="bg-[#003C71] w-1/6 text-white rounded-sm shadow-[#003C71]-500/40">
            Conoce mas
          </button>
        </div>
      </section>
      {/*---------------TECNOLOGYS---------------- */}
      <section className="section-tecnologys flex w-full h-full p-5 justify-around items-center gap-20 mt-40 ">
        <div className=" flex justify-center w-2/12 h-40 ">
          <img
            src="/acces/img/nextjs_logo.png"
            alt=""
            className="object-contain "
          />
        </div>
        <div className=" flex justify-center w-2/12 h-40">
          <img
            src="/acces/img/mysql_logo.png"
            alt=""
            className="object-contain"
          />
        </div>
        <div className=" flex justify-center w-2/12 h-40">
          <img
            src="/acces/img/logoJava.png"
            alt=""
            className="object-contain"
          />
        </div>
      </section>
      {/*---------------SECTION FOOTER---------------- */}
      <FooterPage></FooterPage>
    </Container>
  );
};

export default HomePage;
