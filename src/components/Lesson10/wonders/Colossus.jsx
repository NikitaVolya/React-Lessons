import React from "react";


class Colossus extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Колос Родоський</h1>
          <img
            src="https://www.meisterdrucke.uk/kunstwerke/800px/English_School_-_The_Colossus_of_Rhodes_-_%28MeisterDrucke-71521%29.jpg"
            alt="Колос Родоський"
            style={{ width: "30%" }}
          />
        </div>
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tempor ex at turpis vehicula, at scelerisque purus egestas. Morbi
            dapibus erat magna, nec vehicula odio fermentum ut. Duis sed
            efficitur urna, at blandit odio.
          </p>
        </div>
      </div>
    );
  }
}

export default Colossus;
