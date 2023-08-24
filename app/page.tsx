import AboutPage from "./About/page";
import AnimalCard from "./Animals/page";
import NewsletterPage from "./NewsLetter/page";
import Banner from "./components/banner";
import VolunteerPage from "./volunteer/page";

async function getAssets() {
  const res = await fetch("http://localhost:4000/api/v1/assets");

  return res.json();
}

export default async function Home() {
  const assets: Promise<Assets[]> = getAssets();
  const asset = await getAssets();

  return (
    <main>
      <Banner
        image={asset.find((item: any) => item.id === 11)?.url || ""}
        heading="Foreningen for Dyrevelfærd"
        text="Vi specialisere os i dyrevelfærd"
        altText="Nuttede kattekillinger fra Foreningen for Dyrevelfærds internat"
      />
      <AboutPage />
      <VolunteerPage />
      <Banner
        image={asset.find((item: any) => item.id === 12)?.url || ""}
        heading="Står du med et dyr i nød?"
        text="Ring til Dyrenes Vagtcentral på 1812 og få råd til hjælp og håndtering af dyr"
        altText="Pindsvin i hænderne på et menneske"
      />
      <NewsletterPage />
      <Banner
        image={asset.find((item: any) => item.id === 1)?.url || ""}
        heading="Adopter et dyr"
        text="Overvejer du et nyt medlem af familien? Måske du er det perfekte match til et af vores mange svigtede internatdyr, som venter på nye kærlige hjem."
        altText="Beagle på en græsplæne i en indhegning"
      />
      <AnimalCard />
    </main>
  );
}
