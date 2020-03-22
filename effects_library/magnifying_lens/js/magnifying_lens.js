window.onload = () => {
    main();
}

function main() {
    const photo_album = document.getElementById('photo_album');
    const clone_photo_1st = photo_album.children[0].cloneNode(true);

    photo_album.removeChild(photo_album.children[0]);
    for(let i=0; i<5 ;i++){
        photo_album.appendChild(clone_photo_1st.cloneNode(true));
        photo_album.children[i].setAttribute("src","../");
    }


}