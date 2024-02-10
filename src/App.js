import React, { useContext } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/appRouter/AppRouter";
import GoToTop from "./components/other/GoToTop";
import Dialog from "./components/dialog/Dialog";
import Snackbar from "./components/snackbar/Snackbar";
import { Context } from "./Context";
import AppLoader from "./components/appLoader/AppLoader";
import useNotClickableMobileFooterFix from "./hooks/useNotClickableMobileFooterFix";

const App = () => {

  const { theme } = useContext(Context)
  const { notClickableMobileFooterFix } = useNotClickableMobileFooterFix()

  return (
    <div className={`por bg_app ${theme} ${notClickableMobileFooterFix}`}>
      <div className="por mih100vh">
        <Header />
        <AppRouter />
        <AppLoader />
        <GoToTop />
        <Dialog />
        <Snackbar />
      </div>
      <Footer />
    </div>
  );
};

export default App;