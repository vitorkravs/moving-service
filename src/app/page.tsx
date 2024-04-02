import AboutUs from "@/components/AboutUs/AboutUs";
import Header from "@/components/Header/Header";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Services />
      </main>
    </>
  );
}
