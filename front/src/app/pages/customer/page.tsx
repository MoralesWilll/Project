"use client"

import Nav from "@/components/Nav";
import Card from "@/components/Cards";
import React from 'react';
import styled from 'styled-components';

// pages/profile.client.page.tsx
export const ClientProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="bg-[#003C71]">
      {/*---------------MENU NAV---------------- */}
      <Nav></Nav>
      </div>
      {/*---------------SECTION INFORMATION USER CLIENT---------------- */}
      <section className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="flex justify-around items-center h-3/4 w-4/6 gap-10 p-10">
          <div className="h-full w-2/6 flex  justify-center items-center">
            <div className="rounded-full h-72 w-72 bg-[#003C71]">
             </div>
          </div>
          <div className=" w-4/6 h-full p-10 flex justify-start items-center">
            <div className="rounded-sm bg-[#003C71] h-72 w-full"></div>
          </div>
        </div>
        {/*-------------- SUBTITLE---------------- */}
        <div className="pt-10 pb-10 w-full border-2 border-y-[#003C71] border-t-[#003C71]-500">
          <h3 className="text-5xl text-[#003C71] text-center">Mis propiedades</h3>
          <h4 className="text-[#747474] text-center text-3xl">Descubre las nuevas tendencias e incorporaciones trasadas en el ultimo mes.</h4>
        </div>
        
      </section>
      {/*-------------- SECTION TARGETS CUSTOMER---------------- */}
      <section className="flex justify-around items-center p-24 h-full w-full ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </div>
  );
};

export default ClientProfilePage;