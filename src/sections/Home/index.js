'use client'
import Button from "@/components/Button";
import { Actions, HitosContainer, SortContainer, SortIcon, SortTitle, Wrapper } from "./styles";
import HitoSmall from "@/components/HitoSmall";
import { useRouter } from "next/navigation";

const hitos = [
  { nombre: "Universidad Hija", objetivo: 20000, fechaFinal: Date.now(), miembros: [1, 2, 3, 4, 5, 6], progreso: 15000},
  { nombre: "Tratamiento Tio", objetivo: 60000, fechaFinal: Date.now(), miembros: [1, 2, 3, 4, 5, 6, 7, 8, 9], progreso: 40000},
  { nombre: "Fiesta casamiento Roberto y Rachel", objetivo: 120000, fechaFinal: Date.now(), miembros: [1, 2, 3, 4], progreso: 110000},
  { nombre: "Viaje Carilo", objetivo: 3000, fechaFinal: Date.now(), miembros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], progreso: 1200},
];

const HomeSection = () => {

  const { push } = useRouter();

  return (
    <Wrapper>
      <Actions>
        <Button onClick={() => push("/crear")}>Crear Hito</Button>
        <SortContainer>
          <SortTitle>Ordenar</SortTitle>
          <SortIcon width={67} height={67} src="/icons/sort.png" />
        </SortContainer>
      </Actions>
      <HitosContainer>
        {hitos.map((hito, index) => {
          return <HitoSmall key={index} nombre={hito.nombre} objetivo={hito.objetivo} fechaFinal={hito.fechaFinal} cantidadMiembros={hito.miembros.length} progreso={hito.progreso} />
        })}
      </HitosContainer>
    </Wrapper>
  )
}

export default HomeSection;