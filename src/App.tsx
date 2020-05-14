import * as React from 'react';
import {Component} from 'react';
import './App.css';
import {MovieFormComponent} from "./components/MovieFormComponent";
import {Provider} from "mobx-react";
import {MoviesStore} from "./stores/MoviesStore";
import {MoviesListComponent} from "./components/MoviesListComponent";
import {SearchComponent} from "./components/SearchComponent";

class App extends Component {
    render() {
        return (
            <div>
                <Provider moviesStore={new MoviesStore()}>
                    <MovieFormComponent/>
                    <SearchComponent/>
                    <MoviesListComponent/>
                </Provider>
            </div>
        );
    }
}

export default App;
