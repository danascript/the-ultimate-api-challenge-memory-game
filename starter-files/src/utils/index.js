// Shuffle the cards to "mess up" with their order
export const shuffleCards = cards => {
    let m = cards.length;
    let t;
    let i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
};

// Form a data object per image
export const getFormedData = data => {
    return data.map((pic, index) => ({
        id: index,
        url: pic.src.small,
        isShown: false,
        isFound: false,
    }));
};

// "Duplicate" every fetched image
export const getPairedPics = data => {
    return data.reduce((img, i) => img.concat(i, i), []);
};

// Extend existing info with a uniqueId key
export const addUniqueIds = data => {
    return data.map((entry, i) => ({
        ...entry,
        uniqueId: i,
    }));
};
