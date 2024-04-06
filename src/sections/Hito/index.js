'use client'

import Button from "@/components/Button";
import { Action, ActionIcon, ActionText, Actions, Amount, AmountButton, AmountButtonInput, AmountList, Box, BoxesContainer, Container, Description, FileUpload, FileUploadContainer, Granito, Input, Label, Message, MyPicture, Name, NameContainer, ProfilePicture, ProgressContainer, ProgressFilled, Row, Stat, StatIcon, StatText, Stats, UserContainer, UserInfo, UserMessage, Wrapper } from "./styles";
import { useState } from "react";

const hito = { nombre: "Universidad Hija", objetivo: 20000, fechaFinal: Date.now(), miembros: [1, 2, 3, 4, 5, 6], progreso: 15000, alias: "cofia.acetato.sopa", cvu: "0100123012432", montosSugeridos: [1000, 2000, 5000], granitos: [
  { owner: { nombre: "Jose", email: "jose@gmail.com", imagen: "https://contadoresenred.com/wp-content/uploads/2021/03/Comprobante-de-pago-IGJ.jpg" }, monto: 4000, mensaje: "Para mi hija genia", likes: ["awkjhaehjkvbfa", "aerkjhfbahejkf", "aekfhjbakjhebf"], adjunto: "", comentarios: ["akwjdbakjwbd", "awdkjbajwkbd", "awkldjbakwjbd"]},
  { owner: { nombre: "Jose", email: "jose@gmail.com", imagen: "https://contadoresenred.com/wp-content/uploads/2021/03/Comprobante-de-pago-IGJ.jpg" }, monto: 4000, mensaje: "Para mi hija genia", likes: ["awkjhaehjkvbfa", "aerkjhfbahejkf", "aekfhjbakjhebf"], adjunto: "", comentarios: ["akwjdbakjwbd", "awdkjbajwkbd", "awkldjbakwjbd"]},
  { owner: { nombre: "Jose", email: "jose@gmail.com", imagen: "https://contadoresenred.com/wp-content/uploads/2021/03/Comprobante-de-pago-IGJ.jpg" }, monto: 4000, mensaje: "Para mi hija genia", likes: ["awkjhaehjkvbfa", "aerkjhfbahejkf", "aekfhjbakjhebf"], adjunto: "", comentarios: ["akwjdbakjwbd", "awdkjbajwkbd", "awkldjbakwjbd"]},
  { owner: { nombre: "Jose", email: "jose@gmail.com", imagen: "https://contadoresenred.com/wp-content/uploads/2021/03/Comprobante-de-pago-IGJ.jpg" }, monto: 4000, mensaje: "Para mi hija genia", likes: ["awkjhaehjkvbfa", "aerkjhfbahejkf", "aekfhjbakjhebf"], adjunto: "", comentarios: ["akwjdbakjwbd", "awdkjbajwkbd", "awkldjbakwjbd"]},
  { owner: { nombre: "Jose", email: "jose@gmail.com", imagen: "https://contadoresenred.com/wp-content/uploads/2021/03/Comprobante-de-pago-IGJ.jpg" }, monto: 4000, mensaje: "Para mi hija genia", likes: ["awkjhaehjkvbfa", "aerkjhfbahejkf", "aekfhjbakjhebf"], adjunto: "", comentarios: ["akwjdbakjwbd", "awdkjbajwkbd", "awkldjbakwjbd"]},
]};

const HitoSection = () => {

  const obtenerFecha = (fin) => {
    return "2M";
  }

  const [amount, setAmount] = useState(0);

  return (
    <Wrapper>
      <Container>
        <NameContainer>
          <Name>{hito.nombre}</Name>
          <Stats>
            <Stat>
              <StatText>{hito.miembros.length}</StatText>
              <StatIcon width={31} height={23} src="/icons/group.png" />
            </Stat>
            <Stat>
              <StatText>{obtenerFecha(hito.fechaFinal)}</StatText>
              <StatIcon width={28} height={28} src="/icons/time.png" />
            </Stat>
          </Stats>
        </NameContainer>
        <Description>Alias {hito.alias} | CVU {hito.cvu}</Description>
        <ProgressContainer>
          <ProgressFilled percentage={hito.progreso / hito.objetivo} />
        </ProgressContainer>
        <BoxesContainer>
          <Box>
            {hito.granitos.map((granito, index) => {
              return <Granito key={index}>
                <Row>
                  <UserContainer>
                    {/* <ProfilePicture width={37} height={37} src={granito.owner.imagen} /> */}
                    <UserInfo>{granito.owner.nombre} aporto su granito</UserInfo>
                  </UserContainer>
                  <Amount>+${granito.monto}</Amount>
                </Row>
                <Row>
                  <UserMessage>"{granito.mensaje || "Sin comentario"}"</UserMessage>
                  <Actions>
                    <Action>
                      <ActionText>{granito.likes.length}</ActionText>
                      <ActionIcon width={23} height={21} src="/icons/like.png" />
                    </Action>
                    <Action>
                      <ActionText>{granito.comentarios.length}</ActionText>
                      <ActionIcon width={20} height={20} src="/icons/comment.png" />
                    </Action>
                    <Action>
                      <ActionIcon width={22} height={22} src="/icons/image.png" />
                    </Action>
                  </Actions>
                </Row>
              </Granito>
            })}
          </Box>
          <Box center={true}>
            <MyPicture width={150} height={150} src="/img/profile.png" />
            <Message>¡Aporta vos tambien!</Message>
            <AmountList>
              {hito.montosSugeridos.map((value, index) => <AmountButton key={index} selected={amount == value} onClick={() => setAmount(value)}>{value}</AmountButton>)}
              <AmountButton onChange={(e) => setAmount(e.target.value)}>
                <AmountButtonInput placeholder="Otro" type="number" min={1} />
              </AmountButton>
            </AmountList>
            <Label>Comentario</Label>
            <Input />
            <FileUploadContainer>
              <Label>Comprobante</Label>
              <FileUpload width={36} height={23} src="/icons/upload.png" />
            </FileUploadContainer>
            <Button>HACER APORTE</Button>
          </Box>
        </BoxesContainer>
      </Container>
    </Wrapper>
  )
}

export default HitoSection;