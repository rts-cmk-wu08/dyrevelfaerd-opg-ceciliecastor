import Image from "next/image";

interface BannerProps {
  heading: string;
  text: string;
  image: string;
  altText: string;
}

const Banner: React.FC<BannerProps> = ({ heading, text, image, altText }) => {
  return (
    <section
      className="
    w-screen 
    grid 
    grid-rows-1
    
    "
    >
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt={altText}
        className="
        row-start-1 
        col-start-1"
      />
      <div
        className="
          row-start-1 
          col-start-1
          pt-8
          w-4/5
          mx-auto"
      >
        <h1
          className={`
          z-10 
          text-white 
          self-center
    `}
        >
          {heading}
        </h1>
        <h4>{text}</h4>
      </div>
    </section>
  );
};
export default Banner;
