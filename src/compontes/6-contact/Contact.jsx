import "./contact.css";

const Contact = () => {
  return (
    <section className="section__container subscribe__container" id="contact">
      <div className="subscribe__content">
        <h2 className="section__header">Subscribe For Discounts</h2>
        <p className="section__subheader">
          Don't miss out on sweet deals! Subscribe now to receive exclusive
          discounts and updates on our latest ice cream flavors and special
          offers.
        </p>
        <form action="/">
          <input type="text" placeholder="Type Your Email" />
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
