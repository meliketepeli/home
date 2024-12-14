import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import  Homepage  from "../pages/Homepage";
import  Aboutpage  from "../pages/Aboutpage";
import  Myaccountpage  from "../pages/Myaccountpage";
import { Bagpage } from "../pages/Bagpage";
import { Layout } from "./Layout";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Loginpage } from "../pages/login/Loginpage";


export const AppRoutes = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route 
                        path="/login" 
                        element={
                            <GuestRoute> 
                        <Loginpage />
                        </GuestRoute>
                    } 
                    />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/bag" element={<Bagpage />} />
                    <Route
                        path="/my-account"
                        element={
                            <PrivateRoute>
                                <Myaccountpage />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    );
};

const PrivateRoute = ({ children }) => {
   const [user]= useLocalStorage("user");

    return user ? children : <Navigate to="/login" replace />;
};

const GuestRoute = ({ children }) => {
    const [user]= useLocalStorage("user");
 
     return !user ? children : <Navigate to="/" replace />;
 };
