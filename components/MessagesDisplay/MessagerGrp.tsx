import React from 'react'
import Messager from "./Messager"
const MessagerGrp = () => {
  return (
    <div className="mx-4 bg-[#F8F8F8] rounded-3xl px-6 my-4">
      <Messager name="Martin Alina" newmessenger="0"/>
      <div className="ml-[86px] h-[1px] border-t-[1px] w-[309px] border-black"></div>
      <Messager name="Jules Trass" newmessenger="0"/>
      <div className="ml-[86px] h-[1px] border-t-[1px] w-[309px] border-black"></div>
      <Messager name="Burak Deniz" newmessenger="2"/>
    </div>
  )
}

export {MessagerGrp} 