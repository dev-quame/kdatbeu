import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Music } from "./components/pages/Music";
import { Journal } from "./components/pages/Journal";
import { Visuals } from "./components/pages/Visuals";
import { Shows } from "./components/pages/Shows";
import { NotFound } from "./components/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "music", Component: Music },
      { path: "journal", Component: Journal },
      { path: "blog", Component: Journal },
      { path: "visuals", Component: Visuals },
      { path: "gallery", Component: Visuals },
      { path: "shows", Component: Shows },
      { path: "videos", Component: Visuals },
      { path: "*", Component: NotFound },
    ],
  },
]);
