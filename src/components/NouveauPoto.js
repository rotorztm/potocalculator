import React, { useState } from 'react';
import './NouveauPoto.css'

function NouveauPoto({ ajouterPoto }) {

    const [nouveauPoto, setNouveauPoto] = useState({});


    return (
        <section className="mainNouveauPoto">
            <div className="element">
                <label>Nom</label>
                <input onChange={(e) => {
                    nouveauPoto.nom = e.target.value;
                    setNouveauPoto(nouveauPoto)
                }} defaultValue={nouveauPoto.nom} type="text" />
            </div>
            <div className="element">
                <label>Points de base</label>
                <input onChange={(e) => {
                    nouveauPoto.points = +e.target.value;
                    setNouveauPoto(nouveauPoto)
                }} defaultValue={nouveauPoto.points} type="text" />
            </div>
            <div className="element">
                <label>Image Url</label>
                <input onChange={(e) => {
                    nouveauPoto.image = e.target.value;
                    setNouveauPoto(nouveauPoto)
                }} defaultValue={nouveauPoto.image} type="text" />
            </div>
            <button onClick={() => {
                ajouterPoto(nouveauPoto)
            }} >Ajouter ce poto</button>
        </section>
    )
}

export default NouveauPoto;