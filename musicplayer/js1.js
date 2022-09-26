let album_name=Array.from(document.getElementsByClassName("album_name"))

let album_img=Array.from(document.getElementsByClassName("album_img"))

let singer=Array.from(document.getElementsByClassName("singer"))


let album = [
    { album_name: "Rollie Stone" , artist_name: "Billie Eilish", coverpath:"album/download (1).jfif "},
    { album_name: "Delhi Belly" , artist_name: "Irfhan Khan", coverpath:"album/download (2).jfif" },
    { album_name: "No Dream More" , artist_name: "BTS", coverpath: "album/download (3).jfif"},
    { album_name: "Filhaaal" , artist_name: "B Praak", coverpath: "album/download (4).jfif"},
    { album_name: "My World" , artist_name: "Justin Beber", coverpath: "album/download (5).jfif"},
    { album_name: "Yours Truly" , artist_name: "Arijt Singh", coverpath:"album/download (6).jfif" },
    { album_name: "Tribe Vibe" , artist_name: "Jubin Nautiyal", coverpath: "album/download (7).jfif"},
    { album_name: "Nine Track Mind" , artist_name: "Charlie Puth", coverpath: "album/download.jfif"},
    { album_name: "Best of B Praak" , artist_name: "B Praak", coverpath: "album/download (8).jfif"},
    { album_name: "Desi Kalakaar" , artist_name: "Honey Sigh", coverpath: "album/download (9).jfif"},
    { album_name: "One" , artist_name: "Charlie Puth", coverpath: "album/download (10).jfif"},
    { album_name: "Punjabi" , artist_name: "Raftaar", coverpath: "album/download (11).jfif"},

]


album.forEach((element,i) => {
    
    album_name[i].innerHTML=album[i].album_name;
    album_img[i].src=album[i].coverpath;
    singer[i].innerHTML=album[i].artist_name;

});