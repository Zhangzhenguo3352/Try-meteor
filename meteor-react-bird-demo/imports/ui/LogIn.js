import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { Meteor } from 'meteor/meteor'

class Login extends Component {
getStyles() {
    return {
      root: {
        minHeight: '400px',
        textAlign: 'center',
        padding: '6em 2em',
        '@media (min-width: 500px)': {
          width: '500px',
          margin: '0 auto'
        }
      },
      form: {
        margin: '30px auto 0'
      },
      textField: {
        display: 'block',
        width: '100%'
      },
      floatingLabel: {
        fontSize: '14px'
      },
      label: {
        lineHeight: '50px',
        fontWeight: '600',
        fontSize: '14px'
      },
      button: {
        height: '50px',
        width: '200px',
        marginTop: '50px',
        marginBottom: '15px'
      }
    };
  }

  handleSubmit(ev){
  	ev.preventDefault();
  	
  	let userName = this.refs.userName.getValue();
    let password = this.refs.password.getValue();
    Meteor.loginWithPassword({username: userName}, password, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      this.context.router.push('/chat');
    });
  }
  render() {
  	let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <form onSubmit={this.handleSubmit.bind(this)} style={styles.form}>
          <TextField
            ref="userName"
            style={styles.textField}
            floatingLabelText="用户名"
            floatingLabelStyle={styles.floatingLabel} />
          <TextField
            ref="password"
            style={styles.textField}
            floatingLabelText="密码"
            floatingLabelStyle={styles.floatingLabel}
            type="password" />
          <RaisedButton
            style={styles.button}
            labelStyle={styles.label}
            type="submit"
            label="登录"
            secondary={true} />
        </form>
      </div>
    );
  }
}

export default Radium(Login);