import { Helmet } from "react-helmet";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Header from "../../inputControls/header/Header";
import Slider from "../../inputControls/sliders/Slider";
import { contentData, slideData } from "./slideData";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="prerender-status-code" content="200"></meta>
        <title>Home</title>
      </Helmet>

      <div>
        <Header />
        <Slider
          customClass="w3-content paddingHeaderSider"
          blur={false}
          slideDirection="right"
          timeDurationSlide={4000}
          data={slideData}
          carosalDots={true}
          fixedContent={false}
          content={contentData}
          keyData="fitsr"
          fixedData={false}
        />
        <Features />
        <Footer />
      </div>
    </>
  );
};
export default Home;
