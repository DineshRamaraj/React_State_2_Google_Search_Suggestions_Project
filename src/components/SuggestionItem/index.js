// Write your code here
import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  onClickArrowButton = () => {
    const {eachItem, onArrowButton} = this.props
    const {suggestion} = eachItem
    onArrowButton(suggestion)
  }

  render() {
    const {eachItem} = this.props
    const {suggestion} = eachItem
    return (
      <li className="list-item">
        <p className="list-item-para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="list-item-icon"
          onClick={this.onClickArrowButton}
        />
      </li>
    )
  }
}

export default SuggestionItem
