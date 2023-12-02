import React from "react";
import { Header, HeadH1, Logo, Options, Text, List, HeadButton, ButtonText } from "./style";
import { Hent } from "../assets";

<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Poppins:wght@100;400;500;600&display=swap" rel="stylesheet"></link>

export default function heading() {
  return (
    <Header>
      <Options>
      <Logo>
      <img src={ Hent.src } alt="" />
      <HeadH1>hent</HeadH1>
      </Logo>
      <List>
      <Text>  Quem Somos </Text>
      <Text> Como Funciona </Text>
      <Text> Serviços  </Text>
      
      </List>
    
      </Options>
     <HeadButton>
      <ButtonText>Acesse a HentSign</ButtonText>
      </HeadButton>
    </Header>
  );
}
