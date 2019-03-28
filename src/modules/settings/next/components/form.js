import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { TextField, SelectField, DatePicker } from 'redux-form-material-ui';

import { CustomToggle } from 'modules/shared/form';
import messages from 'lib/text';
import style from './style.css';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { List, ListItem } from 'material-ui/List';

class GeneralSettings extends React.Component {
	componentDidMount() {
		this.props.onLoad();
	}

	render() {
		let { handleSubmit, pristine, submitting, initialValues } = this.props;

		return (
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'initial',
					width: '100%'
				}}
			>
				<Paper className="paper-box" zDepth={1}>
					<div className={style.innerBox}>
						<div className="row between-xs middle-xs">
							<div className="col-xs-12 col-sm-6">{messages.domain}</div>
							<div className="col-xs-12 col-sm-6">
								<Field
									component={TextField}
									fullWidth={true}
									name="domain"
									placeholder="https://domain.com"
								/>
							</div>
						</div>
					</div>
					<div className="buttons-box">
						<RaisedButton
							type="submit"
							label={messages.save}
							primary={true}
							className={style.button}
							disabled={pristine || submitting}
						/>
					</div>
				</Paper>
			</form>
		);
	}
}

export default reduxForm({
	form: 'GeneralSettingsForm',
	enableReinitialize: true
})(GeneralSettings);
