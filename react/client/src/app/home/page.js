"use client";
import Header from "@/components/header/page";
import Image from "next/image";
import React from "react";


const home = () => {
  return (
    <div>
      <div className="shadow-lg">
<Image src={'/Image/Image1.png'} width={50} height={60}/>
        <Header/>
      </div>
    </div>
  );
};

export default home;
