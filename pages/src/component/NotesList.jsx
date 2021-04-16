import React, { Component } from "react";
import styles from "./notesList.module.css";

class NotesList extends Component {
  render() {
    return (
      <div className={styles.cardNotesBoxStyle}>
        <ul>
          <li>
            <header>
              <h3>Titulo da nota</h3>
            </header>
            <p>As anotaçoes aparecem aqui</p>
          </li>
        </ul>
      </div>
    );
  }
}
export default NotesList;
