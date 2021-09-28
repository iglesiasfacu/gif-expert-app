export const getGifs = async(categorias) => {
    
    const key = '4aKyH2K6SILFqs9MWxadpxWnQYd1k2a9';
    const url = `https://api.giphy.com/v1/gifs/search?q=${categorias}&limit=20&api_key=${key}`;
    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};