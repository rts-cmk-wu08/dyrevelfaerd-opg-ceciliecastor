import CustomInput from "../components/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import UnsubscribePopup from "../components/unsubscribePopUp";

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

  //const [emailExist, setEmailExist] = useState(false);
  const [popup, setPopup] = useState<string | null>(null);

  return (
    <Formik
      initialValues={InitialValues}
      validationSchema={LoginSchema}
      onSubmit={async (values, action) => {
        try {
          const res = await fetch(
            `http://localhost:4000/api/v1/subscribers/${values.email}`
          );
          if (res.status === 200) {
            setPopup("You're already subscribed");
            action.setSubmitting(false);
            return;
          } else if (res.status !== 404) {
            console.error("Error checking email:", await res.text());
            action.setSubmitting(false);
            return;
          }
          const addResponse = await fetch(
            "http://localhost:4000/api/v1/subscribers",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            }
          );
          if (addResponse.ok) {
            setPopup("You're now subscribed");
          } else {
            console.error("Error subscribing:", await addResponse.text());
          }
        } catch (error) {
          console.error("Error:", error);
        }
        action.setSubmitting(false);
      }}
    >
      <Form
        method="POST"
        className="
      grid grid-cols-1 
      gap-4 pl-8"
      >
        {popup && <p>{popup}</p>}
        <CustomInput name="email" type="email" placeholder="Email" />
        <CustomInput name="name" type="text" placeholder="Navn" />
        <button
          className="basic-button
          justify-self-end
          
          "
        >
          Tildmeld
        </button>
      </Form>
    </Formik>
  );
}
