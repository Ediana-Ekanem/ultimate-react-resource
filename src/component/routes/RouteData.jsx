import Home from "../../component/Home";
import About from "../../component/About";
import Products from "../../component/Products";
import Error from "../../component/Error";
import Blog from "../../component/Blog";
import BlogDetails from "../../component/BlogDetails";
import List from "../../component/list/List";

// Dynamic Routing

let id = 0;
export const AppRoutes = [
  {
    id: id++,
    path: "/",
    component: <Home />,
    navName: "Home",
  },

  {
    id: id++,
    path: "/",
    component: <About />,
    navName: "About",
  },
  {
    id: id++,
    path: "/blog",
    component: <Blog />,
    navName: "Blog",
  },
  {
    id: id++,
    path: "/blog/:id",
    component: <BlogDetails />,
    navName: "false",
  },
  {
    id: id++,
    path: "/products",
    component: <Products />,
    navName: "Products",
  },
  {
    id: id++,
    path: "/list",
    component: <List />,
    navName: "List",
  },
  {
    id: id++,
    path: "*",
    component: <Error />,
    navName: "false",
  },
];

// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// <Route path="/blog/:id" element={<BlogDetails />} />
// <Route path="/blog" element={<Blog />} />
// <Route path="/products" element={<Products />} />
// <Route path="/list" element={<List />} />
// <Route path="*" element={<Error />} />
