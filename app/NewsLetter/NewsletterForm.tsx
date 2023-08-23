import CustomInput from "../components/CustomInput";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface LoginFormProps {
  email: string;
  name: string;
}

const InitialLoginValues: LoginFormProps = {
  email: "",
  name: "",
};

const LoginSchema = Yup.object({
  email: Yup.string().required("Please enter a valid email"),
  name: Yup.string().required("Please write your name"),
});

export default function NewsletterForm() {
  return (
    <Formik
      initialValues={InitialLoginValues}
      validationSchema={LoginSchema}
      onSubmit={(values, action) => {
        console.log(values);
        //poast request til api
        action.setSubmitting(false);
      }}
    >
      <Form className="two-col-grid">
        <CustomInput name="email" type="email" placeholder="Email" />
        <CustomInput name="name" type="email" placeholder="Navn" />
      </Form>
    </Formik>
  );
}
