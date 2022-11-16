import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { userObserver } from "./auth/firebase";
import AuthProvider from "./context/AuthProvider";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="bg-white dark:bg-[#23242a]">
      <AuthProvider>
        <AppRouter />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;
