import styled from "styled-components";

const Footer = styled.footer`
  height: 20rem;
  width: 100%;
  padding: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  text-align: left;
  margin-top: 10rem;
  box-shadow: inset 0 2px 3px #003c7146;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem;
    height: auto;
  }
`;

interface DivProps {
  center?: boolean;
}

const Div = styled.div<DivProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.center ? "center" : "flex-start")};

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 8rem;
  color: #003c71;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const SubTitle = styled.h3`
  width: 100%;
  color: #003c71;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const List = styled.ul`
  height: 100%;
  width: 100%;
  font-weight: 600;
  color: #003c71;
  padding-top: 1.25rem;
  font-size: 1.5rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ListItem = styled.li`
  width: 100%;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const SocialIcon = styled.img`
  width: 25%;
  padding: 1.25rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25%;
    padding: 0.75rem;
  }
`;

const FooterPage: React.FC = () => (
  <Footer>
    <Div>
      <Title>Logo</Title>
    </Div>
    <Div center>
      <SubTitle>Menu</SubTitle>
      <List>
        <ListItem>
          <a href="/pages/customer" className="no-underline">
            Inicio
          </a>
        </ListItem>
        <ListItem>Servicios</ListItem>
        <ListItem>Nosotros</ListItem>
      </List>
    </Div>
    <Div center>
      <SubTitle>Redes sociales</SubTitle>
      <SocialIcons>
        <SocialIcon src="/acces/icons/instagram.png" alt="Instagram" />
        <SocialIcon src="/acces/icons/correo.png" alt="Correo" />
        <SocialIcon src="/acces/icons/whatsapp.png" alt="WhatsApp" />
      </SocialIcons>
    </Div>
  </Footer>
);

export default FooterPage;
