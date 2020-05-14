import * as React from 'react'
import { Component } from 'react'
import './App.css'
import { MovieFormComponent } from './components/MovieFormComponent'
import { Provider } from 'mobx-react'
import { MoviesStore } from './stores/MoviesStore'
import { MoviesListComponent } from './components/MoviesListComponent'
import { SearchComponent } from './components/SearchComponent'

class App extends Component {
    render() {
        return (
            <Provider moviesStore={new MoviesStore()}>
                <MovieFormComponent />
                <SearchComponent />
                <MoviesListComponent />
            </Provider>
        )
    }
}

export default App
