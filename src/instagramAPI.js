// Traer data desde el perfil de Instagram
const accessT = 'IGQWROYnZAJQm90eFlDeWxmZAXAxcmtkaVpkSzZAWczQ3dEowT1ByU0I2QmRIdDduS2NhREFHUTluUkRLNHcxM2xRbXlyS3BFY21naXhFMzlveWVORTJ5aDQxeVFUSldLUjR3dEhSRERvXzRYbElNbVJSX3ZAoZAjRYT3cZD';
const limitPosts = 9;
const urlBase = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,username&limit=${limitPosts}&access_token=${accessT}`;
const postsContainer = document.getElementById('posts-container');
console.log(postsContainer);

//fetching
async function getIGPosts(){
    const res = await fetch(urlBase);
    try {
        return res.json().then((data) => {
            let posts = data.data;
            postsContainer.innerHTML = ``;
            if (posts.length !== 0){
                posts.forEach((post)=> {
                    postsContainer.innerHTML += `
                    <div id="${post.id}" class="col-6 col-lg-4 my-2 col-ig">
                        <img src="${post.media_url}" alt="${post.caption}" class="h-100 w-100 img-ig">
                    </div>
                    `;
                   console.log(post);
               }); 
            }else {
                postsContainer.innerHTML = `
                <div class="row flex-row mb-3">
                <h3 class="fw-bold"> No se encontraron Posts asociados a esta cuenta </h3>
                </div>
                `;
            }
        })
    }
    catch {
        console.log('error');

    }
    finally {
        console.log('Finalizó');
    }

}

getIGPosts();