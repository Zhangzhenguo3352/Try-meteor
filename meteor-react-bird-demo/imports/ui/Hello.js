import React,{Component} from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Hello extends Component{
	render(){
		return(
			<div>
				<MuiThemeProvider muiTheme={getMuiTheme()}>
		        	<RaisedButton label='material-ui' primary={true} />

		      	</MuiThemeProvider>

			</div>
		)
	}
}
export default Hello;