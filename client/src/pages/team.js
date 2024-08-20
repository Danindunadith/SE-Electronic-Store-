// pages/team.js

import React from "react";
import People from "../components/People_mng/retrievePeople/people";

const Teams = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "centre",
                alignItems: "centre",
                height: "100vh",
            }}
        >
            <People/>
        </div>
    );
};

export default Teams;