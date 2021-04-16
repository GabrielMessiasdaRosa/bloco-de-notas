import React, { Component } from "react";
import NoteList from "./src/component/NotesList.jsx";
import RegisterForm from "./src/component/RegisterForm.jsx";

export default class HomePage extends Component {
  render() {
    return (
      <section>
        <RegisterForm></RegisterForm>
        <NoteList></NoteList>
      </section>
    );
  }
}
