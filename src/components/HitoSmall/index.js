import React from 'react'
import { Delete, InfoContainer, InfoName, InfoObjective, ProgressContainer, ProgressFilled, Stat, StatIcon, StatText, Stats, StatsContainer, Wrapper } from './styles'

const HitoSmall = ({ nombre, objetivo, fechaFinal, cantidadMiembros, progreso }) => {

  const obtenerFecha = (fin) => {
    return "2M";
  }

  return (
    <Wrapper>
      <InfoContainer>
        <InfoName>{nombre}</InfoName>
        <InfoObjective>Objetivo: ${objetivo}</InfoObjective>
      </InfoContainer>
      <ProgressContainer>
        <ProgressFilled percentage={progreso / objetivo} />
      </ProgressContainer>
      <StatsContainer>
        <Stats>
          <Stat>
            <StatText>{cantidadMiembros}</StatText>
            <StatIcon width={31} height={23} src="/icons/group.png" />
          </Stat>
          <Stat>
            <StatText>{obtenerFecha(fechaFinal)}</StatText>
            <StatIcon width={28} height={28} src="/icons/time.png" />
          </Stat>
        </Stats>
        <Delete width={29} height={32} src="/icons/delete.png" />
      </StatsContainer>
    </Wrapper>
  )
};

export default HitoSmall;