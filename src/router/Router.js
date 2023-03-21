import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import WebDevelopment from "../components/WebDevelopment";
import AppDevelopment from "../components/AppDevelopment";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<SinglePost />} />
        <Route path="services" element={<Services />}>
          <Route path="web-dev" element={<WebDevelopment />} />
          <Route path="app-dev" element={<AppDevelopment />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
        {/* or
        <Route path="*" element={<NotFound />} /> */}
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
