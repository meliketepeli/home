import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Aboutpage } from "../pages/Aboutpage";
import { Myaccountpage } from "../pages/Myaccountpage";
import { Bagpage } from "../pages/Bagpage";
import { AppContext } from "../providers/AppProvider"; // AppContext'i import etmeyi unutmayın.

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/bag" element={<Bagpage />} />
                {/* Protected Route */}
                <Route
                    path="/my-account"
                    element={
                        <PrivateRoute>
                            <Myaccountpage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

// PrivateRoute Bileşeni
const PrivateRoute = ({ children }) => {
    const { state } = useContext(AppContext); // AppContext'ten state'i çekiyoruz.
    console.log(state);

    return state.loggedIn ? children : <Navigate to="/" replace />;
};
