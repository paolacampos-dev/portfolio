import Hero from "./components/Hero";
import Header from "./components/Header";

export default function HomePage()  {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Paola Campos",
            url: "https://paolacampos.dev",
            image: "https://paolacampos.dev/favicon.png",
            jobTitle: "Web Developer",
            sameAs: [
              "https://www.paolacampos.com"
            ]
          }),
        }}
      />
    <main>
      <Hero />
    </main>
    </>
  )
}