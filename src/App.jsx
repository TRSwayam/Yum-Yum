import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import EventCatering from "./components/EventCatering";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import PaymentSystem from "./components/PaymentSystem"; // Import PaymentSystem
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Login from "./components/Login";

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",  
        element: <Cart />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/eventcatering",
        element: <EventCatering />,
      },
      {
        path: "/payment", // Add Payment route
        element: <PaymentSystem />,
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
