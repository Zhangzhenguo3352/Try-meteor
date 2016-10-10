import React ,{ Component} from 'react'


import Radium, { StyleRoot } from 'radium';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppDrawer from './shared/AppDrawer.js';
import NavBer from './shared/NavBar.js'
import AppBar from 'material-ui/AppBar'

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LogOutMenu from './auth/LogOutMenu.js';

class App extends Component{
	getChildContext() {
	    return {
	      muiTheme: getMuiTheme()
	    };
  	}

  	getStyles(){
  		return {
  			root:{
  				display:'flex',
  				flexDirection:'column',
  				height:'100vh',
  				minHeight:'100vh',
  				background:'#f5f2f2'
  			}
  		}
  	}

  	componentWillMount() {
	    let setNavBarState = () => {
	      this.setState({renderNavBar: window.innerWidth > 700});
	    };
	    setNavBarState();
	    window.onresize = setNavBarState;
	}
	handleTouchTap() {
    	this.refs.drawer.handleToggle();
  	}
	render(){
		const styles = this.getStyles();
		return(
			<StyleRoot>
		        <div style={styles.root}>
		          

		          { this.state.renderNavBar ? <NavBer currentUser={this.props.currentUser} userInfo={this.props.userInfo} /> :
					(this.props.currentUser ? this.getLoginAppBar() : this.getAppBar()) }
          			<AppDrawer ref='drawer' currentUser={this.props.currentUser} />
		          

		          { this.props.children }
		        </div>
		    </StyleRoot>
		)

	}

	getAppBar() {
    return (
      <AppBar onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)} style={{flexShrink: 0}}/>
	    );
	}
	getLoginAppBar() {
	    return (
	      <AppBar onLeftIconButtonTouchTap={this.handleTouchTap.bind(this)}
	        style={{flexShrink: 0}}
	        iconStyleRight={{marginTop: 0}}
	        iconElementRight={<LogOutMenu username={this.props.userInfo ? this.props.userInfo.username : ''}/>}/>
	    );
	 }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

App.propTypes = {
  currentUser: React.PropTypes.string,
};
export default createContainer(() => {
  return {
    currentUser: Meteor.userId(),
    userInfo: Meteor.user()
  };
}, Radium(App));