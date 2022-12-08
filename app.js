// Progression 1: create a function and fetch the api using axios
fetch('https://gnews.io/api/v4/top-headlines?token=81ff965148aca603db0b745634ea8b13&lang=en').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata) 
  let data='';
  for(let i=0;i<10;i++){
  data+=`    <div class="card">
  <h1 class="title">${completedata.articles[i].title}</h1>
  <img src=${completedata.articles[i].image} alt="img">
  <p>${completedata.articles[i].content}</p>
  

</div>`
  }
document.getElementById('cards').innerHTML=data
}).catch((error)=>{
  console.log(error);
})