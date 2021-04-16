import React, { Component } from "react";
import styles from "./registerForm.module.css";
class RegisterForm extends Component {
  render() {
    return (
      <form className={styles.formStyle}>
        <div className={styles.titleBoxStyle}>
          <p>Defina um titulo para sua nota</p>
        </div>
        <div className={styles.inputBoxStyle}>
          <input className={styles.inputTitleStyle} />
        </div>

        <div className={styles.textAreaBoxStyle}>
          <textarea className={styles.textAreaStyle}></textarea>
        </div>

        <button className={styles.createNoteBtnStyle}>Criar Nota</button>
      </form>
    );
  }
}
export default RegisterForm;
