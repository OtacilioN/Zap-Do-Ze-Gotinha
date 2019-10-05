import React, {
  Component
} from 'react';
import "./styles.css";
const fs = require('fs');
const axios = require('axios');

class App extends Component {
state ={
    Msg: '',

}
sendInput = async (param) =>{
const response = await axios.post('http://localhost:5000/msg',{"msg":param.Msg});
console.log("enviado");

}
  render() {
    return (

      <div className='main'> 

        <form>
            <div className='forms'>
                <div className='info'>
                    <p>Publicação:</p>
                    <textarea value={this.state.Msg} onChange={evt => this.updateInputValueMsg(evt)} type="text" name="Msg"/>
                </div>  
                <div className='buttom'>
                    <button onClick  ={()=>this.sendInput(this.state)} type ="button">Send </button>
                </div>
            </div>
        </form>

      </div>
    );
  }
  updateInputValueMsg(evt) {
    this.setState({
      Msg: evt.target.value
    });
  }
}
export default App;