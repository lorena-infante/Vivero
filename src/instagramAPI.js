// Traer data desde el perfil de Instagram
const accessT ='AccessTokenDeIG- Ver funcionamiento en el readme del repositorio';
//Este token es privado, por lo cual Meta y Github lo bloquean una vez sea pusheado al repositorio público. En el readme presento su funcionamiento de manera local. Actualmente mostrará un error 400.
const limitPosts = 9;
const urlBase = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,username&limit=${limitPosts}&access_token=${accessT}`;
const postsContainer = document.getElementById('posts-container');

let spinner = document.getElementById("spinner");


//fetching
async function getIGPosts(){
    spinner.innerHTML = `<div class="spinner-border text-success text-center" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;
    try {
        const res = await fetch(urlBase);
        if(!res.ok){
            postsContainer.innerHTML = `
                <div class="row flex-row mb-3">
                <h5 class="fw-bold text-green"> No fue posible acceder a los datos</h3>
                <p>Error ${res.status}</p>
                </div>
                `;
        }
        const data = await res.json();
        const posts = await data.data;
        spinner.innerHTML = ``;
        posts.forEach((post)=> {
            postsContainer.innerHTML += `
            <div id="${post.id}" class="col-6 col-lg-4 my-2 col-ig">
                <img src="${post.media_url}" alt="${post.caption}" class="h-100 w-100 img-ig">
            </div>
            `;
       }); 
    }
    catch (error) {
        throw new Error(error);      
    }
    finally {
        spinner.innerHTML = ``;
    }

}

getIGPosts();