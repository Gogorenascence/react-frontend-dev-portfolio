import React, { Component } from "react";
import Switch from "react-switch";

class LightSwitch extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    return (


            <div className="lightswitch">

              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#7293ff"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#7293ff",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />

          </div>


    );
  }
}



// import React, { useState } from "react";
// import Switch from "react-switch";

// function LightSwitch() {
//     const [checked, setChecked] = useState(false);

//     const handleChange = (event) => {
//         setChecked(true);
//         setTheme();
//     };

//     const setTheme = (event) => {
//         var dataThemeAttribute = "data-theme";
//         var body = document.body;
//         var newTheme =
//         body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
//         body.setAttribute(dataThemeAttribute, newTheme);
//     }

//     return (
//         <div className="lightswitch">
//             <Switch
//                 checked={checked}
//                 onClick={handleChange}
//                 offColor="#99aef3"
//                 onColor="#353535"
//                 className="react-switch mx-auto"
//                 width={90}
//                 height={40}
//                 zIndex={100}
//                 uncheckedIcon={
//                   <span
//                     className="iconify"
//                     data-icon="twemoji:owl"
//                     data-inline="false"
//                     style={{
//                       display: "block",
//                       height: "100%",
//                       fontSize: 25,
//                       textAlign: "end",
//                       marginLeft: "20px",
//                       color: "#353239",
//                       zIndex: "100",
//                     }}
//                   ></span>
//                 }
//                 checkedIcon={
//                   <span
//                     className="iconify"
//                     data-icon="noto-v1:sun-with-face"
//                     data-inline="false"
//                     style={{
//                       display: "block",
//                       height: "100%",
//                       fontSize: 25,
//                       textAlign: "end",
//                       marginLeft: "10px",
//                       color: "#353239",
//                     }}
//                   ></span>
//                 }
//                 id="icon-switch"
//               />
//         </div>
//     );
// }

export default LightSwitch;
