import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';

class FullMessage extends Component {
	render() {
		const {FullMessage} = this.props;
		let CC;
		let BCC;
		let importantIcon;
		let readableIcon;
        if (FullMessage.important) {
            importantIcon = <div className="important"><MaterialIcon icon="label_important" /></div>
        }
        if (FullMessage.is_read) {
            readableIcon = <div className="read"><MaterialIcon icon="markunread" /></div>
        }
		if (FullMessage.cc) {
			CC = FullMessage.cc.map((item, i) => <div className="item_cc" key={i}>{item}</div>)
		}
		if (FullMessage.bcc) {
			BCC = FullMessage.bcc.map((item, i) => <div className="item_cc" key={i}>{item}</div>)
		}
		return (
			<div className='full_message'>
				<div>{FullMessage.body}</div>
                {importantIcon}
                {readableIcon}
				{CC}
				{BCC}
			</div>
		)
	}
}

export default FullMessage;