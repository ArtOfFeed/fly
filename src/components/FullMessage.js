import React, {Component} from 'react';
const urlApi = 'https://fmail.flyaps.com/api/v1/mailbox/messages/1/';
console.log(id);
class FullMessage extends Component {
	state = {
		FullMessage: []
	}
	componentDidMount() {
		fetch(urlApi)
		.then(response => response.json())
		.then(data => this.setState({ FullMessage: data }));
	}
	render() {
		return (
			<div className='full_name'>
				<div></div>
			</div>
		)
	}
}

export default FullMessage;