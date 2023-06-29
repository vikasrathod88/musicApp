console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Manjha  Full Video  MiddleClass Love ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ik Kahani Song  Gajendra Verma ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Phir Bhi Tumko Chaahunga Song 4k ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Haaniya Ve ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Apna Bana Le  Full Audio  Bhediya  Varun", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Humnava Mere Song  Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Rabba Janda ", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tu Jaane Na  Lyrical  Atif Aslam", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Durgamati Baras Baras  Bhumi Pednekar", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Ishq Tera Nushrat Bharucha", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Ed Sheeran  Shape of You ", filePath: "songs/4.mp3", coverPath: "covers/11.jpg"},
    {songName: "Zaalima.mp3", filePath: "songs/4.mp3", coverPath: "covers/12.jpg"},
    {songName: "Khushi Jab Bhi Teri Song Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "covers/13.jpg"},
    {songName: "Ok_Jaanu_Title_Track", filePath: "songs/2.mp3", coverPath: "covers/14.jpg"},
    {songName: "Palak Muchhal - Kaun Tujhe.mp3", filePath: "songs/2.mp3", coverPath: "covers/15.jpg"},
    {songName: "Paniyon_Sa_-_320Kbps_[DJMaza.Fun].mp3", filePath: "songs/2.mp3", coverPath: "covers/16.jpg"},
    {songName: "Payal Dev - Tum Hi Aana (From Marjaavaan).mp3", filePath: "songs/2.mp3", coverPath: "covers/17.jpg"},
    {songName: "Piya O Re Piya (TNLHG) Atif Aslam - 320Kbps.mp3", filePath: "songs/2.mp3", coverPath: "covers/18.jpg"},
    {songName: "Piya_More_-_DJMaza.Life_-_320Kbps.mp3", filePath: "songs/2.mp3", coverPath: "covers/19.jpg"},
    {songName: "Raat_Kamaal_Hai_-190Kbps_[DJMaza.Fun].mp3", filePath: "songs/2.mp3", coverPath: "covers/20.jpg"},
    {songName: "Rahat Fateh Ali Khan - Jag Ghoomeya.mp3", filePath: "songs/2.mp3", coverPath: "covers/21.jpg"},
    {songName: "RAHNA_HE_TERE_DIL_ME.mp3", filePath: "songs/2.mp3", coverPath: "covers/22.jpg"},
    {songName: "Shivam Pathak - Ek Dil Ek Jaan.mp3", filePath: "songs/2.mp3", coverPath: "covers/23.jpg"},
    {songName: "Swag_Se_Swagat_(Tiger_Zinda_Hai)_-190Kbps_[DJMaza.Info].mp3", filePath: "songs/2.mp3", coverPath: "covers/24.jpg"},
    {songName: "Tajdar_E_Haram_(Satyamev_Jayate)_Full_Audio(jiomix.in).mp3", filePath: "songs/2.mp3", coverPath: "covers/25.jpg"},
    {songName: "Tamma_Tamma_Again.mp3", filePath: "songs/2.mp3", coverPath: "covers/26.jpg"},
    {songName: "Tere_Bina_-_DJMaza.Life_-_192Kbps.mp3", filePath: "songs/2.mp3", coverPath: "covers/27.jpg"},
    {songName: "Tere_Liye-190Kbps_[DJMaza.MS].mp3", filePath: "songs/2.mp3", coverPath: "covers/28.jpg"},
    {songName: "Tere_Sang_Yaara_(Rustom)-(MirchiFun.com).mp3", filePath: "songs/2.mp3", coverPath: "covers/29.jpg"},
    {songName: "Thumka - Pagalpanti.mp3", filePath: "songs/2.mp3", coverPath: "covers/30.jpg"},
    {songName: "Tukur_Tukur_-_Celebration_Mix.mp3", filePath: "songs/2.mp3", coverPath: "covers/31.jpg"},
    {songName: "Yeh_Baby-(Mr-Jatt.com).mp3", filePath: "songs/2.mp3", coverPath: "covers/32.jpg"},
    {songName: "Jeena Jeena (Badlapur) Atif Aslam - 320Kbps.mp3", filePath: "songs/2.mp3", coverPath: "covers/33.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})