import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShikshaDisha | Personalized Roadmaps for Future Skills</title>
        <meta
          name="description"
          content="Discover your future-ready career journey with personalized training recommendations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
        <Navbar />
        <Hero />
        {/* <Logos /> */}
        <Items />
        {/* <Stats /> */}
        {/* <Pricing /> */}
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>

  );
}
