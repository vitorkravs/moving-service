//style
import "./styles.scss";

const Services = () => {
  return (
    <section id="services-container">
      <div id="title-services">
        <h2>serviços</h2>
      </div>
      <div id="cards-services-container">
        <div className="card-item">
          <picture>
            <img src="/service-1.jpg" alt="serviço de encaixotar" />
          </picture>
          <h4>lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
            iusto porro alias soluta, doloremque totam modi voluptatibus
            voluptas? Quisquam odio illum corrupti saepe asperiores ipsum
            adipisci, provident aliquam unde?
          </p>
        </div>
        <div className="card-item">
          <picture>
            <img src="/service-2.jpg" alt="serviço de mudança" />
          </picture>
          <h4>lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
            iusto porro alias soluta, doloremque totam modi voluptatibus
            voluptas? Quisquam odio illum corrupti saepe asperiores ipsum
            adipisci, provident aliquam unde?
          </p>
        </div>
        <div className="card-item">
          <picture>
            <img src="/service-3.jpg" alt="serviço de empacotar" />
          </picture>
          <h4>lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est
            iusto porro alias soluta, doloremque totam modi voluptatibus
            voluptas? Quisquam odio illum corrupti saepe asperiores ipsum
            adipisci, provident aliquam unde?
          </p>
        </div>
      </div>

      <div id="btn-service">
        <button>Eu preciso de ajuda</button>
      </div>
    </section>
  );
};

export default Services;
