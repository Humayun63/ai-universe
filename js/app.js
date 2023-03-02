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
    tools = tools.slice(0, 6);
    const cardsContainer = document.getElementById('cards-container');
    tools.forEach(tool => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${tool.image}" class="card-img-top" alt="${tool.name} image">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <ol class="list-unstyled">
                        <li>1. ${tool.features[0]}</li>
                        <li>2. ${tool.features[1]}</li>
                        <li>3. ${tool.features[2]}</li>
                    </ol>
                </div>
                <div class="card-footer bg-body d-flex justify-content-between align-items-center">
                    <div>
                        <h3>${tool.name}</h3>
                        <p>
                            <i class="fa-solid fa-calendar-days"></i>
                            ${tool.published_in}
                        </p>
                    </div>
                    <!-- CARD FOOTER BUTTON -->
                    <div>
                        <button class="btn btn-warning rounded-circle">
                            <i class="fa-solid fa-arrow-right text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.appendChild(div);
    });
    console.log(tools)
}
loadData();