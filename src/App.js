import React from "react";
import Megaphone from "./components/megaphone/Megaphone";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import ExperienceAndEducation from "./components/exp/ExperienceAndEducation";
import Quote from "./components/quote/Quote";
import Banner2 from "./components/banner/Banner2";
import Reviews from "./components/review/Reviews";
import Tools from "./components/tools/Tools";
import FullWidthImg from "./components/fullWidthImg/FullWidthImg";
import CoachCards from "./components/coachCard/CoachCards";
import JustImagine from "./components/justimagine/JustImagine";
import ApplyFor from "./components/applyFor/ApplyFor";
import fullWidthImg1 from "./components/fullWidthImg/img/img1.jpg"
import fullWidthImg2 from "./components/fullWidthImg/img/img2.jpg"
import Animation from "./components/animation/Animation";
import AppBg from "./components/appBg/AppBg";
import Footer from "./components/footer/Footer";

const App = () => {

  return (
    <div className="por">
      <Header />
      <Animation type="scale151">
        <Banner />
      </Animation>
      <Animation type="scale151">
        <ExperienceAndEducation />
      </Animation>
      <Animation type="scale151">
        <div className="h50vh fcc">
          <Quote title="Steve Jobs" text="“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.“" />
        </div>
      </Animation>
      <Animation type="scale151">
        <Banner2 />
      </Animation>
      <Animation type="scale151">
        <Tools />
      </Animation>
      <Animation type="scale151">
        <FullWidthImg img={fullWidthImg1} />
      </Animation>
      <Animation type="scale151">
        <Quote title="Confucius" text="“Choose a job you love, and you will never have to work a day in your life.“" />
      </Animation>
      <Animation type="scale091">
        <Reviews />
      </Animation>
      <Animation type="scale151">
        <Megaphone />
      </Animation>
      <Animation type="scale151">
        <ApplyFor />
      </Animation>
      <Animation type="scale151">
        <JustImagine />
      </Animation>
      <Animation type="scale151">
        <CoachCards />
      </Animation>

      {/* ! `margin top` for Quote */}
      <div className="h300"></div>
      <Animation type="scale151">
        <Quote title="Albert Schweitzer" text="“Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.“" />
      </Animation>

      <Animation type="scale151">
        <FullWidthImg img={fullWidthImg2} />
      </Animation>
      {/* fixed position */}
      <AppBg />
      <Footer />
    </div>
  );
};

export default App;