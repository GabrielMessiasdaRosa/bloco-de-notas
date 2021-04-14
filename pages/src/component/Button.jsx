import React, { Component, useState } from 'react';
import styles from './button.module.css'
export default function Button(adiciona1) {
        
            function Contador() {
                const [contador, setContador] = useState(1);
                function adicionarContador() {
                    setContador = setContador + 1;
                }
                ReactDOM.render (
                    <button type="button" onClick={adicionarContador} className={styles.botaoAdd}>Adiciona</button>
                )

            }

        
        



}
