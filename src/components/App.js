import React, {Component} from 'react';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const urlApi = 'https://fmail.flyaps.com/api/v1/mailbox/messages/';

class App extends Component {
	state = {
		messages: []
	}
	componentDidMount() {
		fetch(urlApi)
		.then(response => response.json())
		.then(data => {
            data = data.map(item => ({
                ...item,
                received_at: new Date(item.received_at)
            }))

            data.sort((a,b) => b.received_at - a.received_at)
			this.setState({
				messages: data
			})
		})
		.catch((err) => console.error('No response'))
	}
	render() {
		const {messages} = this.state;
		const messageElements = messages.map(message => <li className="item" key={message.id}><Message message={message}/></li>)
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