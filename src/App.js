import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Navigation/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import { ConstructorFragment } from "ethers/lib/utils";
import { Component, useState } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onSubmit = () => {
    console.log("click");
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;