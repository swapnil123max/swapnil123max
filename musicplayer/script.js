
let songindex = 0;
let Audioelement = new Audio("song/Lofi.mp3");

let myProgressBar = document.getElementById('myProgressBar');
let progress = 0;
let masterplay = document.getElementById('masterplay')
let song_item = Array.from(document.getElementsByClassName('song-item'));
let song_index;
let music_player1 = document.getElementsByClassName('main-songname')[0];
let music_player2 = document.getElementsByClassName('main-artist-name')[0];
let img = Array.from(document.getElementsByClassName('img'));
let main_img = Array.from(document.getElementsByClassName('main-img'))[0];
let previous = document.getElementById('previous');
let forward = document.getElementById('forward');
let songname = Array.from(document.getElementsByClassName('songname'))
let artist_name = Array.from(document.getElementsByClassName('artist-name'))
let repeat = document.getElementsByClassName('fa-repeat')[0];
let shuffle = document.getElementById("shuffle")
let end=document.getElementById('end')
let count=0;
let song = [


    { songName: "Kesariya", artist: "Arijit Singh", filepath: "song/kesariya.mp3", coverpath: "/download.jfif" },
    { songName: "Naah Lofi ", artist: "Jass Manak", filepath: "song/Naah Lofi.mp3", coverpath: "/download (1).jfif" },
    { songName: "Dynamite", artist: "BTS", filepath: "song/Bts.mp3", coverpath: "/download (2).jfif" },
    { songName: "Hilarious", artist: "Charlie Puth", filepath: "song/Hilarious.mp3", coverpath: "/ab67616d00001e02897f73256b9128a9d70eaf66.jfif" },
]




song.forEach((element, i) => {
    songname[i].innerHTML = song[i].songName;
    artist_name[i].innerHTML = song[i].artist;
    img[i].src = song[i].coverpath;
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


song_item.forEach((element) => {
    element.addEventListener('click', (e) => {
console.log(e.target);
masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');
        song_index = parseInt(Array.from(e.target.getElementsByClassName('songname'))[0].id);
        Array.from(e.target.getElementsByClassName('songname'))[0].innerHTML = song[song_index].songName;
        Array.from(e.target.getElementsByClassName('artist-name'))[0].innerHTML = song[song_index].artist;
       
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Audioelement.play()

    })
});

forward.addEventListener("click", () => {
    if (song_index >= 0 && song_index < 4) {
        song_index++;
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



// use Math.random for music shuffle

repeat.addEventListener('click', () => {
    song_index--;
})

// shuffle.addEventListener('click', () => {
//     count = 1;

//     Audioelement.currentTime = 0;





// })

document.addEventListener('keypress',()=>{
    if (event.which==32 && count==0) {
          count=1;
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        Audioelement.pause();
      
    }

    else if (event.which==32 && count==1) {
        count=0;
        Audioelement.play();
        
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
console.log(event.which)


})

document.addEventListener("keydown",()=>{
    if (event.which==39 ) {
        if (song_index >= 4) {
            song_index = 0;
            music_player1.innerHTML = song[song_index].songName
            music_player2.innerHTML = song[song_index].artist
            Audioelement.src = song[song_index].filepath
            main_img.src = song[song_index].coverpath;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
    
            Audioelement.play()
        }
        else{
            song_index++;
            music_player1.innerHTML = song[song_index].songName
            music_player2.innerHTML = song[song_index].artist
            Audioelement.src = song[song_index].filepath
            main_img.src = song[song_index].coverpath;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            Audioelement.play()
            Audioelement.currentTime=0
        }
   
  }

  else if (event.which==37) {
    if (song_index < 0) {
        song_index = 4;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Audioelement.play()
    }
    else{
        song_index--;
        music_player1.innerHTML = song[song_index].songName
        music_player2.innerHTML = song[song_index].artist
        Audioelement.src = song[song_index].filepath
        main_img.src = song[song_index].coverpath;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        Audioelement.play()
        Audioelement.currentTime=0;
    }
 
  }
})
