import React from "react";




function Poto({ item, actions, onUpdateItem }) {


  return (
    <div class="card">
      <img src={item.image} alt={item.nom} />
      <div class="container">
        <h4>
          <b>{item.nom}</b>
        </h4>
        <p>{item.points}</p>
      </div>
      <section>
        {
          actions.map(action => {
            return (
              <button onClick={() => {
                onUpdateItem(item, action);
              }}>{action.nom}</button>
            )
          })
        }
      </section>
    </div>

  );
};

export default Poto;
