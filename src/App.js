import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutePages from "./components/RoutePages";
function App() {
  return (
    <BrowserRouter>
    <div id="preloader">
        <div id="loader"></div>
      </div>
     <RoutePages/>
    </BrowserRouter>
    
  );
}

export default App;
