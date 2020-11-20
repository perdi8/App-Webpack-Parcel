import React from "react";
import ReactDOM from "react-dom";
import { AverageServiceComponent } from "./averageServiceComponent";
import { TotalScoreComponent } from "./totalScoreComponent";

ReactDOM.render(
  <div>
    <h1>Hello from React </h1>
    <AverageServiceComponent />
    <TotalScoreComponent />
  </div>,
  document.getElementById("root")
);
