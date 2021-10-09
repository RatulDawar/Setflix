import React, { Component } from 'react'
import YouTube from 'react-youtube';
//https://www.youtube.com/watch?v=
//24428
export class MovieInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            trailers:[],
            key:"",
            play:false,
            video:"http://www.youtube.com/watch?v=",
            imagePath:"https://image.tmdb.org/t/p/w500",
            opts : {
                height: '390',
                width: '640',
                playerVars: {
                  autoplay: 0,
                },
            }
            
        }
        
      }
      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      
    player= ()=>{
        this.setState({
            play:!this.state.play,
        })
    }
            
      
      async componentDidMount(){
        let data = await fetch(`https://api.themoviedb.org/3/movie/${this.props.identi}/videos?api_key=66c495981d58ad7b7afefaa4b7de5ede&language=en-US`);
        let parseData = await data.json();
        if(parseData.results === undefined && parseData.success === false){
            let data = await fetch(`https://api.themoviedb.org/3/tv/${this.props.identi}/videos?api_key=66c495981d58ad7b7afefaa4b7de5ede&language=en-US`);
            parseData = await data.json();
        }
        console.log(parseData);
           
        this.setState({
            trailers:parseData.results,
        })
        
        this.setState({        
            key:this.state.trailers[this.state.trailers.length-1].key,
        })
        console.log(this.state.key);
      }
    render() {
        return (
            
            <div id = "backwrap" style = {{ backgroundImage:`linear-gradient(to left , rgba(255,255,255,0) 0%,
            #0f171e),url(${this.state.imagePath+this.props.back})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} >
            
            <div id = "mainI" className = "container-fluid " >
                <div id = "poster23"><img src = {this.state.imagePath+this.props.poster}/></div>
                <h2>{this.props.title}</h2>
                <div id = "basic-info">
                    <div id = "year">{this.props.release}</div>
                    <div id = "language">{this.props.language}</div>
                    <div id = "xray" className = "border-di">X-Ray</div>
                    <div id = "adult" className = "border-di" style = {{display: !this.props.adult?"":"none"}}>U/A 13+</div>
                    <div id = "Notadult" className = "border-di" style = {{display: !this.props.adult?"none":""}}>18+</div>
                    
                </div>
                <div id = "Tplayer">
                {this.state.play&&<YouTube videoId={this.state.key} opts={this.state.opts} onReady={this._onReady} />}
                </div>
                <div id = "contr">
                <button type="button" className="btn btn-primary" id = "play" onClick = {this.player}><i className="fas fa-play"></i> Play</button>
                <button type="button" className="btn btn-primary Other" onClick = {this.player}><i className="fas fa-play-circle"></i></button>
                <button type="button" className="btn btn-primary Other" onClick = {this.player}><i className="fas fa-plus"></i></button>
                <button type="button" className="btn btn-primary Other" onClick = {this.player}><i className="fas fa-download"></i></button>
                </div>
                <div id = "description">
                    <h2>Description</h2>
                    <p>{this.props.description}</p>
                </div>
            </div>
            </div>
            
            
        )
    }
}

export default MovieInfo
