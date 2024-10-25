import Image from "next/image";
import Nav from "../components/nav";
import Titulo from "../components/titulo";

export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos y pollos",
};


export default function Home() {
  return (
    <div>

      <Titulo>Historial de versiones</Titulo>
      <Nav pos={24} />
      
    {/* <h1 className="text-9xl border-bottom-[3px] border-blue-500 font-black border-b-[3px] text-[rgb(0,0,255,0.5)] font-black ">Holi */}
    {/* </h1> */}
    </div>
  );
}
