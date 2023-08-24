import Link from "next/link";
import Image from "next/image";
import Logo from "./dv-logo.png";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="py-2">
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
      <nav className="desktop-nav">
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
            <Link href="/dashboard#rescue">Dyr i nød?</Link>
          </li>
          <li>
            <Link href="/dashboard#about">Adopter et dyr</Link>
          </li>
          <li>
            <Link href="/dashboard/login">Login</Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
}
