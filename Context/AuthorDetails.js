import React, { Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";
import  PostContext  from "./Context";

const AuthorDetails = props => {
    const checkLoad = (c) => {
        return (<Fragment>
            <Loading isLoading={c.isLoading}/>
            <Error isError={c.isError} />
            {c.authors.length && (<Fragment>
                {c.authors.map((a,i) => {
            return (<div key={i}>{a}</div>)
                })}
            </Fragment>)}
        </Fragment>)
    }
    

    return (<PostContext.Consumer>
       {c => (<Fragment>
            Author Details
            {checkLoad(c)}
       </Fragment>)
       }
    </PostContext.Consumer>)
    
}

export default AuthorDetails;

/* const checkLoad = (c) => {
    if(c.isLoading)
        return (<Loading />)
    else if(c.isError)
        return (<Error errMsg={c.error} />)
    return (<Fragment>
        {c.authors.map((a,i) => {
            return (<div key={i}>{a}</div>)
        })}
    </Fragment>)
} */
