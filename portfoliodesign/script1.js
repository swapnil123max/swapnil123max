let song = [{ song_name: "Dangerously", artist_name: "Charlie Puth", path_name: "songs/Charlie-Puth-Dangerously.mp3", cover_path: "" }
    , { song_name: "Attention", artist_name: "Charlie Puth", path_name: "songs/Attention---Charlie-Puth(pagolworld.nl).mp3", cover_path: "" }
    , { song_name: "We-Don't-Talk-Anymore", artist_name: "Charlie Puth", path_name: "songs/We-Don't-Talk-Anymore---Charlie-Puth-(feat.-Selena-Gomez)-(musicdownload.cc).mp3", cover_path: "" }]
let on = document.querySelector(".on");
let img = ["img/1.JPG", "img/2.JPG", "img/3.JPG", "img/4.JPG", "img/5.JPG", "img/6.JPG"]

let audio = new Audio("songs/Charlie-Puth-Dangerously.mp3")
let song_name = document.querySelector(".song-name");
let artist_name = document.querySelector(".artist-name");
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let my_progerss_bar = document.querySelector(".my-progress-bar");

let progress = 0;
let song_index = 0;
let time = document.querySelector(".time");
let wheel = document.getElementsByClassName("wheel")[0];
let ch1 = document.querySelector(".ch-1")
let ch2 = document.querySelector(".ch-2")
let big1 = document.querySelector(".big-1")
let small1 = document.querySelector(".small-1")
let i = 0;
let count = 0;
// console.log(wheel)
// console.log(song_name);
// console.log(artist_name);
audio.addEventListener("timeupdate", () => {
    progress = parseInt(audio.currentTime / audio.duration * 100)

    my_progerss_bar.value = progress
    let min = parseInt(audio.currentTime / 60)
    let sec = parseInt(((audio.currentTime / 60) - min) * 60)
    if (sec < 10) {
        sec = "0" + sec
    }
    time.innerHTML = "-" + min + ":" + sec

})

my_progerss_bar.addEventListener("change", () => {
    audio.currentTime = (my_progerss_bar.value * audio.duration) / 100

})
on.addEventListener("click", () => {

    if (audio.paused) {
        on.classList.remove("fa-circle-play")
        on.classList.add("fa-circle-pause")
        wheel.style.animation = "rotate infinite 2s linear"


        audio.play();

    }

    else {
        on.classList.remove("fa-circle-pause")
        on.classList.add("fa-circle-play")

        wheel.style.animation = "none"
        audio.pause();

    }

})


front.addEventListener("click", () => {

    song_index++;
    if (song_index == 3) {
        song_index = 0;
    }
    song_name.innerHTML = song[song_index].song_name
    artist_name.innerHTML = song[song_index].artist_name
    audio.src = (song[song_index].path_name)

    on.classList.remove("fa-circle-play")
    on.classList.add("fa-circle-pause")
    wheel.style.animation = "rotate infinite 2s linear"
    audio.play();

})


back.addEventListener("click", () => {

    song_index--;
    if (song_index < 0) {
        song_index = 2
    }
    song_name.innerHTML = song[song_index].song_name
    artist_name.innerHTML = song[song_index].artist_name
    audio.src = (song[song_index].path_name)
    on.classList.remove("fa-circle-play")
    on.classList.add("fa-circle-pause")
    wheel.style.animation = "rotate infinite 2s linear"

    audio.play();
})

setInterval(() => {
    if (i == img.length) {
        i = 0;
    }
    ch1.src = img[i]
    ch2.src = img[5 - i]
    i++;
    console.log(i)


}, 3000);


// setTimeout(() => {
//     big1.style.left = "40px"
//     small1.style.right = "40px"
// }, 6000);








