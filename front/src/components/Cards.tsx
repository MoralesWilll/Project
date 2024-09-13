import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 16.6667%; /* w-1/6 */
  height: 100%;
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); /* shadow-lg shadow-gray-500/50 */
`;

const ImageContainer = styled.div`
  height: 15rem; /* h-60 */
  width: 100%;
  object-fit: contain; /* object-contain */
  border-radius: 0.375rem; /* rounded-md */
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 0.375rem; /* rounded-md */
`;

const InfoContainer = styled.div`
  height: 50%; /* h-2/4 */
  width: 100%;
  background-color: #003c71; /* bg-[#003C71] */
  color: white;
`;

const Title = styled.h4`
  background-color: white;
  color: #003c71; /* text-[#003C71] */
  font-weight: bold;
  padding-left: 1.25rem; /* pl-5 */
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0.25rem; /* p-1 */
`;

const Price = styled.p`
  font-weight: bold;
`;

const PriceValue = styled.p`
  background-color: #ffffff58; /* bg-[#ffffff58] */
  padding: 0.25rem 0.5rem; /* p-1 rounded-md */
  border-radius: 0.375rem; /* rounded-md */
`;

const DetailsContainer = styled.div`
  display: flex;
  padding: 1.25rem; /* p-5 */
  text-align: center;
  font-size: 0.75rem; /* text-xs */
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3333%; /* w-2/6 */
`;

const Button = styled.button`
  background-color: white;
  width: 25%; /* w-1/4 */
  color: #003c71; /* text-[#003C71] */
  border-radius: 0.25rem; /* rounded-sm */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); /* shadow-md-white */
  padding: 0.75rem; /* p-3 */
`;

const Card: React.FC = () => (
  <CardContainer>
    <ImageContainer>
      <Image src="/assets/img/HERO.png" alt="place" />
    </ImageContainer>
    <InfoContainer>
      <Title>Nombre propiedad</Title>
      <PriceContainer>
        <Price>Precio</Price>
        <PriceValue>2.000.000</PriceValue>
      </PriceContainer>
      <DetailsContainer>
        <Detail>
          <p>habitaciones</p>
          <p>2</p>
        </Detail>
        <Detail>
          <p>baños</p>
          <p>1</p>
        </Detail>
        <Detail>
          <p>area</p>
          <p>60</p>
        </Detail>
      </DetailsContainer>
      <div style={{ display: 'flex', justifyContent:'space-around', alignItems: 'center', width: '100%', backgroundColor: '#003C71', padding: '0.75rem' }}>
        <Button>Ver</Button>
        <Button>editar</Button>
      </div>
    </InfoContainer>
  </CardContainer>
);

export default Card;
