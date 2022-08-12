import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Logo from "./Components/Navigation/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import { ConstructorFragment } from "ethers/lib/utils";
import { Component, useState } from "react";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "97eb9a5f7d784f8c967e71531690675f",
});

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

  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict("53e1df302c079b3db8a0a36033ed2d15", this.state.input)
      .then((response) => {
        console.log(response);
      });
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
        <FaceRecognition />
      </div>
    );
  }
}

export default App;