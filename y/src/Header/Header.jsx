import React, {useState, useEffect} from 'react'
import styles from './Header.module.css'

function Header () {

    const [vida, setVida] = useState(100);
    const [vidaAtual, setVidaAtual] = useState();
    const [danoEntrada, setDanoEntrada] = useState();
    const [danoInput, setDanoInput] = useState();

    function handleDanoInput(event){
        setDanoInput(event.target.value);
    }

    function calcularDanoCura(i){
        const vidaPctg = vidaAtual/100;

        
    }

    return(
        <div className={styles.container}>
            <div className={styles.vidaContainer}>
                <div id='vidaAtual' className={styles.vida}></div>
            </div>
            <input  className={styles.entradaDano}
                    type="number"
                    value={danoInput} 
                    onChange={handleDanoInput}/>
            <div className={styles.botoes}>
                <button className={styles.botaoDano}>
                    DANO
                </button>
                <button className={styles.botaoCura}>
                    CURA
                </button>
            </div>
        </div>
    )

}

export default Header