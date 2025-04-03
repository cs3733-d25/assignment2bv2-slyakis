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
          <h4>Kaylie's Hobby 1:</h4>
          <Hobby1 />
          <List1 />
          <Table1 />
          <Form1 />
          <h4>Christine's Hobby:</h4>
          <Hobby2 />
          <List2 />
          <Table2 />
          <Form2 />
      </div>
    </>
  )
}

export default App
