import React, {Component} from 'react';

import './Parent.css';
import Child from '../Child';

export default class Parent extends Component {
	render() {
		return (
			<div className = "box">
				<Child>hello world</Child>
			</div>
		)
	}
}