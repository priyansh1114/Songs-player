const play =document.getElementById('Play');
const img= document.querySelector("img");
const music=document.querySelector("audio");
const title =document.getElementById('title');
const artist =document.getElementById('artist');
const prev =document.getElementById('prev');
const Next=document.getElementById('Next');
const songs = [
    {
    name:"jingle",
    title:"jingle",
    artist:"Barry Manilow",
},
{
    name:"Reggae_Horn",
    title:"Reggae",
    artist:"David Madden",
},
{
    name:"siren-long",
    title:"siren",
    artist:"loyalist",
},
];

isPlaying = false;

const playMusic = () => {
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};
//for pause
const pauseMusic = () => {
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
};
play.addEventListener('click',() => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});
//changing the data
const loadsongs = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src ="image/" + songs.name + ".jpeg"

};
songIndex = 0;

const Nextsong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadsongs(songs[songIndex]);
    playMusic();

}
const prevsong = () =>{
    songIndex = songIndex-1;
    loadsongs(songs[songIndex]);
    playMusic();

}

Next.addEventListener('click', Nextsong);
prev.addEventListener('click', prevsong);
