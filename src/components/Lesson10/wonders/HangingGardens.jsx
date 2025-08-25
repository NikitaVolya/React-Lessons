import React from "react";


class HangingGardens extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Висячі сади Семіраміди</h1>
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanging_Gardens_of_Babylon.jpg/500px-Hanging_Gardens_of_Babylon.jpg"
          alt="Висячі сади"
          style={{width: "50%"}}/>
        </div>
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            posuere metus vel felis aliquam, eget sagittis justo blandit. Cras
            id lorem tincidunt, maximus est in, elementum mi. Suspendisse
            potenti. Etiam ut mauris ut purus rhoncus suscipit.
          </p>
        </div>
      </div>
    );
  }
}

export default HangingGardens;