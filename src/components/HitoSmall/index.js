import React from 'react'
import { Delete, InfoContainer, InfoName, InfoObjective, ProgressContainer, ProgressFilled, Stat, StatIcon, StatText, Stats, StatsContainer, Wrapper } from './styles'
import { useRouter } from 'next/navigation';
import parseDate from '@/utils/functions/parseDate';

const HitoSmall = ({ _id, nombre, objetivo, fechaFinal, cantidadMiembros, progreso }) => {

  const { push } = useRouter();

  console.log(new Date(fechaFinal), new Date, parseDate(new Date()));

  return (
    <Wrapper completed={progreso >= objetivo} onClick={() => push(`/hito/${_id}`)}>
      <InfoContainer>
        <InfoName>{nombre}</InfoName>
        <InfoObjective>Objetivo: ${objetivo}</InfoObjective>
      </InfoContainer>
      <ProgressContainer>
        <ProgressFilled completed={progreso >= objetivo} percentage={progreso / objetivo} />
      </ProgressContainer>
      <StatsContainer>
        <Stats>
          <Stat>
            <StatText>{cantidadMiembros}</StatText>
            <StatIcon width={31} height={23} src="/icons/group.png" />
          </Stat>
          <Stat>
            <StatText>{parseDate(new Date(fechaFinal))}</StatText>
            <StatIcon width={28} height={28} src="/icons/time.png" />
          </Stat>
        </Stats>
        {/* <Delete width={29} height={32} src="/icons/delete.png" /> */}
      </StatsContainer>
    </Wrapper>
  )
};

export default HitoSmall;