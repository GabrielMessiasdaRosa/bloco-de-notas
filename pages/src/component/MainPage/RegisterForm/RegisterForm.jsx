import React, { Component } from "react";
import styles from "./registerForm.module.css";



export default class RegisterForm extends Component {
   
    constructor(props){
      super(props);
      this.title="";
      this.text="";
      

    };


    _handleChangeTitle(event){
      event.stopPropagation();
      this.title = event.target.value;
      
    }
    _handleChangeTextarea(event){
      event.stopPropagation();
      this.text = event.target.value;
      
    }

    _createNote(event){
      event.preventDefault();
      event.stopPropagation();
      let titleNote = this.title;
      let textNote = this.text;
      console.log(titleNote, textNote);
    }


  render() {
    return (
      <section>
        
        
        <form className={styles.registeForm}
        onSubmit={this._createNote.bind(this)}>


      <input
        className={styles.registerFormInputTitle}
        placeholder="Note title"
        onChange={this._handleChangeTitle.bind(this)}
      />

      <textarea
        className={styles.registeFormTextarea}
        placeholder="Write here"
        onChange={this._handleChangeTextarea.bind(this)}
      ></textarea>
      
      <div className={styles.categorySelect}>
        <label className="categorySelect" for="category">Choose a category:</label>

        <select  name="category" id="category">
          <option id="work" value="Work">Work</option>
          <option id="Studies" value="Studies">Studies</option>
          <option id="Reminder" value="Reminder">Reminder</option>
        </select>
      </div>
      <button className={styles.registerFormSubmit}>Write down</button>

      

    </form></section>
      

    );
  }
}
