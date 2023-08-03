import React from "react";


export function InfosUsuario (){
    const autor = "Kleber Mendonça"
    const topicoAutor = "Autor: "

    return(
        <div>
            <div className="autor-image">
            <img src="https://picsum.photos/50/" alt="" />
            <h5>
                {topicoAutor} {autor}
            </h5>
            </div>

        </div>
    )
}