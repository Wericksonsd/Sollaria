import React, {useState, useEffect} from 'react'
import styles from './Header.module.css'

function Header () {

    const [vida, setVida] = useState(100);
    const [vidaAtual, setVidaAtual] = useState(25);
    const [danoEntrada, setDanoEntrada] = useState();
    const [danoInput, setDanoInput] = useState(10);

    function handleDanoInput(event){
        setDanoInput(event.target.value);
    }

    function calcularDanoCura(i){
        let vidaPctg = vida/100;
        let j = 1;
        let tamBarra = "";
        //const vidaVar = document.getElementsByClassName(styles.vida)
        setDanoEntrada(danoInput);
        setVidaAtual(vidaAtual+(danoEntrada*i));
        
        do{
            j++;
            vidaPctg = vidaPctg * j;
        } while(vidaPctg <= vidaAtual);

        tamBarra = String(j)+"%"
        console.log(tamBarra);
        //vidaVar.styles.width = '${tamBarra}'; 
    }

    return(
        <div className={styles.container}>
            <div className={styles.vidaContainer}>
                <div id='vidaAtual' className={styles.vida}>{vidaAtual}</div>
            </div>
            <input  className={styles.entradaDano}
                    type="number"
                    value={danoInput} 
                    onChange={handleDanoInput}/>
            <div className={styles.botoes}>
                <button className={styles.botaoDano} onClick={calcularDanoCura(-1)}>
                    DANO
                </button>
                <button className={styles.botaoCura} onClick={calcularDanoCura(1)}>
                    CURA
                </button>
            </div>
        </div>
    )

}

export default Header