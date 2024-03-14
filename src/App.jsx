import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routeList } from "./Route/routes";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const element = useRoutes(routeList);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
    });
  }, []);

  return (
    <ThemeProvider>
      {element}
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
