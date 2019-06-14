import React from "react";

const LoadingHOC = (WrappedComp) => {
    return (props) => {
        console.log("LoadingHOC ",props);
        return (<WrappedComp  {...props} />)
    }
}

export default LoadingHOC;
