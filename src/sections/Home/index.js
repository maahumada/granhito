'use client'
import Button from "@/components/Button";
import { Actions, HitosContainer, SortContainer, SortIcon, SortTitle, Wrapper } from "./styles";
import HitoSmall from "@/components/HitoSmall";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const HomeSection = () => {

  const [hitos, setHitos] = useState([]);

  const {data: session} = useSession();

  useEffect(() => {
    let hitosApi = [];
    const a = async() => {
      try{
        hitosApi = await fetch(`/api/hito/fromEmail?email=${session.user.email}`).then(res => res.json());
        const bss = [];
        hitosApi = hitosApi.filter(h => {
          if(h.progreso >= h.objetivo){
            bss.push(h);
            return false;
          }
          return true;
        });
        hitosApi.push(...bss);
        setHitos(hitosApi);
      }catch(err){
        alert("Ha ocurrido un error con la base de datos");
      }
    }
    session && a();
  }, [session]);

  const { push } = useRouter();

  return (
    <Wrapper>
      <Actions>
        <Button onClick={() => push("/crear")}>Crear Hito</Button>
        {/* <SortContainer>
          <SortTitle>Ordenar</SortTitle>
          <SortIcon width={67} height={67} src="/icons/sort.png" />
        </SortContainer> */}
      </Actions>
      <HitosContainer>
        {hitos.map((hito, index) => {
          console.log(hito)
          return <HitoSmall _id={hito._id} key={index} nombre={hito.nombre} objetivo={hito.objetivo} fechaFinal={hito.fechaFinal} cantidadMiembros={hito.miembros.length} progreso={hito.progreso} />
        })}
      </HitosContainer>
    </Wrapper>
  )
}

export default HomeSection;