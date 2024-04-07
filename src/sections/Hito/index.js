'use client'

import Button from "@/components/Button";
import { Action, ActionIcon, ActionText, Actions, Amount, AmountButton, AmountButtonInput, AmountList, Box, BoxesContainer, Container, Description, DescriptionContainer, FileUpload, FileUploadContainer, Granito, Input, Label, Message, MyPicture, Name, NameContainer, OwnerOptions, ProfilePicture, ProgressContainer, ProgressFilled, Row, Stat, StatIcon, StatText, Stats, UserContainer, UserInfo, UserMessage, Wrapper } from "./styles";
import { useEffect, useState } from "react";
import parseDate from "@/utils/functions/parseDate";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

const HitoSection = ({ hitoId }) => {

  const [amount, setAmount] = useState(0);
  const [hito, setHito] = useState({});

  const { register, handleSubmit } = useForm();

  const {data: session} = useSession();

  useEffect(() => {
    const a = async() => {
      try{
        let h = await fetch(`/api/hito?id=${hitoId}`).then(res => res.json());
        h.granitos = h.granitos.reverse();
        setHito(h);
      }catch(err){
        alert("Error obteniendo informacion sobre Hito");
      }
    }
    a();
  }, [hitoId]);

  const onSubmit = async(data) => {
    const body = {
      ...data,
      monto: amount,
      hitoID: hitoId,
      owner: session?.user?.email || "",
      ownerName: session?.user?.name || ""
    }
    try{
      const hito = await fetch("/api/granito", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body) 
      }).then(res => res.json());
    }catch(err){
      alert("Error al intentar crear el granito");
    }
    window.location.reload();
  }

  const verify = async(state, id, hitoID) => {
    if(state){
      const r = await fetch(`/api/granito/verify?id=${id}`, {
        method: "PUT"
      }).then(res => res.json());
      console.log(r);
    }else{
      const r = await fetch(`/api/granito`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ id, hitoID: hito._id })
      }).then(res => res.json());
      console.log(r);
    }
    window.location.reload();
  }

  return (
    <Wrapper>
      <Container>
        <NameContainer>
          <Name>{hito.nombre}</Name>
          <Stats>
            <Stat>
              <StatText>{hito.miembros?.length}</StatText>
              <StatIcon width={31} height={23} src="/icons/group.png" />
            </Stat>
            <Stat>
              <StatText>{parseDate(new Date(hito.fechaFinal))}</StatText>
              <StatIcon width={28} height={28} src="/icons/time.png" />
            </Stat>
          </Stats>
        </NameContainer>
        <DescriptionContainer>
          <Description>Alias {hito.alias} | CVU {hito.cvu}</Description>
          {session?.user?.email != hito?.ownerEmail && <Button small={true}>ABANDONAR</Button>}
        </DescriptionContainer>
        <ProgressContainer>
          <ProgressFilled percentage={hito.progreso / hito.objetivo} />
        </ProgressContainer>
        <BoxesContainer>
          <Box>
            {hito.granitos?.map((granito, index) => {
              return <Granito key={index}>
                <Row>
                  <UserContainer>
                    {/* <ProfilePicture width={37} height={37} src={granito.owner.imagen} /> */}
                    <UserInfo>{granito?.ownerName} aporto su granito</UserInfo>
                  </UserContainer>
                  <Amount>+${granito.monto}</Amount>
                </Row>
                <Row>
                  <UserMessage>"{granito.mensaje || "Sin comentario"}"</UserMessage>
                  <Actions>
                    {/* <Action>
                      <ActionText>{granito?.likes?.length}</ActionText>
                      <ActionIcon width={23} height={21} src="/icons/like.png" />
                    </Action>
                    <Action>
                      <ActionText>{granito?.comentarios?.length}</ActionText>
                      <ActionIcon width={20} height={20} src="/icons/comment.png" />
                    </Action> */}
                    {granito?.verificado && <Action>
                      <ActionIcon width={22} height={22} src="/icons/check.png" />
                    </Action>}
                    {!granito.verificado && session?.user?.email == hito?.ownerEmail && <OwnerOptions>
                      <ActionIcon onClick={() => verify(true, granito._id)} width={20} height={14} src="/icons/tick.png" />
                      <ActionIcon onClick={() => verify(false, granito._id)} width={16} height={16} src="/icons/cancel.png" />
                    </OwnerOptions>}
                  </Actions>
                </Row>
              </Granito>
            })}
          </Box>
          <Box center={true}>
            <MyPicture width={150} height={150} src={session?.user?.image || "/img/profile.png"} />
            <Message>¡Aporta vos tambien!</Message>
            <AmountList>
              {hito.montosSugeridos?.map((value, index) => <AmountButton key={index} selected={amount == value} onClick={() => setAmount(value)}>{value}</AmountButton>)}
              <AmountButton onChange={(e) => setAmount(e.target.value)}>
                <AmountButtonInput placeholder="Otro" type="number" min={1} />
              </AmountButton>
            </AmountList>
            <Label>Comentario</Label>
            <Input {...register("mensaje")} />
            {/* <FileUploadContainer>
              <Label>Comprobante</Label>
              <FileUpload width={36} height={23} src="/icons/upload.png" />
            </FileUploadContainer> */}
            <Button onClick={handleSubmit(onSubmit)}>HACER APORTE</Button>
          </Box>
        </BoxesContainer>
      </Container>
    </Wrapper>
  )
}

export default HitoSection;