import React, {Component} from 'react';

class FullMessage extends Component {
	urlApi = `https://fmail.flyaps.com/api/v1/mailbox/messages/${this.props.id}/`;
	state = {
		FullMessage: {}
	};
	componentDidMount() {
		fetch(this.urlApi)
		.then(response => response.json())
		.then(data => {
			this.setState({
				FullMessage: data 
			})
			this.handleImportantChange();
		})
		.catch((err) => console.error('No response'));
	}
	render() {
		const {FullMessage} = this.state;
		return (
			<div className='full_message'>
				<div>{FullMessage.body}</div>
				<div>{FullMessage.cc + ' ' + FullMessage.bcc}</div>
			</div>
		)
	}
	handleImportantChange() {
        // const important = this.state;
        console.log(this.state)
        // this.props.onImportant(important);
    }
}

export default FullMessage;