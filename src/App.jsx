import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { Dashboard } from "./Pages/Dashboard";
import { Contact } from "./Pages/Contact";

function App() {
  const email = localStorage.getItem("userEmail") || "";
  const isAuth = email.length > 0;

  useEffect(() => {
    console.log('App mounted, auth status:', { email, isAuth });
  }, [email, isAuth]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route 
          path="/mainpage" 
          element={
            isAuth ? (
              <>
                {console.log('Rendering Dashboard, auth status:', isAuth)}
                <Dashboard />
              </>
            ) : (
              <>
                {console.log('Redirecting to login, auth status:', isAuth)}
                <Navigate to="/" />
              </>
            )
          } 
        />
        <Route path="/contact" element={isAuth ? <Contact /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
