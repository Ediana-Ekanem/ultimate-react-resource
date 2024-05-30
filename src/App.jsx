import { Route, Routes } from "react-router-dom";
// import Button from "./component/Button";
// import Car from "./component/Car";
// import Home from "./component/Home";
// import About from "./component/About";
// import Products from "./component/Products";
// import Error from "./component/Error";
// import Blog from "./component/Blog";
// import BlogDetails from "./component/BlogDetails";
// import List from "./component/list/List";
import Navabr from "./component/Navabr";
import Footer from "./component/Footer";
import { AppRoutes } from "./component/routes/RouteData";

function App() {
  // const handleButtonClick = () => {
  //   alert("You Clicked ME");
  // };
  return (
    <>
      <Navabr />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/list" element={<List />} />
        <Route path="*" element={<Error />} /> */}

        {/* map Routes  */}
        {AppRoutes.map((route) => {
          return (
            <Route key={route.id} path={route.path} element={route.component} />
          );
        })}
      </Routes>
      {/* <div className="flex flex-col justify-center items-center pt-20">
        <Car brand="Benz" tyre={2} />
        <Car brand="Ford" tyre={2} />
        <Car />
        <Button handleButtonClick={handleButtonClick} />
      </div> */}

      <Footer />
    </>
  );
}

export default App;
