"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

async function getAnimals(page: number = 1) {
  const limit = 8;
  const start = (page - 1) * limit;
  const res = await fetch(
    "http://localhost:4000/api/v1/animals?_start=${start}&_limit=${limit}"
  );

  return res.json();
}

export default function AnimalCard() {
  const [animals, setAnimals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //const animals = await getAnimals();

  useEffect(() => {
    // Create an IIFE (Immediately Invoked Function Expression) to use async within useEffect
    (async () => {
      const fetchedAnimals = await getAnimals(currentPage);
      setAnimals(fetchedAnimals);
    })();
  }, [currentPage]);

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
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={animals.length < 8}
        >
          Next
        </button>
      </div>
    </section>
  );
}
