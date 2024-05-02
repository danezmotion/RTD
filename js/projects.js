const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts) {
    container.innerHTML = '';
    
    // Holder for posts
    let columnWrappers = {};

    // create column arrays
    for(let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = []
    }

    // organize post order from left to right
    for (let i = 0; i < posts.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    //populate posts
    for ( let i = 0; i < columns; i++ ) {
       let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;
            let overlay = document.createElement('div');
            overlay.classList.add('overlay');
            let title = document.createElement('h3');
            title.innerText = post.title;
            let link = document.createElement('a');
            link.classList.add('link');
            link.href = post.link;

            overlay.appendChild(title);
            postDiv.append(image, link, overlay);
            column.appendChild(postDiv);

        })
        container.appendChild(column)
    }
}

// Responsive
let previousScreenSize = pss = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;

    if (window.innerWidth < 600 && pss >= 600) {
        generateMasonryGrid(1, posts);
    }
    else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (pss < 600 || pss >= 1000)) {
        generateMasonryGrid(2, posts);
    }
    else if (window.innerWidth >= 1000 && pss < 2000) {
        generateMasonryGrid(4, posts);
    }
    else if (window.innerWidth >= 2000) {
        generateMasonryGrid(6, posts);
    }
    pss = window.innerWidth;
})

// page load

if( pss < 600) {
    generateMasonryGrid(1, posts);
}
else if ( pss >= 600 && pss < 1000){
    generateMasonryGrid(2, posts);
}
else if ( pss >= 1000 && pss < 2000){
    generateMasonryGrid(4, posts);
}
else if ( pss >= 2000){
    generateMasonryGrid(6, posts);
}
