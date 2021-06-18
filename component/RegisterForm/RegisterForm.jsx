import React, { Component } from "react";
import styles from "./registerForm.module.css";
function preventeDP(event) {
  event.preventDefault();
  event.stopPropagation();
}


export default class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.text = "";

  };


  _handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;

  }
  _handleChangeTextarea(event) {
    event.stopPropagation();
    this.text = event.target.value;

  }

  _createNote(event) {
    preventeDP(event);
    let title = this.title;
    let text = this.text;
    this.props.createNewNote(title, text);

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

          <button className={styles.registerFormSubmit}>Create</button>



        </form></section>


    );
  }
}
