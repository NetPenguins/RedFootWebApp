import React, { Component } from "react";
import { signin, signInWithGoogle, signInWithGitHub } from "../lib/authUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'
import '../styles/main.css'
//import { auth, setUser } from "../lib/util";
import {getFirebase, setUser} from "../lib/util"

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      modal: false,
      email: "",
      password: "",
      loaded: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleModal(){
    this.state.modal = !this.state.modal
    $('#login-modal').toggleClass('is-active')
  }
  
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
      setUser(getFirebase().auth().currentUser)
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
      
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <>
      {console.log(this.props.noButton)}
      {!this.props.noButton && 
      <button className="button is-primary" id="login" onClick={() => {
        this.toggleModal()
      }}>
        Login
      </button>}
      <LoginModal googleSignIn={this.googleSignIn} githubSignIn={this.githubSignIn} toggleModal={this.toggleModal} error={this.state.error} noButton={this.props.noButton}/>
      </>
    );
  }
}

export const LoginModal = (props) => {
  return(
    <div className={`modal top ${props.noButton ? "is-active" : ""}`}id='login-modal'>
        <div className="box fit">
            <button class="delete is-pulled-right" aria-label="close" onClick={()=>{
              props.toggleModal()
            }}></button>
            <p className="title is-size-2 has-text-dark has-text-centered">You can log in with any of these services</p>
            <div className="box has-text-centered">
              <button className="button is-danger is-medium" type="button" onClick={props.googleSignIn}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faGoogle}/>
                </span>
                <span>Sign in</span>
              </button>
              <button className="button is-medium" type="button" onClick={props.githubSignIn}>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faGithub}/>
                </span>
                <span>Sign in</span>
              </button>
            </div>
            <hr />
            <div className="field">
              {props.error ? (
                <p className="has-text-danger has-text-centered">{`${props.error}`}</p>
              ) : null}
            </div>
        </div>
      </div>
  )
}
