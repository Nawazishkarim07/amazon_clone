export const initialState ={
    basket: [{
        id:"10008",
        title:"Samsung Galaxy ​S25 Ultra 5G (2025) ​512GB ​Storage​ + 12GB RAM SM-S938B ​Qualcomm Snapdragon 8 Elite SIM Free Factory Unlocked​ Android 15 Smartphone (Titanium Silver Blue)",
        price:1500,
        rating:4,
        image:"https://m.media-amazon.com/images/I/61S2cYnbptL._AC_SY340_.jpg"
        }],
    user: null
};

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding product to basket
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        
        case 'REMOVE_ITEM_FROM_THE_BASKET':
            //logic for removing item from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            if(index>=0){
                newBasket.splice(index,1)
            } else{
                console.warn("Can't remove product (id: ${action.id}) as it is not present in there.")
            }

            return {
                ...state,
                basket: newBasket}
        default:
            return state;
    }
}
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


export default reducer;