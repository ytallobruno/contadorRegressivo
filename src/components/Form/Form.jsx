import React, { useState } from "react";
import CounterCard from "../CounterCard/CounterCard";
import InputUser from "../InputUser/InputUser";
import Button from "../Button/Button";
import "./Form.css";

export default function Form() {
    const [tempo, setTempo] = useState([0, 0, 0, 0]);

    const calculaTempo = () => {
        let intervalo = setInterval(() => {
            const dataFutura = new Date(
                document.getElementById("diaMesAno").value
            );
            const horarioAtual = new Date();
            const diferenca = dataFutura.getTime() - horarioAtual.getTime();
            const segundos = Math.floor((diferenca % (60 * 1000)) / 1000);
            const minutos = Math.floor((diferenca % (60 * 60 * 1000)) / (1000 * 60));
            const horas = Math.floor((diferenca % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const dias = Math.floor(diferenca / (24 * 60 * 60 * 1000));

            if (diferenca < 0) {
                clearInterval(intervalo);
            } else {
                setTempo([dias, horas, minutos, segundos]);
            }
        }, 1000);
    };

    const [aparecer, setAparecer] = useState(false);

    const mostrar = () => {
        setAparecer((aparecer) => !aparecer);
    };

    let mudarClasse = aparecer ? "ocultar" : "";

    const ativarFuncoes = (e) => {
        e.preventDefault();
        calculaTempo();
        mostrar();
    };

    var curr = new Date() ;
    curr.setDate(curr.getDate());
    var actualDate = curr.toISOString().substr(0, 10);

    return (
        <>
            <section className={`sectionContainer ${mudarClasse}`}>
                <InputUser
                    titulo={"CONTADOR DE TEMPO"}
                    textoLabel={"Escolha a data:"}
                    valorInput={actualDate}
                />
                <Button text="Calcular" click={ativarFuncoes} />
            </section>

            {aparecer && (
                <div>
                    <CounterCard
                        titulo="Contagem regressiva:"
                        timerDias={tempo[0]}
                        timerHoras={tempo[1]}
                        timerMinutos={tempo[2]}
                        timerSegundos={tempo[3]}
                    />
                </div>
            )}
        </>
    );
}
