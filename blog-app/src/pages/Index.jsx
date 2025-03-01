import React from "react";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
import { CreatePost } from "./CreatePost";
import { BlogPost } from "./BlogPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export function Index(){
    return(
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/created" element={<CreatePost/>}/>
            <Route path="/post/:id" element={<BlogPost/>}/>
        </Routes>
      </Router>
    )
}