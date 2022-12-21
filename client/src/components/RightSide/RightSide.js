import React, { useState } from "react";
import "./RightSide.css";
import Nav from "../Nav/Nav";

const RightSide = () => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
        <div className="Home-RightSide">
            {/* Side Navbar */}
            <Nav />

        </div>
    );
};

export default RightSide;
