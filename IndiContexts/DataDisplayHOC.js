import React, { Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";

/* import { DataLoadingContext } from "./Contexts"; */

const DataDisplayHOC = (WrappedComp,LoadContxt) => {
    return (props) => {
        const checkLoad = (loading) => {
            if(loading.isLoading)
                return (<WrappedComp dataLoad={<Loading />}/>)
            else if(loading.isError)
                return (<WrappedComp dataLoad={<Error errMsg={props.error} />}  />)
            return (<WrappedComp dataLoad={null}/>)
        }

        return (<LoadContxt.Consumer>
            { loading => (<Fragment>
                {checkLoad(loading)}
            </Fragment>) }
        </LoadContxt.Consumer>)    
    }

}

export default DataDisplayHOC;
