import React from "react";
import './SearchBar.css';
//Class Searchbar qui permet de crée la barre de recherche et le boutton pour chercher precisement une musique un artiste..

class SearchBar extends React.Component {
    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                
                <button className="SearchButton"> SEARCH </button>
               
                </div>
        )
    }

}

export default SearchBar;