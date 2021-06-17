import React, { Component } from "react";
import NotesList from "../NoteList/NotesList";
import styles from './noteCard.module.css';

class NoteCard extends Component {

  render() {
    return (
      <section className={styles.noteCardStyle}>
        <header className={styles.noteCardHeaderStyle}>
          <h3 className={styles.noteCardTitleStyle} >{this.props.title}</h3>
        </header>
        <main className={styles.noteCardTextBoxStyle}>
          <p className={styles.noteCardTextStyle}>{this.props.text}</p>
        </main>

      </section>
    );
  }
}

export default NoteCard;
