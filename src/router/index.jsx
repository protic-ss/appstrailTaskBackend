import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../components/home";
import Explore from "../components/explore";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<Home />} />
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="explore" element={<Explore />} />
    </Route>
  )
);

export default router;
