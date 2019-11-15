// ./Components/Profile.js

import React, {Component} from 'react';

const style = [
    {width: '35%', height: '45%', position: "fixed", top: "45%", left: "50%",  transform: "translate(-50%, -50%)", backgroundColor: 'white', paddingLeft: 20,border: '2px solid black'},
    {width: '35%', height: '45%', position: "fixed", top: "45%", left: "50%",  transform: "translate(-50%, -50%)", backgroundColor: 'blue', paddingLeft: 20,border: '2px solid black'},
    {width: '35%', height: '45%', position: "fixed", top: "45%", left: "50%",  transform: "translate(-50%, -50%)", backgroundColor: 'yellow', paddingLeft: 20,border: '2px solid black'},
    {width: '35%', height: '45%', position: "fixed", top: "45%", left: "50%",  transform: "translate(-50%, -50%)", backgroundColor: 'green', paddingLeft: 20,border: '2px solid black'}]

export default class Profile extends Component {
    constructor(props){
        super(props)
        
        this.state={style: 0}
    }
    
    handleStyleButton = () => {
        if(this.state.style < 3){
            this.setState({style: this.state.style+1})
        }
        else{
            this.setState({style: 0})
        }
    }

    render() {
        return(
            <div style={style[this.state.style]}>
                <img style={{flex:1, position: "relative", left: "40%", top:"10%",   width: 80, height:100,borderRadius: "50%", }} src={this.props.profil.img}  alt={"profile_img"} />
                <p>Prenom : {this.props.profil.prenom}  <space style={{float : 'right',paddingRight:80,}}> Nom : {this.props.profil.nom} </space> </p>
                <p>Date de Naissance: {this.props.profil.naissance}</p>
                <p>Dernier Post : {this.props.profil.post} </p>
                <div style={{float : 'right',padding: '5px'}} ><button  onClick={this.handleStyleButton}> Change style </button> </div>
            </div>
        );
    }
}