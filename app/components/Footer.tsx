import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-secondary">
      <div className="two-col-grid">
        <div className="contact">
          <h5>Kontakt</h5>
          <p className="footer-txt">Tornebuskvej 22, 1.</p>
          <p className="footer-txt">1131 København K</p>
          <p className="footer-txt">CVR: 22446187</p>
          <p className="footer-txt">
            Husk at du kan få fradrag for donationer på op til 16.600 kr.
          </p>
        </div>
        <div className="grid grid-cols-1">
          <h5>Partnere</h5>
          <Link
            className="footer-link"
            href="https://anima.dk/"
            target="_blank"
          >
            Anima
          </Link>
          <Link
            className="footer-link"
            href="https://www.worldanimalprotection.dk/"
            target="_blank"
          >
            World Animal Protection
          </Link>
          <Link
            className="footer-link"
            href="https://foedevarestyrelsen.dk/"
            target="_blank"
          >
            Fødevarestyrelsen
          </Link>
          <Link
            className="footer-link"
            href="https://faktalink.dk/"
            target="_blank"
          >
            Faktalink
          </Link>
        </div>
      </div>
    </section>
  );
}
