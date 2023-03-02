const showModal = (id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => dynamicModal(data.data))
    .catch(error => console.log(error));
};

// DYNAMIC MODAL CREATION
const dynamicModal = (data) =>{

}