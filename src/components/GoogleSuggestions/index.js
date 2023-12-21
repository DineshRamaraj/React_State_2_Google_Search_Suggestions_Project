// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class MyComponent extends Component {
  state = {
    searchInput: '',
  }

  onSearchListItems = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onArrowButton = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    // console.log(searchResults)

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="search-engine-container">
          <div className="search-engine-icon">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onSearchListItems}
              value={searchInput}
            />
          </div>

          <ul className="list-container">
            {searchResults.map(eachItem => (
              <SuggestionItem
                eachItem={eachItem}
                key={eachItem.id}
                onArrowButton={this.onArrowButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyComponent
