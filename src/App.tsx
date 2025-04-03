import { useState } from 'react'
import baking from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Title from "./Title.tsx";
import Intro from "./Intro";
import Hobby1 from "./Hobby1.tsx";
import List1 from "./List1";

function App() {
  return (
    <>
      <div>
          <Title />
          <Intro username="Kaylie Quach / Christine Ngo" />
      </div>
    </>
  )
}

export default App
