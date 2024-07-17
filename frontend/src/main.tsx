import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import "./index.css";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";
import ProtectedRoute from "./pages/ProtectedRoute.tsx";
import PublicRoute from "./pages/PublicRoute.tsx";
import Signup from "./pages/signup/Signup.tsx";
import { SocketContextProvider } from "./context/SocketContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <PublicRoute />, // Use PublicRoute here
        children: [
          { path: "", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
      {
        path: "home",
        element: <ProtectedRoute />,
        children: [{ path: "", element: <Home /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <RouterProvider router={router} />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
