import React, {Component} from 'react';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const urlApi = 'https://fmail.flyaps.com/api/v1/mailbox/messages/';

class App extends Component {
	state = {
		messages: []
	};
	componentDidMount() {
		fetch(urlApi)
		.then(response => response.json())
		.then(data => {
            data = data.map(item => ({
                ...item,
                received_at: new Date(item.received_at)
            }));
            data.sort((a,b) => b.received_at - a.received_at);
			this.setState({
				messages: data
			})
		})
		.catch((err) => console.error(err))
	}
	toggleMessage = (id) => {
        const {messages} = this.state;
        const message = messages.find(message => message.id === id);
        if (message) {
            if (!message.FullMessage) {
                this.extendMessage(message).then(()=>{this._toggleMessage(message)});
            } else {
                this._toggleMessage(message);
            }
        }
    };
	_toggleMessage(message) {
	    const {messages} = this.state;
        message.isOpen = !message.isOpen;
        const index = messages.indexOf(message);
        const msgs = messages.slice(0,index).concat(message, ...messages.slice(index+1));
        this.setState({messages: msgs});
    };
	extendMessage(message) {
        const {messages} = this.state;
        const urlApi = `https://fmail.flyaps.com/api/v1/mailbox/messages/${message.id}/`;
        const index = messages.indexOf(message);

        return fetch(urlApi)
            .then(response => response.json())
            .then(FullMessage => {
                message.FullMessage = FullMessage;
                const msgs = messages.slice(0,index).concat(message, ...messages.slice(index+1));
                this.setState({messages: msgs});
            })
            .catch((err) => console.error(err));
	};
	render() {
		const {messages} = this.state;
		const messageElements = messages.map(message => <li className="item" key={message.id}><Message toggleMessage={this.toggleMessage} message={message}/></li>);
		return (
			<div className='container'>
				<h1>flyaps messages</h1>
				<ul className='wrapper_message'>
					{messageElements}
				</ul>
			</div>
		)
	}
}

export default App;