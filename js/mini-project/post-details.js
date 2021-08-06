const url = new URL(window.location);
const userId = url.searchParams.get('userId');
const postId = url.searchParams.get('postId');
const container = document.createElement('div');
container.classList.add('wrap')
const smallContainer = document.createElement('div');
smallContainer.classList.add('smallContainer');
document.body.appendChild(container);
container.appendChild(smallContainer);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        Object.keys(post).forEach(i => {
            const value = post[i];
            console.log(i, value);
            const p = document.createElement('p');
            p.innerHTML = `${i}: ${value}`
            smallContainer.appendChild(p);
        })

        let commentsBtn = document.createElement('button');
        commentsBtn.innerText = 'COMMENTS OF CURRENT POST';
        container.append(commentsBtn);
        commentsBtn.addEventListener('click', () => {
            commentsBtn.disabled = true;
            const commentsContainer = document.createElement('div');
            container.append(commentsContainer);
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(value => value.json())
                .then(comments => {
                    const commentBox = document.createElement('ul');
                    commentsContainer.append(commentBox);
                    commentBox.innerHTML = '';
                    for (const comment of comments) {
                        let liComment = document.createElement('li');
                        console.log(comment);
                        liComment.innerText = `${comment.name}: ${comment.body}`;
                        commentBox.append(liComment);
                    }

                });
        });

    })