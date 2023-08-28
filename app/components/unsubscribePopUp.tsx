"use client";

export default function UnsubscribePopup() {
  return (
    <section>
      <div
        className="
            fixed
            top-0
            left-0
            z-999
            w-full
            h-full
            bg-black
            opacity-75
        "
      ></div>
      <div
        className="
        w-[300px]
        absolute
        left-1/2
        top-1/2
        -ml-[150px]
        bg-secondary
        p-[40px]
    "
      >
        {/* Unsubscribe form */}
        <h3>{}</h3>
      </div>
    </section>
  );
}
