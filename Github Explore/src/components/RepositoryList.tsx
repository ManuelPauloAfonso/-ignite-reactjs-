import RepositoryItem from "./RepositoryItem";
import '../style/repositories.css'
import React, { useEffect, useState } from "react";

interface Repository{
    name: string,
    description: string,
    html_url: string


}

export default function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))

    },  [])
    return(
        <div className="list-repository">
            <h1>Lista de repositorio</h1>
            <ul>
                {repositories.map(repository => {
                    return  <RepositoryItem key={repository.name} repository={repository} />
                })}
               
                
            </ul>
        </div>
    )
}