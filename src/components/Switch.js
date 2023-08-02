import React, { Component } from "react";

class LightSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false, dark: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState((prevState) => ({
      checked,
      dark: !prevState.dark, // Toggle the dark property
    }));
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme = this.state.dark ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    const iconSrc = this.state.dark
      ? "https://i.imgur.com/LV9WTId.png"
      : "https://i.imgur.com/binFIkR.png";

    return (
      <div>
        <img
          onClick={this.onThemeSwitchChange}
          className="lightbutton"
          src={iconSrc}
          alt={this.state.dark ? "sun icon" : "moon icon"}
        />
      </div>
    );
  }
}

export default LightSwitch;
