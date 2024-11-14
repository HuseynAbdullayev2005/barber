const about = document.querySelector("#about")
const styles = document.querySelector("#styles")
const workers = document.querySelector("#workers")

const choose_workers = document.querySelector(".choose_workers")
const choose_workers_hidden = document.querySelector(".choose_workers_hidden")
const choose_styles = document.querySelector(".choose_styles")
const choose_styles_hidden = document.querySelector(".choose_styles_hidden")
const choose_about = document.querySelector(".choose_about")
const choose_about_hidden = document.querySelector(".choose_about_hidden")
const menu_icon = document.querySelector(".navbar_menu_icon");
const navbar_body_hidden = document.querySelector(".navbar_body_hidden");
const navbar_body_hidden_click = document.querySelector(".navbar_body_hidden_click");
const styles_list_item_beard = document.querySelector(".styles_list_item_beard");
const styles_list_item_hair = document.querySelector(".styles_list_item_hair");
const hair = document.querySelector(".hair")
const beard = document.querySelector(".beard")
const mustache = document.querySelector(".mustache")
const styles_list_item_mustache = document.querySelector(".styles_list_item_mustache")

menu_icon.addEventListener("click", function () {
   navbar_body_hidden.classList.toggle("navbar_body_hidden_click")
})

choose_styles.addEventListener("click",function(){
    styles.style.display = "block"
    about.style.display = "none"
      workers.style.display = "none"
})
choose_styles_hidden.addEventListener("click",function(){
   styles.style.display = "block"
   about.style.display = "none"
     workers.style.display = "none"
})
choose_about.addEventListener("click",function(){
   styles.style.display = "none"
   about.style.display = "block"
     workers.style.display = "none"
})
choose_about_hidden.addEventListener("click",function(){
  styles.style.display = "none"
  about.style.display = "block"
    workers.style.display = "none"
})

choose_workers.addEventListener("click",function(){
   styles.style.display = "none"
   about.style.display = "none"
     workers.style.display = "block"
})
choose_workers_hidden.addEventListener("click",function(){
  styles.style.display = "none"
  about.style.display = "none"
    workers.style.display = "block"
})

styles_list_item_beard.addEventListener("click", function () {
   hair.style.display = "none"
   beard.style.display = "block"
  mustache.style.display = "none"
})

styles_list_item_hair.addEventListener("click", function () {
hair.style.display = "block"
   beard.style.display = "none"
mustache.style.display = "none"
})

styles_list_item_mustache.addEventListener("click", function () {
   hair.style.display = "none"
   beard.style.display = "none"
   mustache.style.display = "block"
})




