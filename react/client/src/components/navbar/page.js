'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar>
    <NavbarContent className="hidden sm:flex gap-4" justify="left">
      <NavbarItem>
        <Link color="foreground" href="#">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          About Us
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Articles
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Publications
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          News & Events
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Videos
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#">
          Contact Us
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex" justify='right'>
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  )
}

export default NavBar