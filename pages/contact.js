import React from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="contact me!" />
      </Head>
      <ContactForm />;
    </>
  );
}
