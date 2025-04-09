import React from 'react'
import LogoImage from "../../../public/assets/logo.png";
import Image from 'next/image';
export default function Logo({className='object-contain max-h-[100px] max-w-[220px]'} : {className?:string}) {
  return (
    <Image src={LogoImage} alt="logo"  className={className}/>
  )
}
