import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import styles from "./notesList.module.css";
import RegisterForm from "../RegisterForm/RegisterForm.jsx";


export default class NotesList extends Component {
  render() {
    return (
      <section>
        <p>Your notes</p>
        <ul className={styles.noteList}>

          {Array.of("l", "l", "a", "g", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G", "G").map((categoria, index) => {
            return (
              <li key={index} className={styles.noteListItem}>
                <div>{categoria}</div>
                <NoteCard />
              </li>
            );
          }
          )
          }
        </ul>
      </section>

    );
  }
}
