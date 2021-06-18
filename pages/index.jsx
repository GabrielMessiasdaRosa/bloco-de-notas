import React, { Component } from "react";
import NoteList from "../component/NoteList/NotesList";
import RegisterForm from "../component/RegisterForm/RegisterForm";

export default class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  createNewNote(title, text) {
    const newNote = { title, text }
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNotesArray
    }
    this.setState(newState)
  }

  render() {
    return (
      <>
        <header className="headerStyle">
        <h1 className="h1-default">Pile of notes</h1>
        </header>
        <main>
          <section className="siteContentStyle">
            
            <RegisterForm createNewNote={this.createNewNote.bind(this)} />
            <h1 className="h1-default">Your pile of notes</h1>
            <NoteList notes={this.state.notes} />

          </section>
        </main>
        <footer className="footerStyle">
            <h1>developed by:<br></br> Gabriel Messias da Rosa</h1>
        </footer>
      </>

    );
  }
}
