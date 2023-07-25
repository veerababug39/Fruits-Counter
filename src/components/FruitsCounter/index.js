// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    const {mango} = this.state
    this.setState({mango: mango + 1})
  }

  banana = () => {
    const {banana} = this.state
    this.setState({banana: banana + 1})
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="counter">{mango}</span> mangoes
            <span className="counter">{banana}</span> bananas
          </h1>
          <div className="img-container">
            <div className="image-container">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <br />
              <button className="btn" type="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <br />
              <button className="btn" type="button" onClick={this.banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
