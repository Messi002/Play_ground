import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import './App.css'
import Login from "./Pages/Login_screen";
import Create from "./Pages/Create_screen";
import Comment from "./Pages/Comment_screen";
import Set from "./Components/Set";
import Comments from "./Components/Comments";
import Home from "./Pages/Home"
import Error_Page from "./Pages/Error_Page";
import Time_line from "./Components/Time_line";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"





function App() {
 







  return(
    <div className="App container-fluid"   >
      <div className="row" >
      <Router >
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login/>} />
  <Route path="/create" element={<Create/>} />
  <Route path="/profile" element={<Comment/>}>
  <Route path="comments" element={<Comments/>} />
  <Route path="Timeline" element={<Time_line/>} />
  <Route path="settings" element={<Set/>} />
  </Route>
 
  <Route path="*" element={<Error_Page/>} />


</Routes>
</Router>
</div>

    </div>
   
  );
}

export default App;
