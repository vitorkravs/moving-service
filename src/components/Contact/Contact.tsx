//style
import "./styles.scss";

const Contact = () => {
  return (
    <section id="contact-container">
      <div id="title-contact">
        <h3>Contate-nos</h3>
      </div>

      <div id="form-and-social">
        <form id="form-contact">
          <input type="text" placeholder="Digite seu email: " />
          <textarea placeholder="Digite o que deseja: "></textarea>
          <div id="btn-contact">
            <button>Enviar</button>
          </div>
        </form>

        <div id="more-informations">
          <p>email@gmail.com</p>
          <p>(xxx) xxxxx-xxxx</p>
          <p>endereço: rua X, 555, itapetininga</p>
          <p>instagram: @user</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
