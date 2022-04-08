import React from "react";
import RepositoryItem from "./RepositoryItem";
import '../style/repositories.css'

export default function RepositoryList(){
    return(
        <div className="list-repository">
            <h1>Lista de repositorio</h1>
            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </div>
    )
}