import React from 'react'

export default class Encoder extends React.Component {
   state = {
      phrase: "",
      message: "",
      encodedMessage: ""
   }

   phraseEntry = e => {

   }

   messageEntry = e => {

   }

   render() {
      return(
         <div>
            <label for="phrase">Phrase</label><br />
            <input name="phrase" type="text" onChange={this.phraseEntry.bind(this)} />
            <br /><br />
            <label for="message">Message</label><br />
            <input name="message" type="text" onChange={this.messageEntry.bind(this)} />
            <br /><br />
            <label for="output">Output</label><br />
            <p>{this.state.encodedMessage}</p>
         </div>
      )
   }
}
