import React, {Component} from 'react';
import FullMessage from './FullMessage';
import MaterialIcon from 'material-icons-react';

class Message extends Component {
	state = {
		isOpen: false,
		important: '',
		readable: ''
	}
	extendState = ({important, readable}) => {
		this.setState({
			important: important,
			readable: readable
		});
	}
	render() {
		const {message} = this.props;
		let stateImportant = this.state.important;
		let stateReadble = this.state.readable;
		let importantIcon;
		let readableIcon;
		if (stateImportant) {
			importantIcon = <div className="important"><MaterialIcon icon="label_important" /></div>
		}
		if (stateReadble) {
			readableIcon = <div className="read"><MaterialIcon icon="markunread" /></div>
		}
		return (
			<div className={`message_item ${this.state.isOpen ? 'opened' : 'closed'}`} onClick={this.handleClick}>
				<div className='message_info'>
					<span>{message.from_message}</span>
					<span>{message.subject}</span>
					<span>{message.preheader}</span>
					<span>{message.received_at.toLocaleString()}</span>
				</div>
				{importantIcon}
				{readableIcon}
				<FullMessage extendState={this.extendState} id={message.id} />
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