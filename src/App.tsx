import { useState } from 'react'
import baking from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from "./Title.tsx"
import React from "react";
import Intro from "./Intro";

function App() {
  return (
    <>
      <div>
          <Title />
          <Intro username="Kaylie Quach" />
      </div>
    </>
  )
}

export default App
