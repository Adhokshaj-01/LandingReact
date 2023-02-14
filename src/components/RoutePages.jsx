import React from "react";
import Feature from "./Feature";
import Home from "./Home";
import Main from "./Main";
import About from "./About";
import UI from "./UI";
import Download from "./Download";
import { Routes,Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function RoutePages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
<Routes location={location} key={location.pathname}>
      <Route path="/" element={<Main/>}>
      <Route  index element={<Home/>}/>
      <Route path="/Feature" element={<Feature/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/ui" element={<UI/>}/>
      <Route path="/Download" element={<Download/>}/>
      </Route>
     </Routes>
     </AnimatePresence>
  )}
  export default RoutePages;