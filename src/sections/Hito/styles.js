'use client'

import Image from "next/image";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px 0;
`

export const Container = styled.div`
  width: calc(100% - 72px);
  padding: 16px;
  background: rgba(0, 0, 0, .1);
  border-radius: 12px;
`

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Name = styled.p`
  font-size: 50px;
  color: #000000;
  font-weight: 400;
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

export const Description = styled.p`
  font-size: 30px;
  color: #000000;
  font-weight: 400;
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

export const BoxesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Box = styled.div`
  background: rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.center ? "center" : "flex-start"};
  border-radius: 12px;
  width: calc(49% - 24px);
  min-height: 600px;
  padding: 12px;
  gap: 12px;
`

export const Granito = styled.div`
  background: #FFFFFF;
  display: flex;
  width: calc(100% - 24px);
  padding: 12px 12px;
  flex-direction: column;
  border-radius: 12px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ProfilePicture = styled(Image)`
`

export const UserInfo = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: #000000;
`

export const Amount = styled.p`
  font-size: 40px;
  font-weight: 400;
  color: #AD7D00;
`

export const UserMessage = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

export const ActionText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #000000;
`

export const ActionIcon = styled(Image)`
`

export const MyPicture = styled(Image)`
`

export const Message = styled.p`
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

export const AmountButton = styled.button`
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
  background: none;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 32px;
  color: #000000;
  font-weight: 400;
`

export const Label = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #000000;
  align-self: flex-start;
`

export const Input = styled.input`
  background: #D9D9D9;
  outline: none;
  border-radius: 8px;
  width: calc(100% - 24px);
  border: none;
  padding: 12px;
  font-size: 16px;
`

export const FileUpload = styled(Image)`
  cursor: pointer;
`

export const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: flex-start;
`