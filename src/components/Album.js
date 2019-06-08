import React, { Component } from 'react';

class Album extends Component {

    state = {
        albumTitle: '',
        artist: '',
        releaseYear: '',
        genre: '',
        digitized: false,
        linerNotes: '',
        thumbnail: '',
        detailImage: '',
        track: '',
        tracks: [],
        musician: '',
        musicians: []
    };

    render() {
        return (
            <div>
                <h1>Album Here</h1>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="albumTitle ">Album Title</label>
                                <input type="text" className="form-control" id="albumTitle"
                                       placeholder="Album Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="artist ">Artist</label>
                                <input type="text" className="form-control" id="artist"
                                       placeholder="Artist"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="releaseYear ">Release Year</label>
                                <input type="text" className="form-control" id="releaseYear"
                                       placeholder="Release Year (YYYY)"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="artist ">Artist</label>
                                <input type="text" className="form-control" id="artist"
                                       placeholder="Artist"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="genre ">Genre</label>
                                <input type="text" className="form-control" id="genre"
                                       placeholder="Genre"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="linerNotes ">Liner Notes</label>
                                <textarea className="form-control" id="linerNotes"
                                       placeholder="Liner Notes"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default Album;

