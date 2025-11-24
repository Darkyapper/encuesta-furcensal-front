import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Participate from "./pages/Participate";
import UserLogin from "./pages/UserLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/participar",
    element: <Participate />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },

  // aquí luego agregaremos otras páginas:
  // { path: "/encuesta", element: <SurveyForm /> },
  // { path: "/estadisticas", element: <Statistics /> },
  // etc.
]);
