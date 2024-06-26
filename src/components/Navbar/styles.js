"use client"

import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: calc(100% - 60px);
  padding: 30px;
  background: #AD7D00;
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
`

export const Logo = styled(Image)`

`

export const LogoTitle = styled.h1`
  font-size: 52px;
  color: #FFFFFF;
  font-weight: 500;
  text-decoration: none;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const NavLink = styled.button`
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 400;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
`

export const ProfilePicture = styled.img`
  border-radius: 100%;
  cursor: pointer;
`