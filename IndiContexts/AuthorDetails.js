import React, { Fragment } from "react";
import { DataLoadingContext, AuthContext } from "./Contexts";
import Error from "./Error";
import Loading from "./Loading";

const AuthorDetails = props => {

    const checkLoad = (loading,authors) => {
        if(loading.isLoading)
            return (<Loading />)
        else if(loading.isError)
            return (<Error errMsg={props.error} />)
        return (<div>
            <h1>Authors</h1>
            {authors.map((a,i) => {
                return (<div key={i}>{a}</div>)
            })}
        </div>)
    }

    return (<DataLoadingContext.Consumer>
       {loading => (<Fragment>
               <div>Author Details</div>
               <AuthContext.Consumer>
                    {authors => checkLoad(loading,authors) }
                </AuthContext.Consumer>
           </Fragment>)
        }                     
    </DataLoadingContext.Consumer>)
    
}

export default AuthorDetails;
