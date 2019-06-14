import React,{ Component } from "react";
import axios from "axios";

class DataFetcher extends Component{
    state = {
        authors:[], 
        titles:[],
        isLoading:false,
        error:null,
        isError:false
    }

    updatePosts = (result) => {
        let authors = [];
        let titles = [];
        result.map((a) => {
            authors.push(a.author);
            titles.push(a.title);
        });
        this.setState({authors:authors,titles:titles});
    }


    async componentDidMount(){
        this.setState({isLoading:true});
        try{
            const result = await axios.get(this.props.url);
            console.log(result.data.hits);
            this.updatePosts(result.data.hits);
            this.setState({isLoading:false});
        }
        catch(error){
           // console.log("Err ", error);
            this.setState({error,isLoading:false,isError:true})
        }
    }

    render(){
        return (this.props.fillPosts({...this.state}));
    }
}

export default DataFetcher;
