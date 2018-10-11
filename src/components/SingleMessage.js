import React, {Component} from 'react';

const urlApi = 'https://fmail.flyaps.com/api/v1/mailbox/messages/';

console.log(this)

class SingleMessage extends Component {
	componentDidMount() {
		fetch(urlApi)
		.then(response => response.json())
		.then(data => this.setState({ single: data }));
	}
	render() {
		return (
			<div></div>
		)
	}
}

export default SingleMessage;