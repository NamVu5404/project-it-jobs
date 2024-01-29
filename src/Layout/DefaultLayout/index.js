import "./DefaultLayout.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ScrollToTop from "../../components/ScrollToTop";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default DefaultLayout;
