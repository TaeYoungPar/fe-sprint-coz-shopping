import Footer from "../component/Footer";
import Header from "../component/Header";
import Mainbody from "../component/Mainbody";
import "./main.css";

const Main = () => {
  return (
    <section className="main-container">
      <Header />
      <Mainbody />
      <Footer />
    </section>
  );
};

export default Main;
