import Image from "next/image";

type Params = {
  params: {
    animalsID: number;
  };
};

// async function getAnimals() {
//   const res = await fetch("http://localhost:4000/api/v1/animals");

//   return res.json();
// }

async function getAnimalsDetails(animalsID: number) {
  const res = await fetch(`http://localhost:4000/api/v1/animals/${animalsID}`);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function AnimalDetails({ params: { animalsID } }: Params) {
  const animalDetails: Promise<Animals> = getAnimalsDetails(animalsID);
  const animal = await animalDetails;

  return (
    <section>
      <h1>{animal.name}</h1>
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
    </section>
  );
}
