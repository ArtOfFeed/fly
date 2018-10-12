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
			this.props.extendState({
				important: data.important,
				readable: data.is_read
			});
		})
		.catch((err) => console.error('No response'));
	}
	render() {
		const {FullMessage} = this.state;
		let CC;
		let BCC;
		if (FullMessage.cc) {
			CC = FullMessage.cc.map((item, i) => <div className="item_cc" key={i}>{item}</div>)
		}
		if (FullMessage.bcc) {
			BCC = FullMessage.bcc.map((item, i) => <div className="item_cc" key={i}>{item}</div>)
		}
		return (
			<div className='full_message'>
				<div>{FullMessage.body}</div>
				{CC}
				{BCC}
			</div>
		)
	}
}

export default FullMessage;