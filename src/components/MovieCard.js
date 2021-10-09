import React, { Component } from 'react'

export class MovieCard extends Component {
    render() {
        return (
            <div>
                <div className = "card" id = "poster">
                    <img src={this.props.imageUrl} className="card-img-top" alt="load"/>
                </div>
            </div>
        )
    }
}

export default MovieCard
