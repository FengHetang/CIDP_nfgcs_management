import React from "react";
import "./app.css"

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import routers from "@routers";

function App() {
  return (
      <Router>
        <Routes>
          {routers.map((item,index) =>{
              return(
                  <Route
                      key={index}
                      exact
                      path={item.path}
                      element={<item.element />}
                  />
              )
          })}
            <Route path="/" element={<Navigate to="/login"/>}/>
            <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
      </Router>
  );
}
export default App;
