import React, { Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";

const AuthorDetails = props => {

    const checkLoad = () => {
        return (<Fragment>
            <Loading isLoading={props.isLoading}/>
            <Error isError={props.isError} />
            {props.authors.length && (<Fragment>
                {props.authors.map((a,i) => {
            return (<div key={i}>{a}</div>)
                })}
            </Fragment>)}
        </Fragment>)
    }
    

    return (<div>
        Author Details
        {checkLoad()}
    </div>)
    
}

export default AuthorDetails;
