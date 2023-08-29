"use client";

import CustomInput from "../components/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  password: string;
}

const InitialValues: User = {
  //like a state, but managed by Formikl
  username: "",
  password: "",
};

const UserSchema = Yup.object({
  username: Yup.string().required("* Please enter your username"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export default function LoginForm() {
  const router = useRouter();

  //const [emailExist, setEmailExist] = useState(false);
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={UserSchema}
      onSubmit={async (values, action) => {}}
    >
      <Form
        method="POST"
        className="
          grid 
          grid-cols-1 
          gap-4 
          pl-8
          w-4/5
          mx-auto
          my-16"
      >
        {popup && <p>{popup}</p>}
        <CustomInput name="username" type="text" placeholder="Username..." />
        <CustomInput
          name="password"
          type="password"
          placeholder="Password..."
        />
        <button
          className="basic-button
          justify-self-end
          
          "
        >
          Login
        </button>
      </Form>
    </Formik>
  );
}
