import React, { Component } from 'react';

import './Parent.css';
import GoogleMapReact from 'google-map-react';
import Child from '../Child';

export default class Parent extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			color: "white"
		}
	}
	
	handleSetColor = () => {
		this.setState({
			color: "red"
		})
	}

	render() {
		return (
			<div style={{ height: '100vh', backgroundColor: this.state.color, width: '100%' }}>
				<Child setColor={this.handleSetColor}></Child>
			</div>
		)
	}
}