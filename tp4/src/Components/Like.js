// ./Components/Profile.js

import React, {Component} from 'react';

export default class Like extends Component {

    render() {
        return(
            <div style={{width: '35%', height: '20%', position: "fixed", top: "85%", left: "50%",  transform: "translate(-50%, -50%)", paddingLeft: 20,border: '2px solid black'}}>
                <p>{this.props.post}</p>
                <p><button onClick={this.props.handleLike}><span role='img' aria-label="like">👍</span> Like it ? </button>{this.props.likes}</p>
                
            </div>
        );
    }
}