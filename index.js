// Grab the news container
let coin = document.getElementById('coin');

// Create an ajax get request
const app = new XMLHttpRequest();
app.open('GET', `https://cors-anywhere.herokuapp.com/newsapi.org/v2/top-headlines?country=in&apiKey=63644d875abc4e74b6060495b90fc1eb`, true);

// What to do when response is ready
app.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="True" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#coin">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        coin.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

app.send();


