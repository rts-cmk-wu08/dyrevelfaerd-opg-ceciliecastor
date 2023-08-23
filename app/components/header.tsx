import Link from "next/link";
import Image from "next/image";
import Logo from "./dv-logo.png";

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
      <nav>
        <Link href="/dashboard#about">Hjem</Link>
        <Link href="/dashboard#about">Om os</Link>
        <Link href="/dashboard#about">Bliv Frivillig</Link>
        <Link href="/dashboard#about">Dyr i nød?</Link>
        <Link href="/dashboard#about">Adopter et dyr</Link>
      </nav>
    </header>
  );
}
