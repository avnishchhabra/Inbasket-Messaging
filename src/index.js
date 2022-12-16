import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/Header";
import "./css/flex.css";
import "./css/general.css";
import "./css/spacing.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="app">
        <Header />
        <App />
      </div>
    ),
  },
  {
    path: "/:id",
    loader: ({ params }) => {
      console.log('iddddd',params.id)
      return params.id
    },
    element: (
      <div className="app">
        <Header />
        <DetailPage />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
