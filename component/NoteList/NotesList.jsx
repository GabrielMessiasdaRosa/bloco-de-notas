import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard.jsx";
import styles from "./notesList.module.css";

export default class NotesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <ul className={styles.noteList}>
          {this.props.notes.map((note, index) => {
            return (
              <li key={index} className={styles.noteListItem}>
                
                <NoteCard 
                index={index}
                deleteNote={this.props.deleteNote}
                title={note.title} text={note.text} />

              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
