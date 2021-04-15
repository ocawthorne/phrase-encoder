import React from 'react'

export default class Encoder extends React.Component {
   state = {
      phrase: "",
      message: "",
      encoder: [],
      encodedMessage: ""
   }

   library = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 10,
      k: 11,
      l: 12,
      m: 13,
      n: 14,
      o: 15,
      p: 16,
      q: 17,
      r: 18,
      s: 19,
      t: 20,
      u: 21,
      v: 22,
      w: 23,
      x: 24,
      y: 25,
      z: 26
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
      phrase.forEach(letter => {
         encoderArray.push(this.library[letter])
      });
      this.setState({
         ...this.state,
         encoder: encoderArray
      })
      setTimeout(() => {
         console.log(this.state)
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
