import AboutUs from "@/components/AboutUs/AboutUs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
