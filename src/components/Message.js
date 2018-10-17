import React, {Component} from 'react';
import FullMessage from './FullMessage';

class Message extends Component {
	render() {
		const {message} = this.props;
		let fullMessage;
		if (message.isOpen) {
            fullMessage = <FullMessage FullMessage={message.FullMessage} />;
        }
		return (
			<div className={`message_item ${message.isOpen ? 'opened' : 'closed'}`} onClick={() => this.props.toggleMessage(message.id)}>
				<div className='message_info'>
					<span>{message.from_message}</span>
					<span>{message.subject}</span>
					<span>{message.preheader}</span>
					<span>{message.received_at.toLocaleString()}</span>
				</div>
                {fullMessage}
			</div>
		)
	}
}

export default Message;