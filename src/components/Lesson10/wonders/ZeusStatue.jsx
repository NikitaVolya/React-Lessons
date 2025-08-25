import React from "react";


class ZeusStatue extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Статуя Зевса в Олімпії</h1>
          <img
            src="https://www.grunge.com/img/gallery/the-untold-truth-of-the-statue-of-zeus-at-olympia/l-intro-1654683410.jpg"
            alt="Статуя Зевса"
            width="400"
          />
        </div>
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor, lectus sed imperdiet maximus, risus lorem porttitor
            tellus, sed luctus nisl est ut nulla. Integer nec convallis elit.
            Suspendisse aliquam lorem ac enim pulvinar, vitae suscipit dui
            pretium.
          </p>
        </div>
      </div>
    );
  }
}

export default ZeusStatue;
