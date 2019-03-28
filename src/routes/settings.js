import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import messages from 'lib/text';

import { List, ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

import Next from 'modules/settings/next';
import Tokens from 'modules/settings/tokens/list';
import TokensEdit from 'modules/settings/tokens/edit';

const styles = {
	link: {
		color: 'inherit',
		textDecoration: 'none',
		fontWeight: 'inherit',
		display: 'block'
	},
	linkActive: {
		backgroundColor: 'rgba(0,0,0,0.1)'
	}
};

const SettingsMenu = () => (
	<List>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/settings/next"
			exact={true}
		>
			<ListItem
				primaryText="Next"
				leftIcon={<FontIcon className="material-icons">settings</FontIcon>}
			/>
		</NavLink>
		<NavLink
			style={styles.link}
			activeStyle={styles.linkActive}
			to="/settings/tokens"
		>
			<ListItem
				primaryText={messages.settings_tokens}
				leftIcon={<FontIcon className="material-icons">vpn_key</FontIcon>}
			/>
		</NavLink>
	</List>
);

const Settings = ({ match }) => {
	return (
		<div className="row row--no-gutter col-full-height">
			<div className="col-xs-12 col-sm-4 col-md-3 col--no-gutter scroll col-full-height">
				<SettingsMenu />
			</div>
			<div className="col-xs-12 col-sm-8 col-md-9 col--no-gutter scroll col-full-height">
				<Switch>
					<Route path="/settings/next" exact component={Next} />
					<Route path="/settings/tokens" exact component={Tokens} />
					<Route path="/settings/tokens/add" exact component={TokensEdit} />
					<Route path="/settings/tokens/:tokenId" component={TokensEdit} />
				</Switch>
			</div>
		</div>
	);
};

export default Settings;
