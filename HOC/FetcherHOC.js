import React, { Component } from "react";
import axios from "axios";

const FetcherHOC = (WrappedComp,url) => {
    class FetcherHOC extends Component{
        state = {
            data:null,
            isLoading:false,
            isError:false,
            error:null
        }

        async componentDidMount(){
            this.setState({isLoading:true});
            try {
                const result = await axios.get(url);
                this.setState({data:result.data, isLoading:false});
            }
            catch(error){
                console.log("EE ",error);
                this.setState({error,isError:true,isLoading:false});
            }            
        }

        render(){
            return (<WrappedComp {...this.props} {...this.state}/>)
        }
    }

    return FetcherHOC;
}

export default FetcherHOC;
