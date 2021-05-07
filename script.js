const albums = [{
        name: 'my future',
        artist: 'Billie Eilish',
        cover: "https://i.pinimg.com/originals/f5/9b/48/f59b4833535e0aa1fa659dd4a9f11e35.jpg"
    },
    {
        name: 'Positions',
        artist: 'Ariana Grande',
        cover: "https://thebirdfeed.org/wp-content/uploads/2020/11/50534605761_198f98c4d8_c.jpg"
    },
    {
        name: 'Therapy',
        artist: 'All Time Low',
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Alltimelownothingpersonal.jpg/220px-Alltimelownothingpersonal.jpg"
    },
    {
        name: 'Physical',
        artist: 'Dua Lipa',
        cover: "https://upload.wikimedia.org/wikipedia/en/f/f5/Dua_Lipa_-_Future_Nostalgia_%28Official_Album_Cover%29.png"
    },
    {
        name: 'The Black Parade',
        artist: 'My Chemical Romance',
        cover: "https://images-na.ssl-images-amazon.com/images/I/81fNQtNDw8L._AC_SL1500_.jpg"
    },
    {
        name: 'R U Mine?',
        artist: 'Artic Monkeys',
        cover: "https://i.pinimg.com/originals/47/8f/db/478fdbc2452e5e90267bca9ae621ad0d.jpg"
    },
    {
        name: 'The Black Parade',
        artist: 'My Chemical Romance',
        cover: "https://images-na.ssl-images-amazon.com/images/I/81fNQtNDw8L._AC_SL1500_.jpg"
    },
    {
        name: 'Girl On Fire',
        artist: 'Alicia Keys',
        cover: "https://upload.wikimedia.org/wikipedia/en/5/57/AK_Girl_on_Fire.jpg"
    },
    {
        name: 'A Moment Apart',
        artist: 'Odesza',
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1a/A_Moment_Alone_Cover.jpg"
    },
    {
        name: 'All The Small Things',
        artist: 'Blink-182',
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a6/Blink-182_-_Enema_of_the_State_cover.jpg"
    }
]


const AlbumComponent = function (album) {
    return `<div class="col-sm">
                    <div class="song-card">
                        <div class="media">
                            <img src=${album.cover}>
                            <ion-icon name="play-sharp"></ion-icon>
                        </div>
                        <div class="card-body">
                            <p>${album.name}</p>
                            <p>${album.artist}</p>
                        </div>
                    </div>
                </div>`;
};



window.onload = function () {
    const row = document.querySelector(".row");
    console.log(row);

    for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        row.innerHTML += AlbumComponent(album);
    }

};