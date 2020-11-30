import React from "react"
import Nav from "../components/nav"
import Landing from "../styles/landing"
import Wave from "../../static/wave.svg"

export default function Home() {
  return (
    <div>

      <Nav></Nav>

      <Landing>
        <div className="topo">
          
          <h1>GAMEIROS</h1>
          <p>GERE MAIS LUCRO TENDO UM SITE PROFISSIONAL CONOSCO</p>
          <p>CRIAÇÃO DE SITES</p>
        </div>

        <img src={Wave}/>


      </Landing>
    </div>
  )

}
