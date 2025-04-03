import React from "react";
import { NavBar } from "../Components/NavBar";
import { useLocation } from "react-router-dom";
import { ContactCard } from "../Components/ContactCard";

export function Contact() {
    const location = useLocation();
    const { email } = location.state || { email: 'No email provided' };
  
    return (
      <>
        <NavBar />
        <ContactCard email={email} />
      </>
    );
  }
  