import Image from "next/image";

// interface VolunteerProps {
//   altText: string;
// }

async function getVolunteer() {
  const res = await fetch("http://localhost:4000/api/v1/volunteers");

  return res.json();
}

export default async function VolunteerList() {
  const volunteertData: Promise<Volunteers[]> = getVolunteer();
  const volunteer = await getVolunteer();
  return (
    <section id="volunteer" className="bg-secondary py-6">
      <section className="three-col-grid">
        <h3>Bliv Frivillig</h3>
        {volunteer.map((data: any) => (
          <div key={data.id} className="bg-white p-4 rounded-md">
            <Image
              src={data.asset.url}
              width={0}
              height={0}
              sizes="100vw"
              alt="placeholder"
              style={{ width: "100%", height: "auto" }}
            />
            <h4 className="text-gray-600 mt-4">{data.title}</h4>
            <p className="my-6">{data.content}</p>
            <p className="font-thin italic">{data.extra}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
