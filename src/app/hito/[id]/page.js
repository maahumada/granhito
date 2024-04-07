'use client'
import HitoSection from "@/sections/Hito";

const Hito = ({ params }) => {
  return (
    <HitoSection hitoId={params.id} />
  )
}

export default Hito;