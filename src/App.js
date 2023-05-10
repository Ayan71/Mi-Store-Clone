import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import Starproduct from "./components/Starproduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReview from "./components/ProductReview";
import Videos from "./components/Videos";
import Bannner from "./components/Bannner";
import Footer from "./components/Footer";
import Navoptions from "./components/Navoptions";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Navoptions
        mi={data.miPhones}
        redmi={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitness={data.fitnessAndLifeStyle}
        home={data.home}
        radio={data.audio}
        access={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproduct startproduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/Home"
          element={
            <HotAccessories
              Home={data.hotAccessories.home}
              HomeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCTS REVIEWS" />
      <ProductReview productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos vidoes={data.videos} />
      <Heading text="IN THE PRESS" />
      <Bannner banner={data.banner} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
