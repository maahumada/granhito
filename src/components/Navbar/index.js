'use client'
import { NavLink, Logo, LogoContainer, LogoTitle, ProfilePicture, UserContainer, Wrapper } from "./styles"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { push } = useRouter();
  return (
    <Wrapper>
      <LogoContainer onClick={() => push("/")}>
        <Logo width={146} height={75} src="/img/logo.png" />
        <LogoTitle>granhito</LogoTitle>
      </LogoContainer>
      <UserContainer>
        <NavLink href="/">Inicio</NavLink>
        <ProfilePicture width={52} height={52} src="/img/profile.png" />
      </UserContainer>
    </Wrapper>
  )
};

export default Navbar;