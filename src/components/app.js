import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Schedule from '../routes/schedule';

import style from './style.css'
import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<div class={style.main}>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Schedule path='/schedule/' db={db} />
						<Schedule path='/schedule/:id' />
					</Router>
				</div>
			</div>
		);
	}
}
