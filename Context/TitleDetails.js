import React, { Fragment } from "react";
import Error from "./Error";
import Loading from "./Loading";
import  PostContext  from "./Context";

const TitleDetails = props => {

    const checkLoad = (c) => {
        return (<Fragment>
            <Loading isLoading={c.isLoading}/>
            <Error isError={c.isError} />
            {c.titles.length && (<Fragment>
                {c.titles.map((a,i) => {
            return (<div key={i}>{a}</div>)
                })}
            </Fragment>)}
        </Fragment>)
    }

    return (<PostContext.Consumer>
       {c => (<Fragment>
            Title Details
            {checkLoad(c)}
       </Fragment>)
       }
    </PostContext.Consumer>)
    
}

export default TitleDetails;
