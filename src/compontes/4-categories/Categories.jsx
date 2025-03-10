import "./categories.css";

const Categories = () => {
  return (
    <section className="section__container discover__container" id="categories">
      <h2 className="section__header">Most Selling Ice-Cream</h2>
      <p className="section__subheader">
        Discover our crowd favorites! These ice creams are loved by everyone and
        have become the top picks for their irresistible flavors and creamy
        textures.
      </p>
      <div className="discover__gird">
        <div className="discover__card">
          <img src="/assets/discover-1.jpg" alt="discover" />
          <div className="discover__card__content">
            <h4>Double Chocolate Crunch</h4>
            <p className="section__subheader">
              {" "}
              Dive into a chocolate lover's paradise with our Double Chocolate
              Crunch. This rich and creamy ice cream is made with premium cocoa
              and blended with crunchy chocolate chunks to deliver a perfect
              balance of smoothness and texture.
            </p>
            <h3>
              $6.99{" "}
              <span>
                <s>$9.99</s>
              </span>
            </h3>
            <div className="discover__card__btn">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="discover__card">
          <img src="/assets/discover-2.jpg" alt="discover" />
          <div className="discover__card__content">
            <h4>Strawberry Cheesecake Bliss</h4>
            <p className="section__subheader">
              Experience the perfect harmony of fruity and creamy with our
              Strawberry Cheesecake Bliss. Every spoonful feels like enjoying a
              slice of fresh strawberry cheesecake, making it an irresistible
              dessert.
            </p>
            <h3>
              $5.99{" "}
              <span>
                <s> $8.99</s>
              </span>
            </h3>
            <div className="discover__card__btn">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="discover__card">
          <img src="/assets/discover-3.jpg" alt="discover" />
          <div className="discover__card__content">
            <h4>Classic Cookies and Cream</h4>
            <p className="section__subheader">
              Savor the timeless charm of our Classic Cookies and Cream ice
              cream. Made with velvety smooth vanilla ice cream, it is
              generously packed with chunks of chocolate cookies to create a
              delightful crunch in every bite.chunks to deliver a perfect
              balance of smoothness and texture.
            </p>
            <h3>
              $5.49{" "}
              <span>
                <s> $10.49</s>
              </span>
            </h3>
            <div className="discover__card__btn">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
