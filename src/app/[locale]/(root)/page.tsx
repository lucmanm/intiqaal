import { Button } from "@/components/ui/button";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import AboutUs from "@/app/components/about-us";
import ContactUs from "@/components/form/contact-us";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Footer />
    </>
  );
}
