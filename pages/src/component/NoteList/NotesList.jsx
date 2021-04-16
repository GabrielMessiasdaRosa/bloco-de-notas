import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import styles from "./notesList.module.css";

export default class NotesList extends Component {
  render() {
    return (
      <ul className={styles.noteList}>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index} className={styles.noteListItem}>
              <div>{categoria}</div>
              <NoteCard/>
            </li>
          );
        })}
      </ul>
    );
  }
}
