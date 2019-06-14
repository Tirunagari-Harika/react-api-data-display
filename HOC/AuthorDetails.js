import React, { Fragment } from "react";
import DataDisplayHOC from "./DataDisplayHOC";

const AuthorDetails = props => {
    return (<div>
        Author Details
        <div {...props} ></div>
    </div>)    
}

export default DataDisplayHOC(AuthorDetails,"authors");
