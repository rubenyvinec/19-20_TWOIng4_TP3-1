// ./Components/Profile.js
import React, {Component} from 'react';
export default class ProfileButton extends Component {

    render() {
        return(
            <div style={{display: 'flex', width: 200, height: 50, justifyContent: 'center', alignItems: 'center', border: '2px solid black', position:"relative",left:"1200px",top :"20%" }}>
                <p>{this.props.nom}</p>
            </div>
        );
    }
}