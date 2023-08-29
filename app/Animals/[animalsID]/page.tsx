import Image from "next/image";
import Link from "next/link";

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
export default async function AnimalDetails({ params: { animalsID } }: Params) {
  const animalDetails: Promise<Animals> = getAnimalsDetails(animalsID);
  const animal = await animalDetails;

  return (
    <section
      className="
        w-1/2
        mx-auto 
        my-16
        p-8
        border-2
        rounded-md
        border-secondary
    "
    >
      <Image
        src={animal.asset.url}
        width={0}
        height={0}
        sizes="100vw"
        alt={animal.name}
        style={{ width: "100%", height: "auto" }}
        className={`
            overflow-hidden`}
      ></Image>
      <h1
        className="
        mb-8
        text-primary
        text-3xl
        mt-8
      "
      >
        {animal.name}
      </h1>
      <p>{animal.description}</p>
      <div className="my-8 grid grid-cols-2">
        <h3>Alder {animal.age}</h3>
        <Link href={`${animalsID}/contact`} className="justify-self-end">
          <button className="basic-button">Adopter mig</button>
        </Link>
      </div>
    </section>
  );
}
