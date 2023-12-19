const radioBtn = document.querySelector(".radios")
const imgSelector = document.querySelectorAll(".image-filter")
const imgArr = [...imgSelector]

radioBtn.addEventListener("change", function(event){
    filterAnimals() 
})

function filterAnimals() {
    console.log(event.target.value)
    for (let i = 0; i < imgArr.length; i++) {
        
    }
}



