
import './App.css';
import Navbar from './components/Navbar';
import Caraousel from './components/Caraousel';
import HorizontalSc from './components/HorizontalSc';
import MovieInfo from './components/MovieInfo';
import HorizontalScT from './components/HorizontalScT'
import HorizontalScM from './components/HorizontalScM'
import Srch from './components/Srch'
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    

    super(props)
    this.state = {
      obj:{},
      query:""
    }
  }
   liftStateUp = (data) =>{
    this.setState({obj:data});
  }
  liftStateUpQuery = (data) =>{
    this.setState({query:data});
  }
  
  render() {
    console.log(this.state.query)
    return (
      <div >
      <Router>
        <Navbar liftStateUp = {this.liftStateUpQuery}/>
        <Switch>
          <Route exact path = "/">
            <Caraousel/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="tv" home = {false} index = "one" heading = "Recommended Shows" geneId = {1}/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="movie" home = {false} index = "two" heading = "Top Rated"  geneId = {3}/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="tv" home = {false} index = "three" heading = "Orignals"  geneId = {5}/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="movie" home = {false} index = "four" heading = "Popular"  geneId = {7}/>
          </Route>
        
        <Route path = "/shows">
            <Caraousel/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="tv" home = {false} index = "one" heading = "Recommended Shows" geneId = {1}/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="tv" home = {false} index = "two" heading = "Top Rated"  geneId = {3}/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="tv" home = {false} index = "three" heading = "Orignals"  geneId = {5}/>
            <HorizontalScT  liftStateUp = {this.liftStateUp}  which ="tv" home = {false} index = "four" heading = "Popular"  geneId = {7}/>
            
        </Route>
        <Route path = "/movies">
            
            <Caraousel/>
            <HorizontalScM liftStateUp = {this.liftStateUp} which ="movie" home = {false} index = "one" heading = "Recommended Movies" geneId = {1}/>
            <HorizontalScM liftStateUp = {this.liftStateUp} which ="movie" home = {false} index = "two" heading = "Top Rated" gen = {true} geneId = {3}/>
            <HorizontalScM liftStateUp = {this.liftStateUp} which ="movie" home = {false} index = "three" heading = "Popular" gen = {true} geneId = {5}/>
            <HorizontalScM liftStateUp = {this.liftStateUp} which ="movie" home = {false} index = "four" heading = "Voted" gen = {true} geneId = {7}/>
            <HorizontalScM liftStateUp = {this.liftStateUp} which ="movie" home = {false} index = "five" heading = "Award Winners" gen = {true} geneId = {9}/>
            <HorizontalScM liftStateUp = {this.liftStateUp} which ="movie" home = {false} index = "six" heading = "Favourites" gen = {true} geneId = {11}/>
        </Route>
        
        <Route path = "/Info">
            <MovieInfo title = {this.state.obj.title} release = {this.state.obj.first_air_date}language = {this.state.obj.original_language} adult = {this.state.obj.adult} description = {this.state.obj.overview} poster = {this.state.obj.poster_path} back = {this.state.obj.backdrop_path} identi = {this.state.obj.id}/>
        </Route>
        <Route path  = "/search" >
          <Srch query = {this.state.query} liftStateUp = {this.liftStateUp}/>
        </Route>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App


