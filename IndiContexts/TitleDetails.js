import React, { Fragment } from "react";
import { DataLoadingContext, TitleContext } from "./Contexts";
import DataDisplayHOC from "./DataDisplayHOC";

const TitleDetails = props => {

    const checkLoad = (titles) => {       
        return (<div>
            <h1>Titles </h1>
            {titles.map((a,i) => {
            return (<div key={i}>{a}</div>)
        })}
        </div>)
    }
    return (
         <Fragment>
            <h6>Title Details</h6>
            {props.dataLoad? props.dataLoad : 
                (<TitleContext.Consumer>
                    { titles => checkLoad(titles) } 
                </TitleContext.Consumer>)}                 
       </Fragment>)    
}

export default DataDisplayHOC(TitleDetails,DataLoadingContext);

/* const checkLoad = (titles) => {       
    return (titles.map((a,i) => {
        return (<div key={i}>{a}</div>)
    }))
} */


/*

{props.dataLoad}
    <TitleContext.Consumer>
        {titles => checkLoad(titles) }
    </TitleContext.Consumer>

*/

    
