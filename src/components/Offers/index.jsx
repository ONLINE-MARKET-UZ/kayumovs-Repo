import Card from "./Card";

const index = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="offers_wrapper">
          <div className="offers_info"></div>
          <ul>
            <li>
              <Card />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
