import React from "react";
import LenguajeSelect from "./LenguajeSelect";

import {
  Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu,
  NavbarContent, NavbarItem, Link, Button
} from "@nextui-org/react";

const smoothScroll = (e, target) => {
  e.preventDefault();
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
};

export default function app({ home, projects, contact }) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inicio",
    "Proyectos",
    "Contacto"
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark border-[transparent] bg-transparent"
      id="navbar-container"
    >
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-[#eee] opacity-100" />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 mx-auto" justify="center">

        <NavbarItem className="my-0 mx-[10%]" >
          <Link className="text-[#ccc] smooth-scroll " onClick={(e) => smoothScroll(e, '#inicio')}>{home}</Link>
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%]" >
          <Link className="text-[#ccc] smooth-scroll "
            onClick={(e) => smoothScroll(e, '#proyectos')}>
            {projects}
          </Link>
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%]" >
          <Link className="text-[#ccc] smooth-scroll "
            onClick={(e) => smoothScroll(e, '#footer')}>
            {contact}
          </Link>
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%] flex place-items-center" >
          <LenguajeSelect /> <span className="text-transparent">hola</span>
        </NavbarItem>

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
              color="foreground"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}
