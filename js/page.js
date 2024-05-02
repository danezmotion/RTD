const page_media = document.getElementById('page-media');
const postLimit = media.length;
const postIncrease = 10;

const pageCount = Math.ceil(postLimit / postIncrease);
let currentPage = 1;



// Create Container
let gridContainer = document.createElement('div');
gridContainer.id = ('page-gallery');
gridContainer.classList.add('page-grid');

// sort posts
let posts = [];
let imageIndex = 0;

for(let i = 1; i < media.length; i++) {
    let item = {
        id: i,
        title: media[imageIndex].title,
        studio: "- " + media[imageIndex].studio + " -",
        link: media[imageIndex].link,
        src: media[imageIndex].src,
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > media.length - 1) imageIndex = 0;
}

const createCard = (index) => {
    
    let card = document.createElement('div');
    card.id = 'gallery-item';
    card.classList = 'page-card';

    let bg = document.createElement('div');
    bg.id = 'gallery-image';
    bg.classList = 'page-card-img';
    
    let image = document.createElement('img');
    image.loading = "lazy";
    image.role = "img";
    image.alt = "";
    image.src = posts[index].src;

    card.append(image);
    gridContainer.append(card)
};

page_media.append(gridContainer)



const addPost = (pageIndex) => {
    currentPage = pageIndex;

    const startRange = (pageIndex - 1) * postIncrease;
    const endRange = currentPage == pageCount ? postLimit : pageIndex * postIncrease;

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
