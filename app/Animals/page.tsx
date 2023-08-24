//interface AnimalProps {
//   title: string;
//   description: string;
//   img: string;
//   age: number;
//   altText: string;
// }

import Image from "next/image";
import Link from "next/link";

async function getAnimals() {
  const res = await fetch("http://localhost:4000/api/v1/animals");

  return res.json();
}

export default async function AnimalCard() {
  const animals = await getAnimals();

  return (
    <section className="two-col-grid">
      <h3>Dyr hos os</h3>
      {animals.map((data: any) => (
        <Link href={`/animals/${data.id}`}>
          <div
            key={data.id}
            className="border-2 border-secondary rounded-md p-4"
          >
            <Image
              src={data.asset.url}
              width={0}
              height={0}
              sizes="100vw"
              alt={data.title}
              style={{ width: "100%", height: "auto" }}
              className={`
            overflow-hidden`}
            ></Image>
            <div>
              <h3 className="text-primary pt-4">{data.name}</h3>
              <p>{data.description}</p>
              <p className="pt-4">Alder {data.age} år</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
