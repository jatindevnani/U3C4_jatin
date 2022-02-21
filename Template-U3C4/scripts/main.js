async function apiCall(url) {
  let data = await fetch(url);
  data = await data.json();
  return data;
}

function appendArticles(articles, main) {
  //emptying the main box
  main.innerHTML = "";
  articles.forEach((elem) => {

    //BOOTSTRAP CARD
    let card = document.createElement("div");
    card.setAttribute("id", "news");
    card.setAttribute("class", "card");

    let cardBody = document.createElement("div");
    card.setAttribute("class", "card-body");
   
    card.addEventListener('click', function() {
      localStorage.setItem("article", JSON.stringify(elem));
      window.location.href = "./news.html";
    })

    let image = document.createElement("img");
    image.setAttribute("class", "card-img-top");
    image.src = elem.urlToImage;


    let title = document.createElement("h2");
    title.textContent = elem.title;
    title.setAttribute("class", "card-title");

    let desc = document.createElement("p");
    desc.textContent  = elem.description;
    desc.setAttribute("class", 'card-text');

    cardBody.append(title, desc);
    card.append(image, cardBody);
    main.append(card);
  });
}

export { apiCall, appendArticles };
