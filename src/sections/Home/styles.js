'use client'

import Image from "next/image";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 32px);
  padding: 16px;
  gap: 16px;
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`

export const SortTitle = styled.p`
  font-size: 52px;
  font-weight: 400;
  color: #000000;
`

export const SortIcon = styled(Image)`
`

export const HitosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`