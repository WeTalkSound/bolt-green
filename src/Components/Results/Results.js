import React, { Component } from 'react'
import greenToBe from '../assets/img/greenToBe.png'
import greenDreamer from '../assets/img/greenDreamer.png'
import greenLover from '../assets/img/greenLover.png'
import { saveAs } from 'file-saver';

import './Results.css'

export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            image: greenToBe,
            title: "Vous êtes un Green-To-Be",
            grade: "Green-To-Be",
            description: "Cela semble un peu compliqué, mais vous pouvez y arriver ! L’écologie et vous, ça ne fait pas vraiment 2, mais voyons les choses positivement : cela ne peut pas être pire. Et vous avez de la chance, <b>Bolt est là pour vous aider à devenir plus Green.</b> Peu importe la catégorie que vous choisissez, <b>votre empreinte carbone est compensée grâce à notre réinvestissement dans des projets environnementaux.</b> Alors déplacez-vous avec Bolt sans culpabilité ! ",
            hasPromo: false,
            promoType: "",
            promoCode: ""
        }
    }

    componentDidMount() {
        const score = this.props.score
        var { image, title, grade, description } = this.state
        switch (true) {
            case score >= 70:
                image = greenLover
                title = "Vous êtes un Green Lover"
                grade = "Green Lover"
                description = "L’écologie et la mobilité verte n’ont aucun secret pour vous ! Votre côté écolo, vous l’assumez à 100% et ça se voit surtout dans vos déplacements où <b>vous privilégiez la catégorie Green</b> des App VTC. Et d’ailleurs, <b>saviez-vous que Bolt compense l’ensemble de vos trajets, quelle que soit la catégorie ?</b> Alors foncez !"
                break;

            case score >= 40:
                image = greenDreamer
                title = "Vous êtes un Green Dreamer"
                grade = "Green Dreamer"
                description = "Vous êtes sur la bonne voie et rêvez de faire encore plus attention à votre empreinte écologique. Vous ne vous prétendez pas être un fervent écolo, mais vous avez les bases et connaissez le sujet dans les grandes lignes. Il ne vous reste plus qu’à mettre davantage en pratique cette volonté Green. <b>Alors n’hésitez plus à privilégier Bolt qui propose une catégorie Green et qui compense votre empreinte carbone sur tous vos trajets, peu importe la catégorie choisie.</b> "
                break;

            default:
                break;
        }
        let shareText = "Je suis un " + grade + " ! Découvre ton statut sur greenbybolt.com et gagne jusqu'à -50% sur ton prochain trajet. #GreenByBolt"
        this.setState({
            image,
            title,
            grade,
            description,
            shareText
        })

        if (Math.round(Math.random(0, 1))) {
            fetch("https://services.etin.space/bolt-campaign/api/green/promo.php", {
                method: 'GET'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        console.log(data)
                        let promoCode = data.promo.code
                        let promoType = data.promo.type
                        this.setState({ promoCode, promoType, hasPromo: true, error: "" })
                    }
                })
                .catch(error => {
                    //
                })
        }
    }

    saveImage = () => {
        saveAs("https://services.etin.space/bolt-campaign/api/green/result?score=" + this.props.score + "&name=" + this.props.name, "greenbybolt.png")
    }

    render() {
        const imageUrl = "https://services.etin.space/bolt-campaign/api/green/result?score=" + this.props.score + "&name=" + this.props.name
        const ctaButton = <a
            href={imageUrl} 
            // onClick={this.saveImage}
            target="_blank"
            className="btn btn-lg btn-primary">
            Téléchargez votre statut
                        </a>
        const promoCode = this.state.hasPromo ?
            (this.state.promoType == "10%") ?
                <div className="mt-3">
                    <p>-10% offerts* sur votre prochain trajet Bolt avec le code</p>
                    <h2 className="primary-text">{this.state.promoCode}</h2>
                    <p>* Valable jusqu'au 31/12 inclus, dans la limite de 4€</p>
                </div>
                :
                <div className="mt-3">
                    <p>-50% offerts* sur votre prochain trajet Bolt avec le code</p>
                    <h2 className="primary-text">{this.state.promoCode}</h2>
                    <p>* Valable jusqu'au 31/12 inclus, dans la limite de 10€</p>
                </div>
            :
            <div className="mt-3">
                <h4>
                    10€ offerts sur votre premier trajet Bolt avec le code <span className="primary-text">GREENBYBOLT</span>
                </h4>
            </div>

        return (
            <section id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-6">
                            <img
                                className="img-fluid"
                                src={this.state.image}
                                style={{
                                    maxHeight: "350px",
                                    margin: "0 auto",
                                    display: "block"
                                }}
                            />
                            <h2 className="primary-text text-center mt-3 bold">{ this.state.grade }</h2>
                        </div>
                        <div className="col-sm-12 mb-3 col-md-6 share-instructions">
                            <h5 className="primary-text">
                                { this.props.score / 10 } / 8
                            </h5>
                            <h4 className="primary-text">
                                {this.state.title}
                            </h4>
                            <p style={{ fontWeight: "300" }} dangerouslySetInnerHTML={{ __html: this.state.description }} />
                            <div className="col-sm-12 share-btns px-0 my-3">
                                <a
                                    href={"https://www.facebook.com/sharer/sharer.php?u=https://GreenByBolt.com&quote=" + encodeURI(this.state.shareText) + " #GreenByBolt"}
                                    // className="social mb-2 facebook btn-floating"
                                    className="social mb-2 facebook btn"
                                    target="_blank"
                                >
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                                &nbsp;
                                <a
                                    href={"https://twitter.com/intent/tweet?text=" + encodeURI(this.state.shareText) + "&url=https://GreenByBolt.com&hashtags=GreenByBolt"}
                                    // className="social mb-2 twitter btn-floating"
                                    className="social mb-2 twitter btn"
                                    target="_blank"
                                >
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                                &nbsp;
                                <a
                                    href={"whatsapp://send?text=" + encodeURI(this.state.shareText) + " https://GreenByBolt.com"}
                                    // className="social mb-2 whatsapp btn-floating"
                                    className="social mb-2 whatsapp btn"
                                    target="_blank"
                                >
                                    <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                                &nbsp;
                            </div>
                            {ctaButton}
                            {promoCode}
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
