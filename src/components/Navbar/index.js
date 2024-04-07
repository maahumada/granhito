'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import { NavLink, Logo, LogoContainer, LogoTitle, ProfilePicture, UserContainer, Wrapper } from "./styles"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { push } = useRouter();

  const {data: session} = useSession();

  const logOut = () => {
    signOut({ callbackUrl: "/", redirect: true });
  }

  return (
    <Wrapper>
      <LogoContainer onClick={() => push("/")}>
        <Logo width={146} height={75} src="/img/logo.png" />
        <LogoTitle>granhito</LogoTitle>
      </LogoContainer>
      {session && <UserContainer>
        <NavLink onClick={() => logOut()}>Cerrar Sesion</NavLink>
        <ProfilePicture width={52} height={52} src={session.user.image} />
      </UserContainer>}
      {!session && <UserContainer>
        <NavLink onClick={() => signIn()}>Iniciar Sesion</NavLink>
      </UserContainer>}
    </Wrapper>
  )
};

export default Navbar;