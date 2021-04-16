import React, { Component } from "react";
import NoteCard from "./src/component/NoteCard/NoteCard.jsx";
import NotesList from "./src/component/NoteList/NotesList.jsx";
import NoteList from "./src/component/NoteList/NotesList.jsx";
import RegisterForm from "./src/component/RegisterForm/RegisterForm.jsx";


export default class HomePage extends Component {
  render() {
    return (
      <section className="conteudo">
        <RegisterForm />
        <NotesList/>
      </section>
    );
  }
}
