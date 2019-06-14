import React, { Fragment } from "react";
import DataDisplayHOC from "./DataDisplayHOC";

const TitleDetails = props => {
    return (<div>
        Title Details
        <div {...props}></div>
    </div>)
}

export default DataDisplayHOC(TitleDetails,"titles");
