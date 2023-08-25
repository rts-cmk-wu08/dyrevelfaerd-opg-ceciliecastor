import Link from "next/link";
import UnsubscribePopup from "../components/unsubscribePopUp";

export default function Submitted() {
  return (
    <section className="w-3/4 mx-auto my-40 text-center">
      <h1 className="text-primary">Tak!</h1>
      <h2>Du er nu tilmeldt vores vores nyhedsbrev.</h2>
      <p className="text-xs my-16">
        Ønsker du at afmelde dig vores nyhedsbrev, kan det gøres{" "}
        <Link className="text-contrast underline" href={"/"}>
          her.
        </Link>
      </p>
      {/*<UnsubscribePopup /> */}
    </section>
  );
}
