let newsList = []
const apiKey = "beea6c9a09cb4531846bea65a234b81f"
let numberOfArticles;
const numberOfNews = () => {

}
const loadNews = async() => {
    url = `https://newsapi.org/v2/everything?q=korea&apiKey=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    newsList = result.articles
    render(newsList)
    console.log("What we get here?",result);
    document.getElementById("numberOfArticles").innerHTML += `"The number of articles : ${result.articles.length}"`
}

const render = (list) =>{
     
    let newsHtml = list.map(item =>`
    <div class="jumbotron flex column" style="margin:20px;"><div id="newsArea" class="container border">
    <div class="media">
    <img class="rounded-circle" src="${item.urlToImage}" width=400px/>
  <div class="media-body" style="margin-left:40px;">
  <div id="title"><h3>${item.title}</h3></div><span style="font-size:4px;"class="author">${item.author}</span>
  <div id="source" style="color:blue;"><h5>${item.source.name}</h5></div>
  <div id="publishedAt">${item.publishedAt}</div>
  <div id="description">${item.description}</div>
  <button type="button" class="btn btn-danger text-center" style="display:flex;"><a href="${item.url}">Read More</a></button>
  </div>
</div>
   
 </div></div>
    `).join('');

 document.getElementById("newsArea").innerHTML += newsHtml

}
const loadMoreNews = async() => {
    url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
    let data = await fetch(url);
    let result = await data.json();
    newsList = result.articles
    render(newsList)
    console.log("What we get here?",result);
}
loadNews()
document.getElementById("loadMoreButton").addEventListener("click",loadMoreNews);