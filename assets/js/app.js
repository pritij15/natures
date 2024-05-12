const navToggle = document.getElementById("navToggle");
const navigation = document.getElementById("navigation");


const toggleNavHandler =() =>{
    navigation.classList.toggle("active")

}

navToggle.addEventListener("click",toggleNavHandler)
