const   initialState = {
    menu: [],
    loading: true,
    error: false,
    items: []
};

const   reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                error: true
            };
        case 'ITEM_ADD_TO_BIN':
            const   id = action.payload,
                    item = state.menu.find(el => el.id === id),
                    newItem = {...item};

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case 'ITEM_REMOVE_FROM_BIN':
            const   idx = action.payload,
                    itemIndex = state.menu.findIndex(el => el.id === idx);

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            };
        default:
            return state;
    };
};

export default reducer;