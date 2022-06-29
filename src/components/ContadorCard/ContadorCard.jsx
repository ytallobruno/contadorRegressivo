import React from "react";
import styles from "./ContadorCard.module.css";

export default function ContadorCard({
    titulo,
    timerDias,
    timerHoras,
    timerMinutos,
    timerSegundos,
}) {
    return (
        <>
            <div className={styles.containerTempo}>
                <h2>{titulo}</h2>
                <div className={styles.relogio}>
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
