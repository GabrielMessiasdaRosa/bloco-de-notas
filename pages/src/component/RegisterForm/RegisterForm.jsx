import React, { Component } from "react";
import styles from "./registerForm.module.css";
export default class RegisterForm extends Component {
  render() {
    return (
      <form  className={styles.registeForm}>
        

        <input
          className={styles.registerFormInput}
          placeholder="Título da nota"
        />

        <textarea
          className={styles.registeFormInput} 
          placeholder="Escreva sua nota"
        ></textarea>

        <button className={styles.registerFormSubmit}>Criar Nota</button>
      </form>
    );
  }
}
