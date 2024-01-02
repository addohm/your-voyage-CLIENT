import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/appRouter/AppRouter";
import GoToTop from "./components/other/GoToTop";
import Dialog from "./components/dialog/Dialog";
import Snackbar from "./components/snackbar/Snackbar";

const App = () => {

  return (
    <div className="por">
      <div className="por mih100vh">
        <Header />
        <AppRouter />
        <GoToTop />
        <Dialog />
        <Snackbar />
      </div>
      <Footer />
    </div>
  );
};

export default App;