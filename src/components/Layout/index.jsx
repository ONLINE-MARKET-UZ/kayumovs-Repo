import "./style.scss";
import Intro from "../Intro";
import Header from "../Header";
import OrderForm from "../OrderForm";

const index = () => {
  return (
    <>
      <Header />
      <main className="mt-5">
        <Intro />
        <OrderForm />
      </main>
    </>
  );
};

export default index;
