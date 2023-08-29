"use client";

import CustomInput from "./CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Params = {
  params: {
    animalsID: number;
  };
};

interface Contact {
  animalID: string;
  animalName: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const InitialValues: Contact = {
  //like a state, but managed by Formikl
  animalID: "",
  animalName: "",
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactSchema = Yup.object({
  email: Yup.string()
    .email("* Skriv venligst din email")
    .required("* Skriv venligst en korrekt email"),
  name: Yup.string().max(40).required("* Skriv venligst dit navn"),
  phone: Yup.string()
    .matches(
      /^(\+45\s?)?(\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/,
      "Indtast et gyldigt dansk telefonnummer."
    )
    .required("* Telefonnummer er nødvendigt"),
  subject: Yup.string().required("* Skriv venligst en titel"),
  message: Yup.string().required("* Skriv venligst en titel"),
});

export default function ContactForm() {
  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
      }}
    >
      <Form
        className="
          grid 
          grid-cols-1 
          gap-4 
          w-4/5
          mx-auto
          my-16"
      >
        <CustomInput name="name" type="text" placeholder="Dit navn..." />
        <CustomInput name="email" type="email" placeholder="Din email..." />
        <CustomInput
          name="phone"
          type="text"
          placeholder="Dit telefonnummer..."
        />
        <CustomInput name="subject" type="text" placeholder="Overskrift..." />
        <CustomInput name="message" type="textarea" placeholder="Besked..." />
        <button
          type="submit"
          className="basic-button
          justify-self-end
          
          "
        >
          Send
        </button>
      </Form>
    </Formik>
  );
}
