import React from "react";
import AccordionMenu from "../_components/AccordionMenu";

const ContactPage = () => {
  return (
    <div className="mx-auto flex flex-row items-center flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Main Street, Anytown, USA</p>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <AccordionMenu />
      </div>
    </div>
  );
};

export default ContactPage;
