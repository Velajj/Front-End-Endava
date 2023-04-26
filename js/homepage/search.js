const searchButton = document.querySelector('.logo-group1 img');
const container = document.querySelector('.logo-group1');
const input = container.querySelector('input');
const searchPopup = container.querySelector('.search-popup');
const searchPopupResults = searchPopup.querySelector('.search-popup-results');





const mockData = {
    data:[
        {
            name: "name 1",
            type: "type 1",
        },

        {
            name: "name 2",
            type: "type 1",
        },

        {
            name: "name 3",
            type: "type 1",
        },
    ],
};

searchButton.addEventListener('click', () => {
    container.classList.toggle('active');


    searchPopup.classList.remove('active');
    input.value = "";
});


input.addEventListener('keypress', (event) =>{
    if(event.code === 'Enter')
    {
        searchPopup.classList.toggle('active');
        
        console.log("Add Api call");

        const arrayResultsString = mockData.data.map((currentResult) =>
        `<div class="ws-product-row">
        <div class="img-name-type-group">
          <div class="productRowImage">
            <img src="../image/MainPage/product.png" alt="">
          </div>
          <div>
            <div class="productRowName">
              <p>${currentResult.name}</p>
            </div>
            <div class="productRowType">
              <p>${currentResult.type}</p>
            </div>
          </div>
        </div>
        </div>`
        );

        let resultsString = "";
        arrayResultsString.foreach(current => {
            resultsString += current;
        }) 

        searchPopupResults.innerHTML = resultsString;
    }
})


















