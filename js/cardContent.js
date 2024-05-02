
let gallery_content = document.createElement('div');
gallery_content.id = 'card-content';

let card_media = document.createElement('div');
card_media.classList.add('card-media');

let card_details = document.createElement('div');
card_details.classList.add("card-details");

gallery_content.append(card_media, card_details);
container.append(gallery_content);
