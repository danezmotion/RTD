// gallery Attribs
const container = document.getElementById('container');
const loader = document.getElementById('loader');
const postLimit = media.length;
const postIncrease = 30;

const pageCount = Math.ceil(postLimit / postIncrease);
let currentPage = 1;



// Create Container
let gridContainer = document.createElement('div');
gridContainer.id = ('gallery');
gridContainer.classList.add('grid');

// sort posts
let posts = [];
let imageIndex = 0;

let rev_media = media.map((e,i,a) => a[(a.length -1) -i]);

let sort = rev_media

for(let i = 1; i < media.length; i++) {
    let item = {
        id: i,
        title: sort[imageIndex].title,
        studio: ">>> " + sort[imageIndex].studio,
        link: sort[imageIndex].link,
        src: sort[imageIndex].src,
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > media.length - 1) imageIndex = 0;
}

const createCard = (index) => {
    
    let rand = Math.floor(Math.random() * postLimit);
    let sort = rand
    
    let card = document.createElement('a');
    card.id = 'gallery-item';
    card.classList = 'card';
    card.href = posts[sort].link;

    let bg = document.createElement('div');
    bg.id = 'gallery-image';
    bg.classList = 'card-img';
    
    let image = document.createElement('img');
    image.loading = "lazy";
    image.role = "img";
    image.srcset = "";
    image.alt = "";
    image.src = posts[sort].src;

    let cover = document.createElement('div');
    cover.id = 'card-cover';
    cover.classList.add('overlay');
    
    let title = document.createElement('h2');
    title.classList.add('card-title');
    title.classList.add('text-secondary');
    title.innerText = posts[sort].title;
    
    let subTitle = document.createElement('h3');
    subTitle.classList.add('card-subTitle');
    subTitle.classList.add('text-secondary-dark-3');
    subTitle.innerText = posts[sort].studio;

    bg.append(image);
    cover.append(title, subTitle);
    card.append(bg, cover);
    gridContainer.appendChild(card);
};

container.appendChild(gridContainer);


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


// CLICK EVENT

const galleryItem = document.getElementById('gallery-item');

container.addEventListener("click", event => {
});

