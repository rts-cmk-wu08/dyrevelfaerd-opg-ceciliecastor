import Link from "next/link";
import Image from "next/image";
import Logo from "./dv-logo.png";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <section
      className="    sticky 
    top-0
    bg-white"
    >
      <header
        className="
    py-2"
      >
        <Link href="/" className="logo">
          <Image
            src={Logo}
            alt="Dojo Helpdesk Logo"
            width={50}
            quality={100}
            placeholder="blur"
          />
          <h1 className="text-2xl">Foreningen for Dyrevelfærd</h1>
        </Link>
        <nav
          className="desktop-nav
      sticky z-200 top-0"
        >
          <ul>
            <li>
              <Link href="/#home">Hjem</Link>
            </li>
            <li>
              <Link href="/#about">Om os</Link>
            </li>
            <li>
              <Link href="/#volunteer">Bliv Frivillig</Link>
            </li>
            <li>
              <Link href="#rescue">Dyr i nød?</Link>
            </li>
            <li>
              <Link href="#adopt">Adopter et dyr</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </header>
    </section>
  );
}
