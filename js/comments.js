
// display comments details
const displayCommentDetails= data =>{
    console.log(data)
    const commentDelails=document.getElementById("comment-details");
    commentDelails.classList.add("comment-details");
    commentDelails.innerHTML=`
        <h2>Name:${data.name}</h2>
        <p>Email:${data.email}</p>
        <p>Comment:${data.body}</p>
    `
}

// fetch comments delails
const commentDelails= async id=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const data=await res.json();
    displayCommentDetails(data);
}

// display comments
const displayComments=data=>{
    const comments=document.getElementById("comments");
    data.forEach(x=>{
        const div=document.createElement('div');
        div.classList.add('comment');
        
        div.innerHTML=`
            <h2>Name:${x.name}</h2>
            <p>Email:${x.email}</p>
            <p>Comment:${x.body.slice(0,100)}..</p>
            <button onclick="commentDelails(${x.id})">Show details</button>
        `
        comments.appendChild(div);
    })
}

// load comments
function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data));
}