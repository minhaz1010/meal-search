import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import Area from "./Components/Area/Area";
import Layout from "./Layout/Layout";
import SingleFood from "./Components/SingleFood/SingleFood";
import EachCategory from "./Components/EachCat/EachCategory";
import Country from "./Components/Country/Country";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s"
            );
          },
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/search.php?s"
            );
          },
        },
        {
          path: "/category",
          loader: () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/categories.php"
            );
          },
          element: <Category></Category>,
        },

        {
          path: "/area",
          loader:() =>{
              return fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            },
          element: <Area></Area>,
        },

        {
          path: "/food/:foodId",
          loader: ({ params }) => {
            console.log(params.foodId);
            console.log();
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`
            );
          },
          element: <SingleFood></SingleFood>,
        },
        {
          path: "/menu/:menuItem",
          loader: ({ params }) => {
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.menuItem}`
            );
          },
          element: <EachCategory></EachCategory>,
        },
        {
          path:"/area/:areaId",
          loader:({params})=>{
            return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.areaId}`)
          },
          element:<Country></Country>
        }
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
