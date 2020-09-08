import React, { Component } from 'react';

import './Parent.css';
import GoogleMapReact from 'google-map-react';

export default class Parent extends Component {

	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	render() {
		return (
			<div style={{ height: '50vh', width: '50%' }}>
				<GoogleMapReact
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
				>
				</GoogleMapReact>
			</div>
		)
	}
}