import React, { useState, useEffect } from "react";
import Poto from "./Poto";
import './MesPotos.css'
import NouveauPoto from "./NouveauPoto";

const dataPotos = [
  {
    nom: "Rachel",
    points: 30,
    image:
      "https://fr.web.img3.acsta.net/r_640_360/newsv7/20/07/23/10/11/3398657.jpg",
  },
  {
    nom: "Paul",
    points: 25,
    image: "https://previews.123rf.com/images/photocatcher/photocatcher1709/photocatcher170900305/86954296-portrait-d-amp-un-homme-joyeux-gai-gaie-avec-poings-comme-signe-succ%C3%A8s.jpg",
  },
];

const dataActions = [
  {
    nom: "appel",
    points: 10
  },
  {
    nom: "sms",
    points: 1
  },
  {
    nom: "bouffe",
    points: 20
  },
  {
    nom: "visio",
    points: 5
  }
];

function MesPotos() {
  const [potos, setPotos] = useState(dataPotos);
  const [actions, setActions] = useState(dataActions);


  const onUpdateItem = (item, action) => {
    console.log(action);
    let nouvelArray = potos.map(elt => {
      if (elt.nom === item.nom) {
        console.log("elt.points", elt.points);
        const nouveauxPoints = elt.points + action.points;
        return {
          ...elt, points: nouveauxPoints
        }
      }
      return elt;

    });

    setPotos(nouvelArray);
  }

  const ajouterPoto = (nouveauPoto) => {
    setPotos([...potos, nouveauPoto]);
  }

  const sortedPotos = potos.sort(function (a, b) {
    return b.points - a.points;
  });

  return (
    <div className="mainPotos">
      <NouveauPoto ajouterPoto={ajouterPoto} />
      {
        sortedPotos
          .map(poto => {
            return (
              <React.Fragment>
                <Poto item={poto} actions={actions} onUpdateItem={onUpdateItem} />
              </React.Fragment>
            )

          })
      }
    </div>
  )
}

export default MesPotos;
