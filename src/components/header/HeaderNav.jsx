import React from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import LenguajeIcon from "./LenguajeIcon";

import {
  Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu,
  NavbarContent, NavbarItem, Link, Button
} from "@nextui-org/react";



export default function app() {
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
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="bg-[transparent]" />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 mx-auto" justify="center">

        <NavbarItem className="my-0 mx-[10%]" >
          <Link className="text-[#ccc]" href="#">Inicio</Link>
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%]" >
          <Link className="text-[#ccc]" href="#">Proyectos</Link>
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%]" >
          <Link className="text-[#ccc]" href="#">Contacto</Link>
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%]" >
          <MdOutlineWbSunny className="text-[#ccc]" />
        </NavbarItem>

        <NavbarItem className="my-0 mx-[10%] flex place-items-center" >
          <LenguajeIcon/> <span className="text-transparent">hola</span>
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
