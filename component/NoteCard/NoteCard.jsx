import React, { Component } from "react";
import styles from "./noteCard.module.css";
import deletePNG from "../../assets/img/delete.png";
class NoteCard extends Component {
  delete(){
    const index = this.props.index;
    this.props.deleteNote(index);
  }

  render() {
    return (
      <section className={styles.noteCardStyle}>
        <header className={styles.noteCardHeaderStyle}>
          <h3 className={styles.noteCardTitleStyle}>{this.props.title}</h3>
          <img src={deletePNG} onClick={this.delete.bind(this)} />
        </header>
        <main className={styles.noteCardTextBoxStyle}>
          <p className={styles.noteCardTextStyle}>{this.props.text}</p>
        </main>
      </section>
    );
  }
}

export default NoteCard;
