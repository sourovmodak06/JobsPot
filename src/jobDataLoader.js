import { getShoppingCart } from "./fakedb";

const jobDataLoader = async () => {
    const loadedData = await fetch('/featured-job.json');
    const jobData = await loadedData.json();

    const storedData = getShoppingCart();
    
    const saveCart = [];

    for(const id in storedData){
        const addedDetails = jobData.find(detail => detail.id === id);
        saveCart.push(addedDetails);
    }

    return saveCart;
}

export default jobDataLoader;