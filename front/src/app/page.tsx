"use client";

import styled from 'styled-components';
import Nav from '@/components/Nav';


//HERO
const Container = styled.div`
  font-family: Roboto, sans-serif;
  width:100%;
  height: 100%;
`;

const MainSection = styled.section`
  text-align: left;
  width: 100%;
  height: 90vh;
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content:space-between;
  padding-bottom: 15%;
  background:url(/acces/img/HERO.png);
  background-size: cover ;
`;

const TitleH1 = styled.h1`
  font-size: 3rem;
  font-size: 10rem;
  color: #003C71 ;
  height: 11rem;
  width: 100%;
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  margin-bottom: 20px;
  color: white;
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
    background-color: #003C71;
  }
`;
// FIN HERO 
const Titleh3 = styled.h3`
  width:100% ;
  text-align: center;
  padding: 20px 0;
  width:100%;
  font-size: 3rem;
  border-top:solid 2px #003C71;
  border-bottom:solid 2px #003C71;
  color: #003C71 ;
`;

const Services = styled.section`
  display:flex;
  justify-content:space-around;
  align-items: center;
  width: 100%;
`;

const IconServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 20rem;
  border:solid 1px black;
`;

const ImgIconArrendamiento = styled.img`
  height: 70%;
  width: 100%;
  
  border:solid 1px black;
`;


const HomePage: React.FC = () => {
  return (
    <Container>
      <MainSection>
        <Nav />
        <div className='ml-5'>
        <TitleH1>Medellín</TitleH1>
        <Subtitle>Un lugar para vivir</Subtitle>
        <Button>Conoce más</Button>
        </div>
      </MainSection>
      <Titleh3>¿Qué desea realizar hoy?</Titleh3>
      <section className='h-60 w-100 p-5 flex flex-row flex-nowrap justify-around align-around bg-[#003C71] mb-10'>
        <div className='w-1/4 h-full flex justify-center items-center flex-col text-center'>
          <img src="/acces/icons/arrendatario.png" alt="arrendatario" className='h-4/5 cursor-pointer' />
          <h4 className='h-1/5 w-full flex justify-center items-center'>Arrendatario</h4>

        </div>
        <div className='w-1/4 h-fullx flex justify-center items-center flex-col text-center '>
          <img src="/acces/icons/arrendamiento.png" alt="arrendador" className='h-4/5 cursor-pointer object-fill'/>
          <h4 className='h-1/5 w-full flex justify-center items-center'>Arrendador</h4>

        </div>
        <div className='w-1/4 h-full flex justify-center items-center flex-col text-center'>
          <img src="/acces/icons/vendedor.png" alt="vendedor" className='h-4/5 cursor-pointer' />
          <h4 className='h-1/5 w-full flex justify-center items-center '>Vendedor</h4>
          
        </div>
      </section>
      
    </Container>
  );
};

export default HomePage;
