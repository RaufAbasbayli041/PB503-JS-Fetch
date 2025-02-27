let base_url = "https://api.tvmaze.com/shows"
let dataCards = document.getElementById("datas");


fetch(base_url)
    .then(response => response.json())
    .then(datas => { console.log(datas);

        datas.forEach(data => {
            dataCards.innerHTML += ` <div class="card " >
             <img src="${data.image.medium}" class="card-img-top" alt="..." "> 
            <div class="card-body" >
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">Premiere: ${data.premiered}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">IMDB Rating: ${data.rating.average}</li>
              <li class="list-group-item">Genre: ${data.genres}</li>
              <li class="list-group-item">Language: ${data.language}</li>
            </ul>
            <div class="card-body-button" >
                <a href="${data.officialSite}">
                <button type="button" class="btn btn-primary">Go to website</button>
                </a>
                
                <a href="${data.url}">
                <button type="button" class="btn btn-success">Go to detail</button>
                </a>
               
            </div>
          </div>
          `
        });
});