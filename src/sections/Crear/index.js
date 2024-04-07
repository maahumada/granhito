'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AddMemberContainer, AddMemberIcon, AddMemberInput, AmountButton, AmountButtonInput, AmountList, BoxA, BoxATitle, BoxB, BoxBTitle, BoxContainer, Container, InputLong, InputRow, InputShort, Member, MemberContainer, MemberDelete, Wrapper } from "./styles";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";

const CrearSection = () => {

  const [members, setMembers] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [montosSugeridos, setMontosSugeridos] = useState([1000, 2000, 5000]);

  const { register, handleSubmit } = useForm();

  const { push } = useRouter();

  const {data: session} = useSession();

  const onSubmit = async(data) => {
    const body = {
      ...data,
      objetivo: new Number(data.objetivo),
      montosSugeridos: [new Number(montosSugeridos[0]),new Number(montosSugeridos[1]),new Number(montosSugeridos[2])],
      miembros: [...members, session && session?.user?.email],
      ownerEmail: session?.user?.email
    };
    try{
      const hito = await fetch("/api/hito", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(body)
      }).then(res => res.json());
      push(`/hito/${hito.hito._id}`);
    }catch(err){
      alert("Solicitud no valida, por favor revise los parametros utilizados");
    }
  };

  const addMember = () => {
    setMembers([...members, inputValue]);
    setInputValue("");
  }

  return (
    <Wrapper>
      <Container>
        <InputRow>
          <InputLong placeholder="Nombre" {...register("nombre")} />
          <InputShort placeholder="Objetivo final" type="number" {...register("objetivo")} />
        </InputRow>
        <InputRow>
          <InputShort placeholder="Alias" {...register("alias")} />
          <InputShort placeholder="CVU" {...register("cvu")} />
          <InputShort placeholder="Fecha de finalizacion" type="date" {...register("fechaFinal")} />
        </InputRow>
        <BoxContainer>
          <BoxA>
            <BoxATitle>Agregar miembros</BoxATitle>
            <AddMemberContainer>
              <AddMemberInput value={inputValue} onChange={e => setInputValue(e.target.value)} />
              <AddMemberIcon width={26} height={22} src="/icons/send.png" onClick={() => !members.includes(inputValue) && addMember()} />
            </AddMemberContainer>
            {members.map((member, index) => <MemberContainer key={index}>
              <Member>{member}</Member>
              <MemberDelete onClick={() => setMembers(members.filter(m => m != member))} width={14} height={14} src="/icons/cancel.png" />
            </MemberContainer>)}
          </BoxA>
          <BoxB>
            <BoxBTitle>Montos sugeridos</BoxBTitle>
            <AmountList>
              <AmountButton><AmountButtonInput type="text" value={montosSugeridos[0]} onChange={(e) => setMontosSugeridos([e.target.value, montosSugeridos[1], montosSugeridos[2]])} /></AmountButton>
              <AmountButton><AmountButtonInput type="text" value={montosSugeridos[1]} onChange={(e) => setMontosSugeridos([montosSugeridos[0], e.target.value, montosSugeridos[2]])} /></AmountButton>
              <AmountButton><AmountButtonInput type="text" value={montosSugeridos[2]} onChange={(e) => setMontosSugeridos([montosSugeridos[0], montosSugeridos[1], e.target.value])} /></AmountButton>
              <AmountButton>Otro</AmountButton>
            </AmountList>
          </BoxB>
        </BoxContainer>
        <Button onClick={handleSubmit(onSubmit)}>CREAR HITO</Button>
      </Container>
    </Wrapper>
  )
}

export default CrearSection;