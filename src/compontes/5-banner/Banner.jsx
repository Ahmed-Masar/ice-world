import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__image" />
      <div className="banner__content">
        <h2 className="section__header">
          Get Yummy Ice-Cream at a Reasonable Price
        </h2>
        <p className="section__subheader">
          Treat yourself to delightful ice creams without breaking the bank!
          Enjoy premium quality and mouthwatering flavors at prices that make
          every scoop worth it.
        </p>
        <div className="banner__flex">
          <div className="banner__card">
            <img src="/assets/banner-1.png" alt="banner" />
            <h4>Fresh & Natural</h4>
          </div>
          <div className="banner__card">
            <img src="/assets/banner-2.png" alt="banner" />
            <h4>Quick Packaging</h4>
          </div>
          <div className="banner__card">
            <img src="/assets/banner-3.png" alt="banner" />
            <h4>Fast Delivery</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
