import React from "react";

class Pyramid extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Піраміда Хеопса</h1>
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg"
          alt="Піраміда Хеопса"
          />
        </div>
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam. Sed vulputate erat sed mi tincidunt, nec placerat arcu
            viverra. Suspendisse potenti. Integer accumsan, purus nec blandit
            finibus, risus est ultrices sapien, vitae pharetra nisl metus nec
            turpis.
          </p>
        </div>
        
      </div>
    );
  }
}

export default Pyramid;
