"use client";

import Nav from "@/components/Nav";
import Card from "@/components/Cards";
import React from "react";
import styled from "styled-components";
import FooterPage from "@/components/Footer";

// pages/profile.client.page.tsx
export const ClientProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="bg-[#003C71]">
        {/*---------------MENU NAV---------------- */}
        <Nav></Nav>
      </div>
      {/*---------------SECTION INFORMATION USER CLIENT---------------- */}
      <section className="h-full w-full flex flex-col justify-center items-center">
        <div className="info-profile-customer flex justify-around items-center h-3/4 w-4/6 gap-10 p-10">
          <div className="h-full w-2/6 flex  justify-center items-center">
            <div className="rounded-full h-72 w-72 bg-[#003C71]"></div>
          </div>
          <div className=" w-4/6 h-full p-10 flex justify-start items-center">
            <div className="text-white flex justify-around flex-col rounded-sm bg-[#003C71] h-72 w-full p-10">
              <h4 className="font-bold">
                Nombre: <span>Samuel</span>
              </h4>
              <h4 className="font-bold">
                Correo: <span>samuelacevedo9307@gmail.com</span>
              </h4>
              <h4 className="font-bold">
                Nick name: <span>samuelacevedo9307@gmail.com</span>
              </h4>
            </div>
          </div>
        </div>
        {/*-------------- SUBTITLE TARGETS CUSTOMERS---------------- */}
        <div className="pt-10 pb-10 w-full border-2 border-y-[#003C71] border-t-[#003C71]-500">
          <h3 className="text-5xl text-[#003C71] text-center">
            Mis propiedades
          </h3>
          <h4 className="text-[#747474] text-center text-3xl">
            Descubre las nuevas tendencias e incorporaciones trasadas en el
            ultimo mes.
          </h4>
        </div>
      </section>
      {/*-------------- SECTION TARGETS CUSTOMER---------------- */}
      <section className="section-cards-customer flex justify-around items-center p-24 h-full w-full ">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <div className="flex justify-center p-10">
        <button className="bg-[#003C71] w-2/6 text-white rounded-sm shadow-[#003C71]-500/40 p-2 font-bold shadow-lg shadow-gray-500/50">
          Conoce mas
        </button>
      </div>

      {/*-------------- SUBTITLE ANOTHER PROPIETYS---------------- */}
      <div className="pt-10 pb-10 w-full border-2 border-y-[#003C71] border-t-[#003C71]-500">
        <h3 className="text-5xl text-[#003C71] text-center">
          Otras propiedades
        </h3>
      </div>
      {/*-------------- SUBTITLE ANOTHER PROPIETYS---------------- */}
      <section className="section-cards-another-propieties flex justify-around items-center p-24 h-full w-full">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <div className="flex justify-center p-10">
        <button className="bg-[#003C71] w-2/6 text-white rounded-sm shadow-[#003C71]-500/40 p-2 font-bold shadow-lg shadow-gray-500/50">
          Conoce mas
        </button>
      </div>
      {/*-------------- FOOTER---------------- */}
      <FooterPage></FooterPage>
    </div>
  );
};

export default ClientProfilePage;
