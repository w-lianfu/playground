import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
	RaisedButton
} from 'material-ui';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Demo = () => (
	<div>
		<MuiThemeProvider>
			<RaisedButton label='Default' />
		</MuiThemeProvider>
		<MuiThemeProvider>
			<FloatingActionButton>
				<ContentAdd />
			</FloatingActionButton>
		</MuiThemeProvider>
	</div>
)

const AddComp = () => (
	<MuiThemeProvider>
		<FloatingActionButton>
			<ContentAdd />
		</FloatingActionButton>
	</MuiThemeProvider>
)

export {
	Demo,
	AddComp
}
