// READ DATABASE.JSON

let media = []
async function loadmedia() {
    const res = await fetch('/js/database.json');
    const items = await res.json();
    items.forEach(item => {
        media.push(item)
    });
}

loadmedia()
console.log(media)

//let media = []
//fetch('/js/database.json')
//    .then(res => res.json())
//    .then(data => {
//        data.forEach(item => {
//            media.push(item)
//        });
//    });
//
//console.log(media)

//// gallery Attribs
//const container = document.getElementById('container');
//const cardLimit = media.lenght;
//const postIncrease = 18;
//
//
//
//const pageCount = Math.ceil(cardLimit / postIncrease);
//let currentPage = 1;


//// Create Container
//let gridContainer = document.createElement('div');
//gridContainer.id = ('gallery');
//gridContainer.classList.add('grid');
//
//
//const createCard = (index) => {
//    
//    let rand = Math.floor(Math.random() * cardLimit);
//    let sort = index;
//    
//    let card = document.createElement('a');
//    card.id = 'gallery-item';
//    card.classList = 'card';
//    card.href = media[index].link;
//
//    let bg = document.createElement('div');
//    bg.id = 'gallery-image';
//    bg.classList = 'card-img';
//    
//    let image = document.createElement('img');
//    image.loading = "lazy";
//    image.role = "img";
//    image.alt = "";
//    image.src = media[sort].src;
//    //image.srcset = media[sort].srcset;
//
//    let cover = document.createElement('div');
//    cover.id = 'card-cover';
//    cover.classList.add('overlay');
//    
//    let title = document.createElement('h2');
//    title.classList.add('card-title');
//    title.classList.add('text-secondary');
//    title.innerText = media[sort].title;
//    
//    let subTitle = document.createElement('h3');
//    subTitle.classList.add('card-subTitle');
//    subTitle.classList.add('text-secondary-dark-3');
//    subTitle.innerText = media[sort].studio;
//
//    bg.append(image);
//    cover.append(title, subTitle);
//    card.append(bg, cover);
//    gridContainer.appendChild(card);
//};
//
//container.appendChild(gridContainer);
//
//
//const addPost = (pageIndex) => {
//    currentPage = pageIndex;
//
//    const startRange = (pageIndex - 1) * postIncrease;
//    const endRange = currentPage == pageCount ? cardLimit : pageIndex * postIncrease;
//
//    for( let i = startRange + 1; i <= endRange; i++ ){
//        createCard(i);
//    }
//};
//
//window.onload = function () {
//    addPost(currentPage);
//};
//
//
//var throttleTimer;
//
//const throttle = (callback, time) => {
//    if( throttleTimer ) return;
//    
//    throttleTimer = true;
//
//    setTimeout(() => {
//        callback();
//        throttleTimer = false;
//    }, time);
//};
//
//const removeInfiniteScroll = () => {
//    loader.remove();
//    window.removeEventListener('scroll', handleInfiniteScroll);
//};
//
//const handleInfiniteScroll = () => {
//    throttle(() => {
//        const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;
//    
//        if (endOfPage) {
//            addPost(currentPage + 1);
//        }
//
//        if (currentPage === pageCount) {
//            removeInfiniteScroll();
//        }
//    }, 1000);
//};
//
//window.addEventListener('scroll', handleInfiniteScroll);
//
//
//// CLICK EVENT
//
//const galleryItem = document.getElementById('gallery-item');
//
//container.addEventListener("click", event => {
//});
//
