import React from "react";


class Lighthouse extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Олександрійський маяк</h1>
          <img
            src="https://cdn.britannica.com/07/172307-050-4D3BA855/Pharos-Alexandria.jpg"
            alt="Олександрійський маяк"
          />
        </div>
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            feugiat diam id nisl mattis vehicula. Vestibulum ac velit id justo
            tincidunt ultricies. Aliquam euismod nunc vel massa tristique
            ullamcorper. Suspendisse potenti.
          </p>
        </div>
      </div>
    );
  }
}

export default Lighthouse;
