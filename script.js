const catBtn = document.getElementById("cat-btn")
const thisHasPic = document.querySelector(".image-container");
const catPic = document.getElementById("catImage");

catBtn.addEventListener("click", function getCatImage() {
    if (catPic.style.visibility !== "visible") {
        catPic.style.visibility = "visible"
    }

    return fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data[0].url);
            catPic.style.width = "500px";
            catPic.style.height = "350px";
            catPic.src = data[0].url;
            // document.getElementById("catImage").src = data[0].url;
        });
});