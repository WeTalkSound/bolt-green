import React, { Component } from 'react'
import './Footer.css'
import playstore from './google-play-badge.png'
import appstore from './Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="text-center">
                            Téléchargez l’App Bolt pour profiter d’un trajet écologique 100% green !
                        </h5>
                    </div>
                    <div className="col-12">
                        <a href="https://apps.apple.com/ee/app/taxify/id675033630" >
                            <img src={appstore} alt="Get The App" style={{padding: "10px"}} className="img-fluid" />
                        </a>
                        &nbsp;
                        <a href="https://play.google.com/store/apps/details?id=ee.mtakso.client">
                            <img src={playstore} alt="Get The App" className="img-fluid" />
                        </a>
                    </div>
                </div>
                <span className="secondary-text">© 2019 Bolt Technology OÜ. <a href="https://bolt.eu/fr/legal/fr/privacy-for-riders/">Mentions légales</a></span>
            </div>
        </footer>
    )
  }
}
