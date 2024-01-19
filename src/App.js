import React, { useContext } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/appRouter/AppRouter";
import GoToTop from "./components/other/GoToTop";
import Dialog from "./components/dialog/Dialog";
import Snackbar from "./components/snackbar/Snackbar";
import { Context } from "./Context";

const App = () => {

  const { theme } = useContext(Context)

  return (
    <div className={`por bg_app ${theme}`}>
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