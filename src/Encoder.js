import React from 'react'

export default class Encoder extends React.Component {
   state = {
      phrase: "",
      message: "",
      encoder: [],
      encodedMessage: ""
   }

   phraseEntry = e => {
      this.setState({
         ...this.state,
         phrase: e.target.value
      })
   }

   messageEntry = e => {
      this.setState({
         ...this.state,
         message: e.target.value
      })
   }

   performEncode = () => {
      let encoderArray = []
      let phrase = this.state.phrase.toLowerCase().split("")
      phrase.forEach(letter => encoderArray.push(letter.charCodeAt(0)-96));
      this.setState({
         ...this.state,
         encoder: encoderArray
      })
      setTimeout(() => {
         let message = this.state.message.toLowerCase().split("")
         let phraseArray = []

         
         for (let i = 0; i < message.length; i++) {
            // console.log(message[i].charCodeAt(0))
            // console.log(parseInt(this.state.encoder[i % this.state.encoder.length]))
            phraseArray.push((parseInt(message[i].charCodeAt(0)) + parseInt(this.state.encoder[i % this.state.encoder.length]) - 97) % 26)
         }
         
         this.setState({
            ...this.state,
            encodedMessage: phraseArray.map(a => String.fromCharCode(a+97)).join("")
         })

         console.log(this.state.encodedMessage.length - this.state.message.length)

      }, 2);
   }

   render() {
      return(
         <div>
            <label for="phrase">Phrase</label><br />
            <textarea name="phrase" onChange={this.phraseEntry.bind(this)} value={this.state.phrase} />
            <br /><br />
            <label for="message">Message</label><br />
            <textarea name="message" onChange={this.messageEntry.bind(this)} />
            <br /><br />
            <button onClick={this.performEncode.bind(this)}>Encode!</button><br /><br />
            <label for="output">Output</label><br />
            <p>{this.state.encodedMessage}</p>
         </div>
      )
   }
}
