const showModal = (id) =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => dynamicModal(data.data))
    .catch(error => console.log(error));
};

// DYNAMIC MODAL CREATION
const dynamicModal = (data) =>{
    const modalCardContainer = document.getElementById('modal-card-container');
    modalCardContainer.innerHTML = '';
    // CREATING MODAL FIRST DIV
    const firstDiv = document.createElement('div');
    firstDiv.classList.add('col');
    firstDiv.innerHTML = `
        <div class="card h-100 bg-danger-subtle border border-danger">
            <div class="card-body">
                <h5 class="card-title">${data.description}</h5>
                
            </div>
        </div>
    `;
    modalCardContainer.appendChild(firstDiv);

    // CREATING MODAL SECOND DIV
    const secondDiv = document.createElement('div');
    secondDiv.classList.add('col');
    secondDiv.innerHTML = `
        <div class="card h-100">
            <div class="p-1">
                <img src="${data.image_link[0]}" class="card-img-top" alt="...">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">${data.input_output_examples !== null ? data.input_output_examples[0].input : 'Can you give any example?'}</h5>
                <p class="card-text">${data.input_output_examples !== null ? data.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
            </div>
        </div>
    `;
    modalCardContainer.appendChild(secondDiv);
}