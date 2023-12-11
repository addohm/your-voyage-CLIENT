import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/appRouter/AppRouter";
import GoToTop from "./components/other/GoToTop";

const App = () => {

  return (
    <div className="por mih100vh">
      <Header />
      <AppRouter />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default App;