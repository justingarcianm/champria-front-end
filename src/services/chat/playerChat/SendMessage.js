import React, { Component } from 'react';

class SendMessage extends Component {
    render() {
        return (
            <div>
                <input 
                placeholder = "send message"
                name="message"
                className="form-control"
                />
            </div>
        );
    }
}

export default SendMessage;