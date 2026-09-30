const credentials = [
  "Head Instructor — Salsa Salsa Dance Studio, Brooklyn",
  "Former Principal — Yamuleé Dance Company",
  "Featured dancer — Thalía & Los Ángeles Azules",
  "Featured dancer — Yiyo Sarante concerts",
  "Broadway Dance Center graduate",
  "1st Place Professional Solo — Ultimate Dance Competition 2025",
];




export function HomeCredentials() {
  return (
        <section
          aria-label="Credentials"
          className="overflow-hidden border-y border-border bg-secondary/40 py-4"
        >
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6 text-sm tracking-[0.18em] text-champagne/80 uppercase sm:text-xs">
            {[...credentials, ...credentials].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span aria-hidden className="text-ember">
                  ◆
                </span>
              </span>
            ))}
          </div>
        </section>

  );
}
