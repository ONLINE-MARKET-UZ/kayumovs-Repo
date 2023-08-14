import Carousel from "./Carousel";

const index = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="intro_wrapper flex">
          <ul>
            <li></li>
          </ul>
          <Carousel />
          <ul>
            <li>
              <div className="card">{/* cards */}</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
