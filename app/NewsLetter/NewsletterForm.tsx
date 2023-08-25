import CustomInput from "../components/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SubmitProps {
  email: string;
  name: string;
}

const InitialValues: SubmitProps = {
  //like a state, but managed by Formikl
  email: "",
  name: "",
};

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("* Please write a valid email")
    .required("* Please enter a valid email"),
  name: Yup.string().max(40).required("* Please write your name"),
});

export default function NewsletterForm() {
  const router = useRouter();

  const [emailExist, setEmailExist] = useState(false);

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        console.log(values);
        //poast request til api
        action.setSubmitting(false);
      }}
    >
      <Form
        method="POST"
        className="
      grid grid-cols-1 
      gap-4 lg:grid-cols-2"
      >
        <CustomInput name="email" type="email" placeholder="Email" />
        <CustomInput name="name" type="email" placeholder="Navn" />
        <button
          className="basic-button
          justify-self-end
          lg:col-span-2
          "
        >
          Tildmeld
        </button>
      </Form>
    </Formik>
  );
}
