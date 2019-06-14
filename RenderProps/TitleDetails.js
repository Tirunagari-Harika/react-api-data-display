import React, { Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";

const TitleDetails = props => {
    
    const checkLoad = () => {
        if(props.isLoading)
            return (<Loading />)
        else if(props.isError)
            return (<Error errMsg={props.error} />)
        return (<Fragment>
            {props.titles.map((a,i) => {
                return (<div key={i}>{a}</div>)
            })}
        </Fragment>)
    }

    return (<div>
        Title Details
        {checkLoad()}
    </div>)
}

export default TitleDetails;
