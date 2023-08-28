"use client";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterPage() {
  return (
    <section
      id="subscribe"
      className="bg-secondary
    py-16"
    >
      <div
        className="
      two-col-grid
      gap-16
      bg-white
      py-16
      px-8
      rounded-md"
      >
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
