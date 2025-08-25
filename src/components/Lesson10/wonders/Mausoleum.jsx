import React from "react";


class Mausoleum extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1>Мавзолей у Галікарнасі</h1>
          <img
            src="https://www.thoughtco.com/thmb/PFMyAuNo7Q8rRzU7IxgNaCNeKLM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mausoleum-58b9e0085f9b58af5cbcc6e2.jpg"
            alt="Мавзолей у Галікарнасі"
          />
        </div>
        
        <div className="page-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            porttitor urna. Curabitur viverra felis ac risus porttitor, ac
            scelerisque purus tincidunt. Vivamus a nisl tellus. Donec a
            ullamcorper arcu. Pellentesque id gravida ipsum.
          </p>
        </div>
      </div>
    );
  }
}

export default Mausoleum;
