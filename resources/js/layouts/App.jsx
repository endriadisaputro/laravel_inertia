import React from "react";
import { Children } from "react/cjs/react.production.min";
import Navbar from "../components/Navbar";

export default function App({ children }) {
    return (
        <div>
            <Navbar />
            <div className="container mt-3">{children}</div>
        </div>
    );
}
