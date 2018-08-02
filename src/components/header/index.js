import { h, Component } from 'preact';
import { route } from 'preact-router';
import TopAppBar from 'preact-material-components/TopAppBar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/TopAppBar/style.css';
import style from './style.css';

export default class Header extends Component {
	closeDrawer() {
		this.drawer.MDComponent.open = false;
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);
	moveToRegist = () => {location.href="https://naver.com"}

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	goToSchedule = this.linkTo('/schedule')

	render() {
		return (
			<div>
				<TopAppBar class={style.top_app_bar} fixed>
					<TopAppBar.Row>
						<TopAppBar.Section>
							<TopAppBar.Title class={style.top_app_bar_title}>
								<span>GDG Korea WebTech</span>
							</TopAppBar.Title>
						</TopAppBar.Section>
						<TopAppBar.Section class={style.top_app_bar_sign_in} onClick={this.moveToRegist}>
							<div class={style.sign_in}>
								등록하기
							</div>
						</TopAppBar.Section>
					</TopAppBar.Row>
				</TopAppBar>
				<Drawer.TemporaryDrawer ref={this.drawerRef}>
					<Drawer.DrawerContent>
						<Drawer.DrawerItem onClick={this.goHome}>
							<List.ItemGraphic>home</List.ItemGraphic>
							Home
						</Drawer.DrawerItem>
						<Drawer.DrawerItem onClick={this.goToSchedule}>
							<List.ItemGraphic>event</List.ItemGraphic>
							Schedule
						</Drawer.DrawerItem>
					</Drawer.DrawerContent>
				</Drawer.TemporaryDrawer>
			</div>
		);
	}
}
