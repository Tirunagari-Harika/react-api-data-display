import React, { Fragment } from "react";

const Loading = (props) => {
    return (props.isLoading && <Fragment>Loading ... </Fragment>)
}

export default Loading;
