import Image from "next/image";

interface BannerProps {
  heading: string;
  text: string;
  image: string;
  altText: string;
  id: string;
}

const Banner: React.FC<BannerProps> = ({
  heading,
  text,
  image,
  altText,
  id,
}) => {
  return (
    <section
      className="
    w-screen 
    grid 
    grid-rows-1
    overflow-hidden
    h-auto
    md:h-[300px]
    "
    >
      <Image
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt={altText}
        id={id}
        className="
        row-start-1 
        col-start-1
        self-center"
      />
      <div
        className="
          row-start-1 
          col-start-1
          pt-6
          md:pt-8
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
        <h4 className="h4-banner">{text}</h4>
      </div>
    </section>
  );
};
export default Banner;
