import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import * as auth from 'lib/webstoreAuth';
import NotFound from 'routes/notFound';
import Login from 'routes/apps/login';
import Account from 'modules/apps/account';
import Services from 'modules/apps/services';
import ServiceDetails from 'modules/apps/serviceDetails';
import AppDetails from 'modules/apps/appDetails';

export default () => (
	<Switch>
		<Route path="/apps" exact component={Services} />
		<Route path="/apps/service/:serviceId" exect component={ServiceDetails} />
		<Route path="/apps/app/:appKey" exect component={AppDetails} />
		<Route path="/apps/login" exact component={Login} />
		<Route path="/apps/account" exact component={Account} />
		<Route component={NotFound} />
	</Switch>
);
