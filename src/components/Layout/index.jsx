import "./style.scss";
import Intro from "../Intro";
import Header from "../Header";
import OrderForm from "../OrderForm";
import Offers from "../Offers";

const index = () => {
  return (
    <>
      <Header />
      <main className="mt-5">
        <Intro />
        <Offers />
        <OrderForm />
      </main>
    </>
  );
};

export default index;
