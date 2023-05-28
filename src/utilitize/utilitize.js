
const storeLocalStorageData=(id)=>{
    console.log(id)
    const shoppingCard=getShoppingCard();
    console.log(shoppingCard)
    const quantity=shoppingCard[id]
    if (quantity) {
        shoppingCard[id]=quantity+1;
    }else{
        shoppingCard[id]=1;
    }
    localStorage.setItem("shopping-card",JSON.stringify(shoppingCard))
}

  



const getShoppingCard=()=>{
let localData={};
    const getLocalStorageData=JSON.parse(localStorage.getItem("shopping-card"));
if(getLocalStorageData){
    localData=getLocalStorageData;
}
    return localData;
}
export {getShoppingCard,storeLocalStorageData}