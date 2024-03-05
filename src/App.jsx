import { useRoutes } from "react-router-dom";
import { routeList } from "./Route/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  const element = useRoutes(routeList);
  return (
    <>
      {element}
      <Toaster />
    </>
  );
};

export default App;
