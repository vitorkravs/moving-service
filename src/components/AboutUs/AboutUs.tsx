//style
import "./styles.scss";

const AboutUs = () => {
  return (
    <section id="about-us-container">
      <div
        id="cards-container"
        style={{
          backgroundImage: "url('/bg-about-us.jpg')",
        }}
      >
        <div id="card-about-one">
          <h3>Sobre nós</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            blanditiis repudiandae eligendi quia doloribus voluptates amet
            aperiam quibusdam sapiente maxime expedita, ab in perferendis beatae
            velit quaerat repellat quas sit?
          </p>
        </div>

        <div id="card-about-two">
          <h3>nós somos família</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            blanditiis repudiandae eligendi quia doloribus voluptates amet
            aperiam quibusdam sapiente maxime expedita, ab in perferendis beatae
            velit quaerat repellat quas sit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
