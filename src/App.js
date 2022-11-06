import './App.css';
import React, { useEffect, useState } from "react";
import Create from './component/Create';
import Read from './component/Read';
import Ubdate from './component/Ubdate';
import Care from './component/Care';
import Test from './component/Test';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

import axios from "axios";

function App() {
  // const [state, setState] = useState([])

  // useEffect(() => {
  //   axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=c24ecbb2").then((res) => {
  //     console.log(res.data);
  //     setState(res.data);
  //   })
  // }, [])


  return (
    <div>



      <Router>
        <Routes>
          <Route path="/Create" element={<Create />}></Route>
          <Route path="/Read" element={<Read />}></Route>
          <Route path="/Ubdate" element={<Ubdate />}></Route>
          <Route path="/Care" element={<Care />}></Route>
          <Route path="Test/:id" element={<Test />}></Route>


        </Routes>
      </Router>
      {/* <Care /> */}

      {/* 
      {state.map(items => {
        return (
          <>
            <p>title: {items.Poster}</p>
            <p>body: {items.body}</p>
          </>
        )
      })} */}
    </div>
  );
}

export default App;
