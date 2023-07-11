window.addEventListener('DOMContentLoaded', function() {
var masivi = [
    {
        title: "Personal",
        description: "Just started using awesome Module. Great way to boost the hard designing or prototyping process.",
        price: "Free",
        priceDescription: "Per month billed annualy or $250 from month to month"
    },
    {
        title: "Personal",
        description: "Also a perfect tool for creative studios and freelancers",
        euro: "€",
        price: "123",
        priceDescription: "Per month billed annualy or $250 from month to month"
    },
    {
        title: "Personal",
        description: "Living in today’s metropolitan world of cellular phones, mobile computers",
        euro: "€",
        price: "232",
        priceDescription: "Per month billed annualy or $250 from month to month"
    },
];
    var flexDiv = document.getElementById("flexdiv");
    masivi.forEach(function(element) {
        var card = document.createElement("div");
        card.classList.add("card", "personal-card");

        var imageElement = document.createElement('img');
    
        imageElement.src = element.image;
        imageElement.alt = 'Card Image';

        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        var titleElement = document.createElement('h4');
        titleElement.classList.add('personal');
        titleElement.textContent = element.title;

        var descriptionElement = document.createElement('p');
        descriptionElement.classList.add('p-description');
        descriptionElement.textContent = element.description;

        var hr = document.createElement("hr");
        hr.classList.add("hr1");

        var flexDivSmall = document.createElement("div");
        flexDivSmall.classList.add("flex-div-small");

        var euroElement = document.createElement("span");
        euroElement.classList.add("euro");
        euroElement.textContent = element.euro;

        var priceElement = document.createElement("h1");
        priceElement.classList.add("h1-123");
        priceElement.textContent = element.price;
        
        var priceDescriptionElement = document.createElement("p");
        priceDescriptionElement.classList.add("p-pay");
        priceDescriptionElement.textContent = element.priceDescription;

        var buttonGetIt = document.createElement("button");
        buttonGetIt.classList.add("get-it");
        buttonGetIt.innerHTML = "Get it";
        

        cardBody.appendChild(titleElement);
        cardBody.appendChild(descriptionElement);
        cardBody.appendChild(hr);
        cardBody.appendChild(flexDivSmall);
        flexDivSmall.appendChild(priceElement);
        priceElement.appendChild(euroElement);
        flexDivSmall.appendChild(priceDescriptionElement);
        cardBody.appendChild(buttonGetIt);


        card.appendChild(cardBody);

        flexDiv.appendChild(card);
    });
});