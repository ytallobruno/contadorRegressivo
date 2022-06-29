import React from "react";
import styles from "./ContadorCard.module.css";

export default function ContadorCard({
    timerDias,
    timerHoras,
    timerMinutos,
    timerSegundos,
}) {
    return (
        <>
            <div className={styles.containerTempo}>
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

ContadorCard.defaultProps = {
    timerDias: 0,
    timerHoras: 0,
    timerMinutos: 0,
    timerSegundos: 0,
};
