import React, { Component } from "react";
import NotesList from "../NoteList/NotesList";
import styles from './noteCard.module.css';

class NoteCard extends Component {
  
  render() {
    return (
      <section className={styles.noteCardStyle}>
          <header className={styles.noteCardHeaderStyle}>
              <h3 className={styles.noteCardTitleStyle}>Titulo</h3>
              
          </header>
          <p className={styles.noteCardTextStyle}>Escreva sua nota</p>
      </section>
    );
  }
}

export default NoteCard;
