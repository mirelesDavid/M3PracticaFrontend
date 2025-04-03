import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./Pages/SignIn";
import { Dashboard } from "./Pages/Dashboard";
import { Contact } from "./Pages/Contact";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail") || "";
    setIsAuth(storedEmail.length > 0);
    console.log('App mounted, auth status:', { email: storedEmail, isAuth: storedEmail.length > 0 });
  }, []);

  // Add a listener for storage events to handle login/logout across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const storedEmail = localStorage.getItem("userEmail") || "";
      setIsAuth(storedEmail.length > 0);
      console.log('Storage changed, new auth status:', { email: storedEmail, isAuth: storedEmail.length > 0 });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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
