import React from "react";
import Loading from "./Loading";
import Error from "./Error";

const DataDisplayHOC = (WrappedComp,property) => {
    return (props) => {
        const checkLoad = () => {
           
            if(props.isLoading){
                return  (<Loading />);
            }else if(props.isError){
                return (<Error  errMsg={props.error}/>);
            }else if(props[property].length){
               return (props[property].map((a,i) => {
                    return (<div key={i}>{a}</div>)
                }))
            }else{
                return null;
            }           
        }
        
        return (<WrappedComp>
            {checkLoad()}
        </WrappedComp>)
    }
}

export default DataDisplayHOC;
