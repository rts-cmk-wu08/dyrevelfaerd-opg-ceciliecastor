import CustomInput from "../components/CustomInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

export interface Subscriber {
  email: string;
  name: string;
}

const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkdXlKQjU5OHpqQ0VpQno2cUY0UDlLLlhrUGRESXd5ajJjd1FXU1lRczNIbHY1TUZsbUxJTlciLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoifSwiaWF0IjoxNTg5NzQzNDI4LCJleHAiOjE1ODk3NDcwMjh9.RQlQN6Aj8Ypvso2B81fPLfGZ9Vj9YelqHLT9KKGFxqE";

export default async function TestForm() {
  const res = await fetch("http://localhost:4000/api/v1/subscribers", {
    cache: "no-cache",
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });

  console.log(res);

  const subscribers: Subscriber[] = await res.json();
  const addSubscriberToDB = async (e: FormData) => {
    "use server"; //converts function into server action
    const email = e.get("email")?.toString();
    const name = e.get("name")?.toString();

    //defensive programming statement - don't do anything
    if (!email || !name) return;

    const newSubscriber: Subscriber = {
      email,
      name,
    };
    await fetch("http://localhost:4000/api/v1/subscribers", {
      method: "POST",
      body: JSON.stringify(newSubscriber),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });
  };

  return (
    <section>
      <form action={addSubscriberToDB}>
        <input type="email" name="email" />
        <input type="text" name="name" />
        <button>Tilmeld</button>
      </form>
      <div>
        {subscribers.map((data) => (
          <div key={data.email}>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
