import { createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  // aquí luego agregaremos otras páginas:
  // { path: "/encuesta", element: <SurveyForm /> },
  // { path: "/estadisticas", element: <Statistics /> },
  // etc.
]);
