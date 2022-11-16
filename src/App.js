import React, { useEffect } from "react";
import { userObserver } from "./auth/firebase";
import AuthProvider from "./context/AuthProvider";
import Register from "./pages/Register";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="bg-[#23242a]">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
