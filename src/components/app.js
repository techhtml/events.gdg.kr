import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
// Event 메인 바뀌면 변경
import Home from '../routes/ChromeDevMeetup';

import Schedule from '../routes/schedule';
import Admin from '../routes/admin';

import style from './style.css'
import firebase from '@firebase/app';
import '@firebase/firestore'

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
						<Home path="/" db={db} />
					</Router>
				</div>
			</div>
		);
	}
}
