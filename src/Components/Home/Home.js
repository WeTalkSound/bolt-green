import React from 'react'
import './Home.css'
import campaign from '../assets/img/campaign.png';
import campaignV from '../assets/img/campaignV.png';

export default function Home() {
  return (
    <div>
      <section id="hero" className="">

        <div className="col-12">
          <img style={{ height:"130px" }} className="img-fluid img-center mb-3 animated rotating" src={ campaign } alt="#GreenByBolt" />
        </div>
          <div class="container">
            <div class="row valign">
              <div className="col-sm-12 col-md-8 offset-md-2 text-center">
                <h3 className="home">
                  {/* Plate <i className="fas fa-car"></i> <span className="primary-text">Face <i className="fas fa-id-badge"></i></span> Share <i className="fab fa-slideshare"></i> */}
                  Vos trajets VTC écologiques avec Bolt.
                </h3>
                <h5>
                  Êtes-vous vraiment un “Green Lover” ? 
                </h5>
                <h5>
                  Répondez au quiz <span className="primary-text">#GreenByBolt</span> pour le découvrir et gagnez jusqu'à -50% sur votre prochain trajet Bolt.
                </h5>
                <a href="/questions" className="btn btn-lg btn-primary animated infinite pulse delay-2s">C’est parti <i class="fas fa-arrow-right"></i></a>
              </div>  
            </div>
          </div>
        </section>
    </div>
  )
}

