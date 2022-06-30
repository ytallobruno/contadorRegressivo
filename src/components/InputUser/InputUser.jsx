import React from "react";
import style from "./InputUser.module.css";

export default function InputUser(props) {
    return (
        <div className={style.container}>
            <h2>{props.titulo}</h2>
            <div className={style.inputContainer}>
                <label htmlFor="diaMesAno">{props.textoLabel}</label>
                <input
                    required
                    id="diaMesAno"
                    htmlFor="diaMesAno"
                    type="date"
                    defaultValue={props.valorInput}
                />
            </div>
        </div>
    );
}
