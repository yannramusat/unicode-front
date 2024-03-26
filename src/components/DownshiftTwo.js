import React, { Component } from 'react'
import Downshift from 'downshift';

export default class DownshiftTwo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.fetchMovies = this.fetchMovies.bind(this)
    this.inputOnChange = this.inputOnChange.bind(this)
  }

  inputOnChange(event) {
    if (!event.target.value) {
      return
    }
    this.fetchMovies(event.target.value)
  }

  downshiftOnChange(selectedMovie) {
    alert(`your favourite movie is ${selectedMovie.name}`)
  }

  async fetchMovies(movie) {
    const moviesURL = `http://localhost:3000/ingredients?pattern=${movie}`;
    const response = await fetch(moviesURL)
    const data = await response.json();
    this.setState({ movies: data })
  }

  render() {
    return (
      <Downshift onChange={this.downshiftOnChange} itemToString={item => (item ? item.name : '')}>
        {({ selectedItem, getInputProps, getItemProps, highlightedIndex, isOpen, inputValue, getLabelProps }) => (
          <div style={{textAlign:'center'}}>
            <label style={{ marginTop: '1rem', display: 'block' }} {...getLabelProps()}>Choose your favourite movie</label> <br />
            <input {...getInputProps({
              placeholder: "Search movies",
              onChange: this.inputOnChange
            })} />
            {isOpen ? (
              <div className="downshift-dropdown">
                {
                  this.state.movies
                    .filter(item => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase()))
                    .slice(0, 10)
                    .map((item, index) => (
                      <div
                        className="dropdown-item"
                        {...getItemProps({ key: index, index, item })}
                        style={{
                          backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        }}>
                        {item.name}
                      </div>
                    ))
                }
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    )
  }
}