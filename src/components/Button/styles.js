'use client'

import { styled } from "styled-components";

export const Container = styled.div`
  padding: 10px 30px;
  border-radius: 12px;
  font-size: ${props => props.small ? "24px" : "40px"};
  font-weight: 600;
  background: #AD7D00;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`