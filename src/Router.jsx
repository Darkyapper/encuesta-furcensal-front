import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Participate from "./pages/Participate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/participar",
    element: <Participate />,
  },
  // aquí luego agregaremos otras páginas:
  // { path: "/encuesta", element: <SurveyForm /> },
  // { path: "/estadisticas", element: <Statistics /> },
  // etc.
]);
