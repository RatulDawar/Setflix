import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { withRouter } from 'react-router-dom';



export class HorizontalScM extends Component {
    
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
        let data;
        console.log(this.props.genId)
            data = await fetch(`https://api.themoviedb.org/3/trending/${this.props.which}/day?api_key=66c495981d58ad7b7afefaa4b7de5ede&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${this.props.geneId}&with_watch_monetization_types=flatrate`);
        
        
        let parsedData = await data.json();
        for(let i of parsedData.results){
            this.movies.push(i);
        }
        console.log(parsedData.results);
        
            data = await fetch(`https://api.themoviedb.org/3/trending/${this.props.which}/day?api_key=66c495981d58ad7b7afefaa4b7de5ede&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${this.props.geneId+1}&with_watch_monetization_types=flatrate`);
        
        parsedData = await data.json();
        for(let i of parsedData.results){
            this.movies.push(i);
        }
        this.setState({
            movies:this.movies,
        })
        
        
    }
    onClickNext = ()=>{
        let toScroll =  document.getElementById(this.props.index);
            toScroll.scrollLeft = toScroll.scrollLeft + 1050;
        
    }
    onClickPrev = ()=>{
        let toScroll =  document.getElementById(this.props.index);
  
            toScroll.scrollLeft = toScroll.scrollLeft - 1050;
    }
    
    Redirect = (element)=>{
        
        this.props.liftStateUp(element);
        this.props.history.push('/Info');
    }
    render() {
        
        return (
            <div className = "my-5" style = {{position:"relative", left:"3%", top:"2px",color:"white"}}>
                <h5>{this.props.heading}</h5>
                <div  className = "d-flex flex-row bd-highlight mb-3 horiReplace" id = {this.props.index}>
                    <button className="carousel-control-prev" type="button"  onClick = {this.onClickPrev} data-bs-slide="prev" id = "pBut">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>   
                    {this.state.movies.map((element)=>{
                        
                        if(element.poster_path != null){
                            
                        return <div  key = {element.id} onClick = {() =>this.Redirect(element)}>
                                <MovieCard  title ={element.title}  imageUrl = {this.state.imagePath + element.poster_path} />
                                </div>
                        }else{
                            return<div></div>
                        }
                    })}
                    <button className="carousel-control-next" type="button" onClick = {this.onClickNext}  data-bs-slide="next" id = "pBut" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                
            </div>
        )
    }
}

export default withRouter(HorizontalScM)
