'use client';

import Link from "next/link";
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation";

interface TipoPropiedadesComponente {
    path:string;
    text:string;
}

export default function ActiveLink({path,text}:TipoPropiedadesComponente) {
    const ruta = usePathname();
    console.log(ruta);
  return (

    <Link  className={`${style.link} ${(ruta==path)? style.activelink : ""}`} href={path}>{text}</Link>

  );
}