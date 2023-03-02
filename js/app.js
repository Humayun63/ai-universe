const loadData = async() =>{
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const data = await res.json();
        console.log(data); 
    } catch (error) {
        console.log(error);
    }
}