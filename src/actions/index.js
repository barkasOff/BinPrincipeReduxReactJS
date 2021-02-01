const   menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};
const   menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};
const   menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};
const   addToBin = (id) => {
    return {
        type: 'ITEM_ADD_TO_BIN',
        payload: id
    };
};
const   deleteFromBin = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_BIN',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addToBin,
    deleteFromBin
};