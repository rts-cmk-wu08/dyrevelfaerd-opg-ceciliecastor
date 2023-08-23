"use client";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterPage() {
  return (
    <section className="bg-secondary">
      <div className="two-col-grid">
        <div>
          <h3>Tilmeld vores nyhedsbrev</h3>
          <p>
            Få inspiration og nyheder om dyrevelfærd og vores arbejde, direkte i
            din indbakke
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
