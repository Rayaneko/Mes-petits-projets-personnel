import React from 'react';
import './Track.css';

// Class Track qui permet de crée le contenu de Results avec le nom de la musique, l'artiste et l'album
class Track extends React.Component {

    renderAction() {
        if (this.props.isRemoval) {
            return <button className ="Track-action">-</button>
        }  else {
            return <button classname ="Track-action">+</button>
        }
        
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>track artist | track album </p>
                </div>
                {this.renderAction()}
            </div>
        )
    }

}

export default Track;
