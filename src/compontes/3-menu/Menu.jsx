import "./menu.css";
const Menu = () => {
  return (
    <section className="section__container popular__container" id="menu">
      <h2 className="section__header">Popular Ice-Cream</h2>
      <div className="popular__grid">
        <div className="popular__card">
          <img src="./assets/popular-1.png" alt="popular" />
          <div className="popular__card__content">
            <h4>Mango Tango Sorbet</h4>
            <h3>$5.49</h3>
          </div>
        </div>
        <div className="popular__card">
          <img src="./assets/popular-2.png" alt="popular" />
          <div className="popular__card__content">
            <h4>Chocolate Fudge Delight</h4>
            <h3>$5.99</h3>
          </div>
        </div>
        <div className="popular__card">
          <img src="./assets/popular-3.png" alt="popular" />
          <div className="popular__card__content">
            <h4>Strawberry Swirl Bliss</h4>
            <h3>$4.99</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
