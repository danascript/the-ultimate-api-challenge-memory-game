import { useState, useEffect } from 'react';
/**
 * state:
 *
 * pics [
 * [
 *   {
 *     id: // to match the pair, can be just the index of it
 *     url: // to display the img
 *     isShown: // to show the card of the image
 *     isFound: // to know if a match was found
 *   }
 * ]
 *
 */

const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const useGetImages = options => {
    const [images, setImages] = useState([]);

    const buildUrl = () => {
        let url = new URL('https://api.pexels.com/v1/search');

        url.search = new URLSearchParams({
            page: getRandomPage(),
            query: options.category,
            size: 'small',
            orientation: 'square',
            per_page: options.count / 2,
        });

        return url;
    };

    const fetchPics = () => {
        fetch(buildUrl(), {
            headers: {
                Authorization: process.env.REACT_APP_AUTH_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(data => data.json())
            .then(data => setImages(data.photos));
    };

    useEffect(() => {
        if (!options) return;
        fetchPics();
    }, []);

    return {
        images,
    };
};

export default useGetImages;
