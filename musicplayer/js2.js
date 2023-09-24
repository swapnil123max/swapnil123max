let songname = Array.from(document.getElementsByClassName('songname'))
let musicname = Array.from(document.getElementsByClassName('musicname'))
let artist_name = Array.from(document.getElementsByClassName('artist_name'))
let artistname = Array.from(document.getElementsByClassName('artist-name'))
let img1 = Array.from(document.getElementsByClassName('img1'))
let img = Array.from(document.getElementsByClassName('img'))
let music = Array.from(document.getElementsByClassName('music'))
let song_item = Array.from(document.getElementsByClassName('song-item'));
let song_index = 0
let music_player1 = document.getElementsByClassName('main-songname')[0];
let music_player2 = document.getElementsByClassName('main-artist-name')[0];
let main_img = Array.from(document.getElementsByClassName('main-img'))[0];
let Audioelement = new Audio("song/Lofi.mp3");
let myProgressBar = document.getElementById('myProgressBar');
let previous = document.getElementById('previous');
let forward = document.getElementById('forward');
let start = document.getElementById('start')
let end=document.getElementById('end')
console.log(start.innerHTML)
let count = 0;
let song = [



    { songName: "Mooserdilla", artist: "Sidhu Moose Wala", filepath: "song/Sidhu Moose Wala - Moosedrilla(PagalWorld.com.se).mp3", coverpath: "/images.jfif" },
    { songName: "Kahani", artist: "Sonu Nigam", filepath: "song/Kahani - Sonu Version.mp3", coverpath: "explore/download (12).jfif" },
    { songName: "Mehabooba", artist: "Ananya Bhat", filepath: "song/Mehabooba Hindi - KGF 2.mp3", coverpath: "explore/download.jfif" },
    { songName: "Galiyaan Returns", artist: "Ankit Tiwari", filepath: "song/Galliyan Returns - Ek Villain Returns.mp3", coverpath: "explore/download (1).jfif" },
    { songName: "Kesariya", artist: "Arijit Singh", filepath: "song/kesariya.mp3", coverpath: "/download.jfif" },
    { songName: "Naah Lofi ", artist: "Jass Manak", filepath: "song/Naah Lofi.mp3", coverpath: "/download (1).jfif" },
    { songName: "Dynamite", artist: "BTS", filepath: "song/Bts.mp3", coverpath: "/download (2).jfif" },
    { songName: "Hilarious", artist: "Charlie Puth", filepath: "song/Hilarious.mp3", coverpath: "/ab67616d00001e02897f73256b9128a9d70eaf66.jfif" },
]

for (let i = 0; i < song.length; i++) {
    songname[i].innerHTML = song[i].songName
    artist_name[i].innerHTML = song[i].artist
    img[i].src = song[i].coverpath


}

music.forEach((element) => {
    element.addEventListener('click', (e) => {
        song_index = parseInt(Array.from(e.target.id));
        if (song_index >= 4) {
            musicname[0].innerHTML = song[song_index].songName;
            artistname[0].innerHTML = song[song_index].artist;
            img1[0].src = song[song_index].coverpath;
            main_img.src = song[song_index].coverpath
            music_player1.innerHTML = song[song_index].songName
            music_player2.innerHTML = song[song_index].artist
            Audioelement.src = song[song_index].filepath
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause')
          
            
            Audioelement.play()
        }

        else {
            musicname[song_index].innerHTML = song[song_index].songName;
            artistname[song_index].innerHTML = song[song_index].artist;
            img1[song_index].src = song[song_index].coverpath;
            main_img.src = song[song_index].coverpath
            music_player1.innerHTML = song[song_index].songName
            music_player2.innerHTML = song[song_index].artist
            Audioelement.src = song[song_index].filepath
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause')
            Audioelement.play()
        }

        //     console.log(song_index);
    })
});
Audioelement.addEventListener('timeupdate', () => {
    progress = parseInt(Audioelement.currentTime / Audioelement.duration * 100);
    myProgressBar.value = progress;
    
    let min = Math.floor(Audioelement.currentTime / 60);

    let sec = Math.floor(Audioelement.currentTime - min * 60)
    if (sec < 10) {
        sec = "0" + sec
    }
    start.innerHTML=min+":"+sec
    
    if (myProgressBar.value == 100 && song_index < 4) {
        song_index++;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Audioelement.play()
    }

    else if (myProgressBar.value == 100 && song_index >= 4) {
        song_index = 0;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

        Audioelement.play()
    }
    setTimeout(() => {
        let Amin = Math.floor(Audioelement.duration / 60);

        let Asec = Math.floor(Audioelement.duration - Amin * 60)
        end.innerHTML=Amin+":"+Asec
    }, 100);
  
  
   
})
myProgressBar.addEventListener('change', () => {
    Audioelement.currentTime = myProgressBar.value * Audioelement.duration / 100;
    if (count == 1) {
        song_index = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("hello")
    }

})
forward.addEventListener("click", () => {
    if (song_index >= 0 && song_index < 4) {
        song_index++;
        Audioelement.currentTime = 0
        myProgressBar.value = 0
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
       
        Audioelement.play()
    }
    else if (song_index >= 4) {
        song_index = 0;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

        Audioelement.play()
    }
})
previous.addEventListener('click', () => {
    if (song_index >= 0 && song_index <= 4) {
        song_index--;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Audioelement.play()
    }
    else if (song_index < 0) {
        song_index = 4;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Audioelement.play()
    }
})



masterplay.addEventListener('click', () => {
    if (Audioelement.paused) {

        Audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    }

    else {

        Audioelement.pause();


        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');

    }
})

