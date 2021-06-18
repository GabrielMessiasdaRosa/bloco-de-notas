import React, { Component } from "react";
import NoteList from "../component/NoteList/NotesList";
import RegisterForm from "../component/RegisterForm/RegisterForm";

export default class HomePage extends Component {
  constructor(){
    super();
    
    this.state={
      notes:[]
    };
  }

  createNewNote(title, text){
    const newNote = {title,text}
    const newNotesArray = [...this.state.notes,newNote]
    const newState = {
      notes:newNotesArray
    }
    this.setState(newState)
  }
  
  render() {
    return (
      <section className="siteContent">
        <h1>Pile of notes</h1>
        <RegisterForm createNewNote={this.createNewNote.bind(this)}/>
        <NoteList notes={this.state.notes}/>
        
      </section>
    );
  }
}
