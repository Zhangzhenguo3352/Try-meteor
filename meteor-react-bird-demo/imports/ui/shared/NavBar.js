import React,{Component} from 'react'



import { Tabs, Tab } from 'material-ui/Tabs';
import LogOutMenu from '../auth/LogOutMenu.js';
import Radium from 'radium'

class NavBar extends Component{
	constructor(props) {
	   super(props);
	   this.state = {tabIndex: '/'};
	}
	componentWillMount() {
	   this.setState({
	     tabIndex: this.getSelectedIndex()
	   });
	 }
	 
	componentWillReceiveProps(nextProps) {
	    setTimeout(() => {
	      this.setState({
	        tabIndex: this.getSelectedIndex()
	      });
	    }, 0)
	}
	getSelectedIndex() {
	    return this.context.router.isActive('/', true) ? '/' :
	      this.context.router.isActive('/signup') ? '/signup' :
	      this.context.router.isActive('/account') ? '/account' :
	      this.context.router.isActive('/chat') ? '/chat' :
	      this.context.router.isActive('/login') ? '/login' : '';
	}
	handChange(value) {
    	console.log(value);
    	this.context.router.push(value);
    	this.setState({tabIndex: value});
    }
	render(){
		let styles = {
	      
	      tabs: {
	        width: '390px',
	        position: 'absolute',
	        right: '60px',
	        textTransform: 'uppercase',
	        
	      },
	      tab: {
	        height: '64px',
	        color: 'white'
	      },
	      inkBar: {
	        height: '4px',
	        marginTop: '-4px',
	      },
	    };
		let currentUser = this.props.currentUser;
		return(
			<div>
		         <Tabs value={this.state.tabIndex} onChange={this.handChange.bind(this)}>
		            <Tab label='Home' value='/' />
		            <Tab label={currentUser ? 'account' : 'sign up'} value={currentUser ? '/account' : '/signup'} style={styles.tab} />
		            <Tab label={currentUser ? 'chat' : 'log in'} value={currentUser ? '/chat' : '/login'} style={styles.tab} />
		         </Tabs>
		         { currentUser ? <LogOutMenu username={this.props.userInfo ? this.props.userInfo.username: ''} /> : '' }
			</div>
		)
	}
}
NavBar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}
export default Radium(NavBar);