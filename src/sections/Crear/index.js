'use client'

import { useState } from "react";
import { AddMemberContainer, AddMemberIcon, AddMemberInput, AmountButton, AmountButtonInput, AmountList, BoxA, BoxATitle, BoxB, BoxBTitle, BoxContainer, Container, InputLong, InputRow, InputShort, Member, MemberContainer, MemberDelete, Wrapper } from "./styles";
import Button from "@/components/Button";

const CrearSection = () => {

  const [members, setMembers] = useState([]);
  const [inputValue, setInputValue] = useState();

  return (
    <Wrapper>
      <Container>
        <InputRow>
          <InputLong placeholder="Nombre" />
          <InputShort placeholder="Objetivo final" type="number" />
        </InputRow>
        <InputRow>
          <InputShort placeholder="Alias" />
          <InputShort placeholder="CVU" />
          <InputShort placeholder="Fecha de finalizacion" type="date" />
        </InputRow>
        <BoxContainer>
          <BoxA>
            <BoxATitle>Agregar miembros</BoxATitle>
            <AddMemberContainer>
              <AddMemberInput value={inputValue} onChange={e => setInputValue(e.target.value)} />
              <AddMemberIcon width={26} height={22} src="/icons/send.png" onClick={() => !members.includes(inputValue) && setMembers([...members, inputValue])} />
            </AddMemberContainer>
            {members.map((member, index) => <MemberContainer>
              <Member key={index}>{member}</Member>
              <MemberDelete onClick={() => setMembers(members.filter(m => m != member))} width={14} height={14} src="/icons/cancel.png" />
            </MemberContainer>)}
          </BoxA>
          <BoxB>
            <BoxBTitle>Montos sugeridos</BoxBTitle>
            <AmountList>
              <AmountButton><AmountButtonInput /></AmountButton>
              <AmountButton><AmountButtonInput /></AmountButton>
              <AmountButton><AmountButtonInput /></AmountButton>
              <AmountButton>Otro</AmountButton>
            </AmountList>
          </BoxB>
        </BoxContainer>
        <Button>CREAR HITO</Button>
      </Container>
    </Wrapper>
  )
}

export default CrearSection;