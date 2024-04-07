'use client'

import Image from "next/image";
import { styled } from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 72px);
  padding: 16px;
  background: rgba(0, 0, 0, .1);
  border-radius: 12px;
  gap: 8px;
`

export const InputRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`

export const InputLong = styled.input`
  width: calc(67% - 24px);
  font-size: 32px;
  font-weight: 400;
  padding: 12px;
  background: #D9D9D9;
  border-radius: 12px;
  border: none;
  outline: none;
`

export const InputShort = styled.input`
  width: calc(33% - 24px);
  font-size: 32px;
  font-weight: 400;
  padding: 12px;
  background: #D9D9D9;
  border-radius: 12px;
  border: none;
  outline: none;
`

export const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const BoxA = styled.div`
  width: calc(48% - 24px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background: rgba(0, 0, 0, .1);
  border-radius: 12px;
`

export const BoxATitle = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: #400;
`

export const MemberContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const Member = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #000000;
`

export const MemberDelete = styled(Image)`
  cursor: pointer;
`

export const AddMemberContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

export const AddMemberInput = styled.input`
  border: none;
  outline: none;
  background: #D9D9D9;
  border-radius: 8px;
  font-size: 24px;
  padding: 8px;
  width: calc(100% - 16px);
`

export const AddMemberIcon = styled(Image)`
  cursor: pointer;
`

export const BoxB = styled.div`
  width: calc(48% - 24px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: rgba(0, 0, 0, .1);
  border-radius: 12px;
  gap: 32px;
`

export const BoxBTitle = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
`

export const AmountList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AmountButton = styled.div`
  background: ${props => props.selected ? "#EFDF4F" : "#D9D9D9"};
  border: none;
  width: 24%;
  height: 65px;
  border-radius: 8px;
  font-size: 32px;
  color: #000000;
  font-weight: 400;
  cursor: pointer;
`

export const AmountButtonInput = styled.input`
  border: none;
  outline: none;
  background: none;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  color: #000000;
`