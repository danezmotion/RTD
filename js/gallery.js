
// ATTRIBS
const container = document.getElementById('container');

let cardLimit = 0;
for( let i = 1; i < media.length; i++ ) {
    cardLimit++;
    if(cardLimit > media.length - 1) cardLimit = 0;
}

const postIncrease = Math.ceil(cardLimit / 3);
const pageCount = Math.ceil(cardLimit / postIncrease);
let currentPage = 1;


// CREATE CONTAINER
let gridContainer = document.createElement('div');
gridContainer.id = ('gallery');
gridContainer.classList.add('grid');


// SHUFFLE MEDIA
function shuffle(array) {
    let index = array.length;
    while (index != 0) {
        let rand = Math.ceil(Math.random() * cardLimit);
        index--;
        [array[index], array[rand]] = [
            array[rand], array[index]];
    }
}
shuffle(media);

const createCard = (index) => {
    
    let card = document.createElement('a');
    card.id = 'gallery-item';
    card.classList = 'card';
    card.href = media[index].link;

    let bg = document.createElement('div');
    bg.id = 'gallery-image';
    bg.classList = 'card-img';
    
    let image = document.createElement('img');
    image.loading = "lazy";
    image.role = "img";
    image.alt = "";
    image.src = media[index].src;
    //image.srcset = media[index].srcset;

    let cover = document.createElement('div');
    cover.id = 'card-cover';
    cover.classList.add('overlay');
    
    let title = document.createElement('h2');
    title.classList.add('card-title');
    title.classList.add('text-secondary');
    title.innerText = media[index].title;
    
    let subTitle = document.createElement('h3');
    subTitle.classList.add('card-subTitle');
    subTitle.classList.add('text-secondary-dark-3');
    subTitle.innerText = '>>> ' + media[index].studio;

    bg.append(image);
    cover.append(title, subTitle);
    card.append(bg, cover);
    gridContainer.appendChild(card);
};

container.appendChild(gridContainer);


const addPost = (pageIndex) => {
    currentPage = pageIndex;

    const startRange = (pageIndex - 1) * postIncrease;
    const endRange = currentPage == pageCount ? cardLimit : pageIndex * postIncrease;

    for( let i = startRange + 1; i <= endRange; i++ ){
        createCard(i);
    }
};

window.onload = function () {
    addPost(currentPage);
};


var throttleTimer;

const throttle = (callback, time) => {
    if( throttleTimer ) return;
    
    throttleTimer = true;

    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};

const removeInfiniteScroll = () => {
    loader.remove();
    window.removeEventListener('scroll', handleInfiniteScroll);
};

const handleInfiniteScroll = () => {
    throttle(() => {
        const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    
        if (endOfPage) {
            addPost(currentPage + 1);
        }

        if (currentPage === pageCount) {
            removeInfiniteScroll();
        }
    }, 1000);
};

window.addEventListener('scroll', handleInfiniteScroll);


// CLICK EVENT

const galleryItem = document.getElementById('gallery-item');

container.addEventListener("click", event => {
});

