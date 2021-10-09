import React, { Component } from 'react'

export class SearchCard extends Component {
    render() {
        return (
            <div>
                <div className = "card" id = "poster1">
                    <img src={this.props.imageUrl} className="card-img-top" alt="load"/>
                    <div id = "data">
                        <div id = "nameOfMovie"><strong>{this.props.obj.title}</strong></div>
                        <div id = "movieRelease">{this.props.obj.release_date.substring(0,4)}</div>
                        <div id = "information" >{this.props.obj.overview}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchCard
