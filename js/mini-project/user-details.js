const url = new URL(window.location);
const userId = url.searchParams.get('userId');
const container = document.createElement('div');
document.body.appendChild(container);

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value => value.json())
    .then(user => {
        Object.keys(user).forEach(i => {
            const value = user[i];
            console.log(i, value);
            const p = document.createElement('p');

            if (typeof value === "object") {
                Object.keys(value).forEach(i => {
                    const subValue = value[i];
                    const p = document.createElement('p');

                    if (typeof subValue === "object") {
                        Object.keys(subValue).forEach(i => {
                            const subSubValue = subValue[i];
                            const p = document.createElement('p');
                            p.innerText = `${i}: ${subSubValue}`
                            container.appendChild(p)
                        });
                    } else {
                        p.innerText = `${i}: ${subValue}`
                        container.appendChild(p);
                    }
                });
            } else {
                p.innerText = `${i}: ${value}`
                container.appendChild(p);
            }
        });

        let postsBtn = document.createElement('button');
        postsBtn.innerText = 'POST OF CURRENT USER';
        container.append(postsBtn);
        postsBtn.addEventListener('click', () => {
            postsBtn.disabled = true;
            const postsContainer = document.createElement('div');
            container.append(postsContainer);

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then(value => value.json())
                .then(posts => {
                    const postBox = document.createElement('ul');
                    postsContainer.append(postBox);
                    postBox.innerHTML = '';
                    for (const post of posts) {
                        let liPost = document.createElement('li');
                        postBox.append(liPost);
                        const a = document.createElement('a');
                        a.innerText = post.title;
                        a.href = `post-details.html?postId=${post.id}&userId=${userId}`;
                        a.target = '_blanc'
                        liPost.appendChild(a);
                    }
                });
        });
    });