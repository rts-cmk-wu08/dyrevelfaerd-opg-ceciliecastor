import Image from "next/image";

interface BannerProps {
  heading: string;
  text: string;
  image: string;
}

const Heading: React.FC<BannerProps> = ({ heading, text, image }) => {
  return (
    <section className="banner">
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="opdateres"
        className="row-start-1 col-start-1"
      />
      <h1
        className={`
        z-10 
        text-white 
        row-start-1 
        col-start-1 
        place-self-center
    `}
      >
        {heading}
      </h1>
      <h4>{text}</h4>
    </section>
  );
};
