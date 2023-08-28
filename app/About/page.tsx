async function getAbout() {
  const res = await fetch("http://localhost:4000/api/v1/abouts");

  return res.json();
}

export default async function AboutList() {
  const aboutData: Promise<About[]> = getAbout();
  const about = await getAbout();
  return (
    <section id="about" className="three-col-grid">
      {about.map((data: any) => (
        <div key={data.id}>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </section>
  );
}
