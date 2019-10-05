import React, {
  Component
} from 'react';
import "./styles.css";
const axios = require('axios');

class App extends Component {
  state = {
    Msg: '',
    env:''
  }
  sendInput = async (param) => {
    const response = await axios.post('http://localhost:5000/msg', {
      "msg": param.Msg
    });
    console.log("Response");
    this.state.env= "Publicação enviada!"
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
                    <p className='env'>{this.state.env}</p>
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