class Playlist {
    constructor(name){
        this.name = name;
        this.rooms = [];
    }
}

addSong(artist, album) {
    this.songs.push(new Song(artist, album));
    }
}


class Song {
    constructor(artist, album) {
        this.artist=artist;
        this.album=album;
    }
}

class Music {
    external url = 'https://apilist.fun/api/spotify-web';
    external url = https: "//open.spotify.com/playlist/37i9dQZF1E36655BO56xtJ"

    external getAllPlaylist () {
        return $.get(this.url);
    }
    
    external getPlaylist(id) {
        return $.get(this.url + '/${id}')
    }

    externalncreatePlaylist(playlist){
        return $.post(this.url, playlist);
    }

    external updatePlaylist(playlist) {
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

classDOMManager {
    static playlist;

    static getAllPlaylist() {
        PlaylistService.getALLPlaylist().then(Playlists => this.render(Playlists));
    }

    static render(playlist) {
        this.playlists= playlists;
        $('#app').empty();
        for (let playlist of playlists){
            $('#app').prepend(
                '<div id="${playlist._id}" class="card">
                <div class= "card-header">
                    <h2>${playlist.name</h2>
                    </div>
                    </div>
            );
        }
    }
}

 DOMManager.getAllPlaylists();

