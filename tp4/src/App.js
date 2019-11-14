import React, { Component } from 'react';
import Profile from './Components/Profile';
import ProfileButton from './Components/ProfileButton'
// MES DONNEES

const profil = [
  {
    nom :"Debussy",
    prenom : "Claude",
    naissance :"01/03/1970",
    post :"Ready to rock ?",
      img: "data:image/jpeg;base64,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"
  },

  {
    nom :"Martine",
    prenom : "Dubois",
    date :"04/07/1990",
      post :"Si seulement on avait un peu de musique dans ce monde",
    img : "http://www.gillespudlowski.com/wp-content/uploads/2015/01/l1270226-1024x680.jpg",
},
{
    nom :"Jeanne",
    prenom : "Parent",
    date :"27/08/1990",
    post :"Mes larmes sont les sentiments de mon coeur meurtri",
    img :{ src: 'https://pbs.twimg.com/profile_images/1074444120771440641/k5SsD9bT_400x400.jpg'}
    }
];

class App extends Component{
    constructor(props){
        super(props)
        this.state ={currentProfil: profil[0]}
    }

    handleProfileButton = (prenom) => {
        if(prenom === 'Jeanne')
            this.setState({currentProfil :profil[2]})
        if(prenom === 'Claude')
            this.setState({currentProfil :profil[0]})
        if(prenom === 'Martine')
            this.setState({currentProfil :profil[1]})
    }

    render()
    {
        return(
            <div>
                <div style={{display: 'flex'}}>
                    <div onClick={() => {this.handleProfileButton(profil[0].prenom)}}>
                        <ProfileButton nom={profil[0].prenom}></ProfileButton>
                    </div>
                    <div onClick={() => {this.handleProfileButton(profil[1].prenom)}}>
                        <ProfileButton nom={profil[1].prenom}></ProfileButton>
                    </div>
                    <div onClick={() => {this.handleProfileButton(profil[2].prenom)}}>
                        <ProfileButton nom={profil[2].prenom}></ProfileButton>
                    </div>
                </div>
                <Profile profil={this.state.currentProfil}></Profile>
            </div>
        );
    }
}


export default App;
