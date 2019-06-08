import React, { Component } from 'react';
import axios from 'axios';

import { AlbumList } from 'Album';

export default class Albums extends Component {

    state = {
        albums: []
    };

    componentDidMount() {
        axios.get(`https://my.api.mockaroo.com/album.json?key=0d16dbe0`)
            .then(res => {
                console.log(res);
                this.setState({albums: res.data});
            });
    }

    render() {
        return (
            <AlbumList data={this.state.albums} />
        )
    }
}