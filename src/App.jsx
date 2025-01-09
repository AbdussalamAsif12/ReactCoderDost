import React from 'react'
import Video from './Components/Video/Video'
import './App.css'
const App = () => {
  let obj = {
    title: "Node js tutorial", time: "1 Year Ago", views: "200k", channel: "Coder Dost"
  }
  return (
    <>
      <Video {...obj}/>
      <Video title="React js tutorial" time="1 Year Ago" views="200k" channel="Coder Dost" />
    </>
  )
}

export default App