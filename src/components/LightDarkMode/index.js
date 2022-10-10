// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: false}

  onDarkMode = () => {
    this.setState(preValue => ({
      isDark: !preValue.isDark,
    }))
  }

  render() {
    const {isDark} = this.state
    const text = isDark ? 'Dark Mode' : 'Light Mode'
    const para = isDark ? 'dark' : 'white'
    const classMode = isDark ? 'light-mode' : 'dark-mode'

    return (
      <div className="bg-container">
        <div className={`${classMode}`}>
          <h1 className={`${para}`}>Click To Change Mode</h1>
          <button className="btn" type="button" onClick={this.onDarkMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
