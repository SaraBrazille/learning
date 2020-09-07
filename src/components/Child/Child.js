import React, {Component} from 'react';

import './Child.css';

export default class Child extends Component {
	render() {
		return (
			<span> {this.props.children} </span>
		)
	}
}