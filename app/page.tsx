import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <WhoWeAre/>
      <Contact/>
    </>
  );
}
