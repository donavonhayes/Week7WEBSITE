class Playlist {
    constructor(name){
        this.name = name;
        this.rooms = [];
    }
}

class Song {
    constructor(artist, album) {
        this.artist=artist;
        this.album=album;
    }
}

class Music {
    static url = 'https://apilist.fun/api/spotify-web';

    static getAllPlaylist () {
        return $.get(this.url);
    }
    
    static getPlaylist(id) {
        return $.get(this.url + '/${id}')
    }

    static createPlaylist(playlist){
        return $.post(this.url, playlist);
    }

    static updatePlaylist(playlist) {
        return $.ajax({
            url:this.url + '/${house._id}',
            dataType: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json',
            type: 'PUT'
    });


    static deletePlaylist(id) {
        return $.ajax({
            url: this.url + '/${id}',
            type: "DELETE"
        });
    }
}