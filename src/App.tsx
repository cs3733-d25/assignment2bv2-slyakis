import { useState } from 'react'
import './App.css'
import Title from "./Title.tsx"
import Intro from "./Intro.tsx";
import Hobby1 from "./Hobby1.tsx";
import List1 from "./List1.tsx";
import Table1 from "./Table1.tsx";
import Form1 from "./Form1.tsx";
import Hobby2 from "./Hobby2.tsx";
import List2 from "./List2.tsx";
import Table2 from "./Table2.tsx";
import Form2 from "./Form2.tsx";
import React from "react";

function App() {
  return (
    <>
      <div>
          <Title />
          <Intro username="Kaylie Quach / Christine Ngo" />
          <br />
          <h2>Kaylie's Hobby:</h2>
          <Hobby1 />
          <br />
          <br />
          <List1 />
          <Table1 />
          <br />
          <Form1 />
          <br />
          <h2>Christine's Hobby:</h2>
          <Hobby2 />
          <br />
          <br />
          <List2 />
          <br />
          <Table2 />
          <br />
          <Form2 />
      </div>
    </>
  )
}

export default App
