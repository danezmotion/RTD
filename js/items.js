const posts = [];

let imageIndex = 0;

for(let i = 1; i < media.length; i++) {
    let item = {
        id: i,
        title: media[imageIndex].title,
        image: media[imageIndex].src,
        link: media[imageIndex].link,
    }
    posts.push(item);
    imageIndex++;
    if(imageIndex > media.length - 1) imageIndex = 0;
}

// console.log(posts)
