import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor'
import '../imports/api/users.js';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './main.css'
// import Home from '../imports/ui/Hello.js'
import { renderRoutes } from '../imports/startup/client/router.js'
Meteor.startup(() => {
	injectTapEventPlugin();

	render(renderRoutes(),document.getElementById('myApp'))
})