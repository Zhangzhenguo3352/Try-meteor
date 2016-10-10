import React, { Component } from 'react';

import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Radium from 'radium';
import { Meteor } from 'meteor/meteor';
	import CircularProgress from 'material-ui/CircularProgress';


import { HTTP } from 'meteor/http';

import RaisedButton from 'material-ui/RaisedButton'
import isEmpty from 'lodash/fp/isEmpty'

import UserInfo from './user/UserInfo.js'
import '../api/users.js'
class Account extends Component {
	componentDidMount() {
    $(".loader").delay(800).fadeOut('slow', function() {
      $("#messages").fadeIn('slow');
      let msgList = document.getElementById('message-list');
      if(msgList !== null) {
        msgList.scrollTop = msgList.scrollHeight;
      }
    });
  }
  componentDidUpdate() {
    let msgList = document.getElementById('message-list');
    if(msgList !== null) {
      msgList.scrollTop = msgList.scrollHeight;
    }
  }


	constructor(props) {
	    super(props);
	    this.state = {
	      user: {}
	    };
	  }
	handleSubmit(e) {
	    e.preventDefault();
	    const username = this.refs.username.getValue();
	    const url = `https://api.github.com/users/${username}`;
	    HTTP.call('get', url, (error, res) => {
	      if(error) {
	        console.log(error);
	      } else {
	        this.setState({user: JSON.parse(res.content)})
	        console.log(JSON.parse(res.content))
	      }
	    });
	}

	
	handleClick(e) {
	    e.preventDefault();
	    Meteor.call('update/user', this.state.user, (error) => {
	      if(error) {
	        console.log(error);
	        return;
	      }
	      this.context.router.push('/chat');
	    });
	}

  render() {

  	let styles = {
      root: {
        flexGrow: 1,
        overflowY: 'scroll',
        paddingTop: '64px',
        paddingLeft: '16px',
        paddingRight: '16px'
      },
      card: {
        maxWidth: '700px',
        margin: '20px auto',
        padding: '20px',
      },
      circle: {
        margin: '0 auto',
        paddingTop: '100px',
        display: 'block'
      },
      list: {
        flexGrow: 1,
        overflowY: 'auto',
      },
      messages: {
        display: 'none'
      }
    };



	let GitHubInfo;
	if(!isEmpty(this.state.user)){
		GitHubInfo = (
			<div>
				<UserInfo userInfo={this.state.user}/>
				<RaisedButton
		          label="save"
			      
			      style={{display:'block',margin:'30px auto 0',width:'80px'}}
			      primary={true}
			      onClick={this.handleClick.bind(this)}
			      />
          	
			</div>
		)
	}
    return (
      <div style={styles.root}>
        <Card style={styles.card}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              hintText="GitHub Account"
              ref='username'/>
            <FlatButton
              type="submit"
              primary={true}
              label="search github" />
          	
          </form>
          <div id="message-list" style={styles.list}>
        <CircularProgress
          mode="indeterminate"
          className="loader"
          style={styles.circle} />
        <div id="messages" style={styles.messages}>
          文字马上出来了，哈哈😄 800 毫秒
        </div>
      </div>
          {GitHubInfo}
        </Card>
      </div>

    );
  }
}

Account.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Radium(Account);