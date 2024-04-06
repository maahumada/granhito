'use client'

import Image from "next/image";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  background: rgba(0, 0, 0, .1);
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 24px;
  padding: 6px 16px;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoName = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: #000000; 
`

export const InfoObjective = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
`

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const StatText = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #000000;
`

export const StatIcon = styled(Image)`
`

export const Delete = styled(Image)`
`

export const ProgressContainer = styled.div`
  width: 100%;
  height: 36px;
  position: relative;
  background: rgba(0, 0, 0, .2);
  border-radius: 8px;
  overflow: hidden;
`

export const ProgressFilled = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  height: 100%;
  width: 60%;
  background: #EFDF4F;
  border-radius: 8px;
  width: ${props => "calc(100% * " + props.percentage + ")"};
`