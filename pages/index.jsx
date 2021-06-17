import React, { Component } from "react";
import NoteCard from "./src/component/MainPage/NoteCard/NoteCard.jsx";
import NotesList from "./src/component/MainPage/NoteList/NotesList.jsx";
import NoteList from "./src/component/MainPage/NoteList/NotesList.jsx";
import RegisterForm from "./src/component/MainPage/RegisterForm/RegisterForm.jsx";


export default class HomePage extends Component {
  createNewNote(titleNote, textNote){

  }
  render() {
    return (
      <section className="siteContent">
        <h1>Pile of notes</h1>
        <RegisterForm createNewNote={this._createNote}/>
        <NoteList/>
      </section>
    );
  }
}
