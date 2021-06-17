import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard.jsx";
import styles from "./notesList.module.css";


export default class NotesList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <section>
        <p>Your notes</p>
        <ul className={styles.noteList}>

          {this.props.notes.map((note) => {
            return (
              <li className={styles.noteListItem}>
                <NoteCard title={note.title} text={note.text}/>
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
