export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return { 
                ...state, 
                items: [...state.items, action.payload] 
            };
        case 'TOGGLE_CART':
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}