import React from "react";

export default function InputUser(props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <label htmlFor="diaMesAno">{props.textoLabel}</label>
            <input
                required
                id="diaMesAno"
                htmlFor="diaMesAno"
                type="date"
                defaultValue={props.valorInput}
            />
        </div>
    );
}
