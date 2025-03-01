let dataCard = document.getElementById("detail-web")
const {href} = window.location
var id = href.substring(href.lastIndexOf('#') + 1);

const url = base_url + "/" + id
console.log(url);

fetch(url)
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        // datas.forEach(data => {
        //     if (id !=null){
        //         let dataUrl = base_url +"/"+ `${id}`
        //         base_url = dataUrl
        //       }
            dataCard.innerHTML += `
            <div class="data-content">
            <img src="${data.image.original}" class="card-img-left" alt="...">
            <div class="context">
            <h2>${data.name}</h2>
            <p> ${data.summary}</p>
            <ul>
              <li class="detail-items">IMDB Point: ${data.rating.average}</li>
              <li class="detail-items">Language: ${data.language}</li>
              <li class="detail-items">Genre: ${data.genres}</li>
              <li class="detail-items">Premiered: ${data.premiered}</li>
              <li class="detail-items">Ended: ${data.ended}</li>
              
            </ul>
            <div class="card-body-button">
            <a href="${data.officialSite}">
              <button type="button" class="btn btn-success">Go to website</button>
              </a>
                         
              <a href="index.html" id="Detail" data-id=${data.id} target="_blank">
              <button type="button" class="btn btn-primary" >Go back</button>
              </a>
              </div>
            </div>
            </div>



             
          `
        // });  
});



{/* <div class="card" >
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
                     
          <a href="detail.html#${data.id}" id="Detail" target="_blank">
          <button type="button" class="btn btn-success" >Go to detail</button>
          </a>
                    
          </div>
          </div>  */}