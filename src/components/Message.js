import React, {Component} from 'react';

class Message extends Component {
	state = {
		isOpen: false
	}
	render() {
		const {message} = this.props;
		return (
			<div className={`item_message ${this.state.isOpen ? 'Open' : 'Close'}`} onClick={this.handleClick}>
				<span>{message.from_message}</span>
				<span>{message.subject}</span>
				<span>{message.preheader}</span>
				<span>{message.received_at}</span>
			</div>
		)
	}
	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Message;