// Traer data desde el perfil de Instagram
const accessT = 'IGQWROYnZAJQm90eFlDeWxmZAXAxcmtkaVpkSzZAWczQ3dEowT1ByU0I2QmRIdDduS2NhREFHUTluUkRLNHcxM2xRbXlyS3BFY21naXhFMzlveWVORTJ5aDQxeVFUSldLUjR3dEhSRERvXzRYbElNbVJSX3ZAoZAjRYT3cZD';
const limitPosts = 6;
const urlBase = `https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,username&limit=${limitPosts}&access_token=${accessT}`;


//fetching
async function getIGPosts(){
    const res = await fetch(urlBase);
    try {
        console.log(res.json());

    }
    catch {
        console.log('error');

    }
    finally {
        console.log('Finalizó');
    }

}

getIGPosts();