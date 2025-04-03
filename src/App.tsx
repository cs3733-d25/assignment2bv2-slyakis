import { useState } from 'react'
import './App.css'
import Title from "./Title.tsx"
import Intro from "./Intro.tsx";
import Hobby1 from "./kaylie_components/Hobby1.tsx";
import List1 from "./kaylie_components/List1.tsx";
import Table1 from "./kaylie_components/Table1.tsx";
import Form1 from "./kaylie_components/Form1.tsx";
import Hobby2 from "./christine_components/Hobby2.tsx";
import List2 from "./christine_components/List2.tsx";
import Table2 from "./christine_components/Table2.tsx";
import Form2 from "./christine_components/Form2.tsx";
import React from "react";
import './App.css'

function App() {
  return (
    <>
      <div>
          <Title />
          <Intro username="Kaylie Quach / Christine Ngo" />
          <div className="columns">
              <div className="column">
                  <h4>Kaylie's Hobby 1:</h4>
                  <Hobby1 />
                  <List1 />
                  <Table1 />
                  <Form1 />
              </div>
              <div className="column">
                  <h4>Christine's Hobby:</h4>
                  <Hobby2 />
                  <List2 />
                  <Table2 />
                  <Form2 />
              </div>
          </div>
      </div>
    </>
  )
}

export default App
