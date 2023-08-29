import ContactForm from "@/app/components/ContactForm";
import React from "react";

type Params = {
  params: {
    animalsID: number;
  };
};

async function getAnimalsDetails(animalsID: number) {
  const res = await fetch(`http://localhost:4000/api/v1/animals/${animalsID}`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function ContactPage({ params: { animalsID } }: Params) {
  const animalDetails: Promise<Animals> = getAnimalsDetails(animalsID);
  const animal = await animalDetails;
  return (
    <div
      className="
        w-4/5
        mx-auto
        mt-8"
    >
      <h1
        className="
      section-h1"
      >
        Kontakt os om {animal.name}
      </h1>
      <p>ID-nummer: {animal.id}</p>
      <ContactForm />
    </div>
  );
}
