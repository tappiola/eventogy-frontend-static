import React from "react";
import logo from "../../public/eventogy-logo.svg";
import Image from "next/image";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
const Header = () => {
  return (
    <header
      className={
        "bg-gray-300 h-16 w-screen px-4 py-3 flex gap-3 align-items-center justify-content-between flex-wrap md:no-wrap"
      }
    >
      <Image src={logo} alt="Logo" height={28} />
      <span className="p-input-icon-left flex-order-1 md:flex-order-0 max-w-full">
        <i className="pi pi-search" />
        <InputText
          placeholder="Search Events, Attendees, Venues..."
          className="border-round-3xl w-30rem max-w-full"
        />
      </span>
      <Button
        className="border-circle bg-gray-100 border-none h-3rem w-3rem"
        icon="pi pi-user"
        style={{ color: "var(--gray-500)" }}
      />
    </header>
  );
};

export default Header;
