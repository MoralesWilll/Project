import React from "react";
import styled from "styled-components";

// Breakpoints para responsive
const breakpoints = {
  mobile: "768px",
};

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
  height: 100%;
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); /* shadow-lg shadow-gray-500/50 */

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  height: 15rem; /* h-60 */
  width: 100%;
  object-fit: contain; /* object-contain */
  border-radius: 0.375rem; /* rounded-md */

  @media (max-width: ${breakpoints.mobile}) {
    height: 12rem; /* Ajustamos la altura en móviles */
  }
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

  @media (max-width: ${breakpoints.mobile}) {
    height: auto; /* Dejar que crezca según el contenido */
  }
`;

const Title = styled.h4`
  background-color: white;
  color: #003c71; /* text-[#003C71] */
  font-weight: bold;
  padding-left: 1.25rem; /* pl-5 */

  @media (max-width: ${breakpoints.mobile}) {
    text-align: center;
    font-size: 1.25rem; /* Ajustamos el tamaño de la fuente */
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 1rem; /* p-1 */

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Price = styled.p`
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem; /* Ajustamos el tamaño de la fuente */
  }
`;

const PriceValue = styled.p`
  background-color: #ffffff58; /* bg-[#ffffff58] */
  padding: 0.25rem 0.5rem; /* p-1 rounded-md */
  border-radius: 0.375rem; /* rounded-md */

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem; /* Ajustamos el tamaño de la fuente */
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  padding: 1rem; /* p-5 */
  text-align: center;
  font-size: 0.75rem; /* text-xs */

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3333%;
  border: 1px solid white;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: white;
  width: 30%;
  color: #003c71;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    width: 45%; /* Hacemos que el botón ocupe más espacio en móviles */
  }
`;

const Card: React.FC = () => (
  <CardContainer>
    <ImageContainer>
      <Image src="/acces/img/HERO.png" alt="place" />
    </ImageContainer>
    <InfoContainer>
      <Title>Nombre propiedad</Title>
      <PriceContainer>
        <Price>Precio</Price>
        <PriceValue>2.000.000</PriceValue>
      </PriceContainer>
      <DetailsContainer>
        <Detail>
          <p className="font-bold">Habitaciones</p>
          <p>2</p>
        </Detail>
        <Detail>
          <p className="font-bold">Baños</p>
          <p>1</p>
        </Detail>
        <Detail>
          <p className="font-bold">Área</p>
          <p>60</p>
        </Detail>
      </DetailsContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#003C71",
          padding: "0.75rem",
        }}
      >
        <Button>Ver</Button>
        <Button>Editar</Button>
      </div>
    </InfoContainer>
  </CardContainer>
);

export default Card;
