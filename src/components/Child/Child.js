import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import './Child.css';

export default class Child extends Component {
	constructor(props) {
		super(props)

		this.state = {
			word: "waiting"
		}
	}

	buttonIsClicked = () => {
		this.setState({
			word: "You clicked it!"
		})
	}

	componentDidMount = () => {
		this.setState({
			word: "Mounted!"
		})
	}

	render() {
		return (
			<>{this.props.children}</>
		)
	}
}