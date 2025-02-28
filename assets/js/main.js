let base_url = "https://api.tvmaze.com/shows"
let dataCards = document.getElementById("datas");
let searchBtn = document.getElementById("searchBtn")
let searchInput = document.getElementById("searchInput")



fetch(base_url)
    .then(response => response.json())
    .then(datas => { 

        datas.forEach(data => {
            dataCards.innerHTML += `<div class="card" >
          <img src="${data.image.medium}" class="card-img-top" alt="...">
          <h5 class="card-title">${data.name}</h5>
          <div class="card-body ">
          <p class="card-text">Premiere: ${data.premiered}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">IMDB Rating: ${data.rating.average}</li>
          <li class="list-group-item" style="height: 37px;">Genre: ${data.genres} </li>
          <li class="list-group-item">Language: ${data.language}</li>
          </ul>
          <div class="card-body-button" >
          <a href="${data.officialSite}">
          <button type="button" class="btn btn-primary">Go to website</button>
          </a>
                     
          <a href="${data.id} ">
          <button type="button" class="btn btn-success">Go to detail</button>
          </a>
                    
          </div>
          </div> 
          `
        });   
});

searchBtn.addEventListener("click", function(e){
  e.preventDefault();
    let inputValue = searchInput.value;
    let id=searchInput.id;
    let fullUrl = base_url + `/${id}/` + `${inputValue}`;
  
    fetch(fullUrl)
    .then(response => response.json())
    .then(datas => { 

        datas.forEach(data => {
            dataCards.innerHTML = `<div class="card" >
          <img src="${data.image.medium}" class="card-img-top" alt="...">
          <h5 class="card-title">${data.name}</h5>
          <div class="card-body ">
          <p class="card-text">Premiere: ${data.premiered}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">IMDB Rating: ${data.rating.average}</li>
          <li class="list-group-item" style="height: 37px;">Genre: ${data.genres} </li>
          <li class="list-group-item">Language: ${data.language}</li>
          </ul>
          <div class="card-body-button" >
          <a href="${data.officialSite}">
          <button type="button" class="btn btn-primary">Go to website</button>
          </a>
                     
          <a href="${data.id} ">
          <button type="button" class="btn btn-success">Go to detail</button>
          </a>
                    
          </div>
          </div> 
          `
        });   
        }); 
})