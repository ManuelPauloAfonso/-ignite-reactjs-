import React from "react";
import '../style/repositories.css'

interface RepositoryItemProps{
    repository: {
        name: string,
        description: string,
        html_url: string
}
}

export default function RepositoryItem(props: RepositoryItemProps){
    return(
        <div className="list-repository">
            <ul>
                <li>
                    <strong>{props.repository.name}</strong>
                    <p>{props.repository.description}</p>
                    <a href={props.repository.html_url}>
                        Acessar Repositorio
                    </a>
                </li>
            </ul>
        </div>
    )
}