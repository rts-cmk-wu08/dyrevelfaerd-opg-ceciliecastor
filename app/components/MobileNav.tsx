import Link from "next/link";

export default function MobileNav() {
  return (
    <nav
      className={`
  mobile-nav
  ${isOpen ? "" : "hidden"}
  `}
    >
      <ul>
        <li>
          <Link href={"/#home"}>Hjem</Link>
        </li>
        <li>
          <Link href={"/#home"}>Om Os</Link>
        </li>
        <li>
          <Link href={"/#home"}>Bliv Frivillig</Link>
        </li>
        <li>
          <Link href={"/#home"}>Dyr i nød?</Link>
        </li>
        <li>
          <Link href={"/#home"}>Adopter et dyr</Link>
        </li>
        <li>
          <Link href={"/#home"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
