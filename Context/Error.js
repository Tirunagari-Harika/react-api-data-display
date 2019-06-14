import React, { Fragment } from "react";

const Error = props => {
    console.log("Error ", props.errMsg);
    return (props.isError && <Fragment>Error ...</Fragment>)
}

export default Error;
