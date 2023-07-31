import React, { Component } from "react";
import Typical from "react-typical";

class Header extends Component {
  titles = [];

    render() {

    if (!this.props.sharedData) {
      return null;
    }

    var name = this.props.sharedData.name;
    var networks = this.props.sharedData.social;
    this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
      <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
        <div className="row aligner" style={{height: '75%'}}>
          <div className="col-md-12">
              <h1 style={{color: "white"}}>
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
          </div>
          <div className="col-md-12 social-links">

            {networks?.map((network) =>
              <span key={network.name} className="m-4">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                <img className="logo" src={network.class} alt="cards icon"/>
                </a>
              </span>
              )
            }

          </div>
        </div>
      </header>
    );
  }
}

export default Header;
