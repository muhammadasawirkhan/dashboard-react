import React from "react";
import { Signin } from "../assets/pages/Auth/Signin";
import { Signup } from "../assets/pages/Auth/Signup";
import { Password_recovery } from "../assets/pages/Auth/Password_recovery";
import { Verify_Code } from "../assets/pages/Auth/Verify_Code";
import { New_password } from "../assets/pages/Auth/New_password";
import Layout from "../Components/Layout";
import Dashboard from "../assets/pages/Dashboard_relevant/Dashboard";
import Community from "../assets/pages/Dashboard_relevant/Community";
import AI_Health_Coach from "../assets/pages/Dashboard_relevant/AI_Health_Coach";
import { Goals } from "../assets/pages/Dashboard_relevant/Goals";
 

const routes = [
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/Password_recovery",
      element: <Password_recovery />,
    },
    {
      path: "/Verify_Code",
      element: <Verify_Code />,
    },
    {
      path: "/New_password",
      element: <New_password />,
    },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        { path:"Dashboard", element: <Dashboard /> },
        { path: "Goals", element: <Goals /> },
        { path: "Community", element: <Community /> },
        { path: "AI_HealthCoach", element: <AI_Health_Coach /> },
      ],
    },
  ];

export default routes;
