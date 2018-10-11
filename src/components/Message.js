import React, {Component} from 'react';
import FullMessage from './FullMessage';

class Message extends Component {
	state = {
		isOpen: false,
		important: ''
	}
	handleImportant = (importantVal) => {
        this.setState({
        	important: importantVal
        });
    }
	render() {
		const {message} = this.props;
		console.log(this.state);
		return (
			<div className={`message_item ${this.state.isOpen ? 'opened' : 'closed'}`} onClick={this.handleClick}>
				<div className='message_info'>
					<span>{message.from_message}</span>
					<span>{message.subject}</span>
					<span>{message.preheader}</span>
					<span>{message.received_at.toLocaleString()}</span>
				</div>
				<div>{this.state.important}</div>
				<FullMessage onImportant={this.handleImportant} id={message.id} />
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