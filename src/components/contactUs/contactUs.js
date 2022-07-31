import React from "react";

import { Form } from "./form";
import "./contactUs.css";
import { Map } from "./map";

export const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Map />
      <Form />
    </div>
  );
};
