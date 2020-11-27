import React from "react"
import Nav from "../styles/style"
import { Link } from "gatsby"

export default function () {
    return(
        <Nav>

            <div className="navbar">
                    <Link to="#head" className="LinkTopo" activeClassName="teste">
                        Início
                    </Link>

                    <Link to="#projetos" className="LinkTopo" activeClassName="teste">
                        Projetos
                    </Link>
            </div>

        </Nav>
    )
}
