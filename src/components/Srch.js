import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';
import SearchCard from './SearchCard';
export class Srch extends Component {
    movies = [];
    constructor(){
        super();
        this.state = {
            movies :this.movies,
            imagePath:"https://image.tmdb.org/t/p/w500",
            page:1,
           
        }
    }
    
    async componentDidMount(){
        this.movies = [];
        let data;
        
            data = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=66c495981d58ad7b7afefaa4b7de5ede&language=en-US&query=${this.props.query}&page=1&include_adult=true`);
        let parsedData = await data.json();
        if(parsedData.results != undefined){
            for(let i of parsedData.results){
                this.movies.push(i);
            }
        
                data = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=66c495981d58ad7b7afefaa4b7de5ede&language=en-US&query=${this.props.query}&page=2&include_adult=true`);
            
            parsedData = await data.json();
            for(let i of parsedData.results){
                this.movies.push(i);
            }
        }
        console.log(this.movies)
        this.setState({
            movies:this.movies,
        })
        
        
    }
    componentDidUpdate(prevProps) {
        console.log(this.props.query)
        console.log(prevProps.query)
        if(this.props.query=== prevProps.query)
        {
          this.componentDidMount();
        }
      } 
      
    Redirect = (element)=>{
        
        this.props.liftStateUp(element);
        this.props.history.push('/Info');
    }
    render() {
        return (
            <>
            
            <div className = "container" id = "searchFlex">
            <div id = "indicator">Showing results for '{this.props.query}' - {this.state.movies.length} results</div>
                {this.state.movies.map((element)=>{
                        if(element.poster_path != null && element.title != null && element.overview != null){
                        return <div key = {element.id} onClick = {() =>this.Redirect(element)}>
                                <SearchCard  obj = {element}  imageUrl = {this.state.imagePath + element.poster_path} />
                                </div>
                        }else{
                            return<div></div>
                        }
                    })}
            </div>
            </>
        )
    }
}

export default withRouter(Srch)
