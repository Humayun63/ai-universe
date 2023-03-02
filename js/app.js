// FUNCTION FOR LOAD DATA WITH API
const loadData = async() =>{
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
        const data = await res.json();
        showData(data.data.tools); 
    } catch (error) {
        console.log(error);
    }
};

// FUNCTION FOR SHOW DATA IN DOM
const showData = (tools) =>{
    const cardsContainer = document.getElementById('cards-container');
    tools.forEach(tool => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer bg-body">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        `;
        cardsContainer.appendChild(div);
    });
    console.log(tools)
}
loadData();