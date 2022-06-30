import React from "react";
import styles from "./CounterCard.module.css";

export default function CounterCard({
    titulo,
    timerDias,
    timerHoras,
    timerMinutos,
    timerSegundos,
}) {
    return (
        <>
            <div className={styles.timeContainer}>
                <h2>{titulo}</h2>
                <div className={styles.clock}>
                    <section>
                        <p>{timerDias}</p>
                        <p>Dia(s)</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHoras}</p>
                        <p>Hora(s)</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutos}</p>
                        <p>Minuto(s)</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSegundos}</p>
                        <p>Segundo(s)</p>
                    </section>
                </div>
            </div>
        </>
    );
}
