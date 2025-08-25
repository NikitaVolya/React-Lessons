import React from "react";
import "./Wonders.css";

class ArtemisTemple extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Храм Артеміди в Ефесі</h1>
          <img
            src="https://drivethruhistoryadventures.com/wp-content/uploads/2018/07/3_Temple-of-Artemis-A11.jpg"
            alt="Храм Артеміди"
          />
        </div>
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pretium, justo at mattis rhoncus, justo nisi viverra turpis, non
            rhoncus neque ligula ac ipsum. Sed auctor felis eu odio venenatis
            sagittis. Donec gravida justo nec risus varius, a malesuada magna
            faucibus.
          </p>
        </div>
      </div>
    );
  }
}

export default ArtemisTemple;
