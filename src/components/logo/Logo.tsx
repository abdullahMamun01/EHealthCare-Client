import React from 'react'
import LogoImage from "../../../public/assets/logo.png";
import Image from 'next/image';
export default function Logo() {
  return (
    <Image src={LogoImage} alt="logo"  className="object-contain max-h-[100px] max-w-[220px]"/>
  )
}
