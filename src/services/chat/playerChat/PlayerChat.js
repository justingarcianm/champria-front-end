import React, { Component } from 'react';
import Contacts from './Contacts'
import Messages from './Messages'
import SendMessage from './SendMessage'

class PlayerChat extends Component {
    render() {
        return (
            <div className="container">
               <h3>Player Chat</h3>
               <div className="row">
               <div className="col-2">
                   <Contacts/>
               </div>
               <div className="col-10">
                   <Messages/>
               </div>
               </div>
               <div className="row">
            <div className="col-10">
                <SendMessage/>
            </div>
               </div>
            </div>
        );
    }
}

export default PlayerChat;