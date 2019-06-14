import React, { Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";

const TitleDetails = props => {
    
    const checkLoad = () => {
        return (<Fragment>
            <Loading isLoading={props.isLoading}/>
            <Error isError={props.isError} />
            {props.titles.length && (<Fragment>
                {props.titles.map((a,i) => {
            return (<div key={i}>{a}</div>)
                })}
            </Fragment>)}
        </Fragment>)
    }
    

    return (<div>
        Title Details
        {checkLoad()}
    </div>)
}

export default TitleDetails;
