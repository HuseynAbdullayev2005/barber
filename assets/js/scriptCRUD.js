const hair_first = document.querySelector(".hair_first")
const hair_second = document.querySelector(".hair_second")
const hair_third = document.querySelector(".hair_third")
async function getAll() {
    const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel");
    const data = await response.json();
    console.log(data);
}

getAll()


async function generateTable() {
    const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel");
    const data = await response.json();

    data.forEach(element => {
        console.log(element.about);
        findHair(element);
    });
}
generateTable()



function findHair(element) {
    if (element.about === "hair1") {
        hair_first.innerHTML = `<div class="box_image_hair"><img src="https://i.ytimg.com/vi/WYnpPLoCVq8/maxresdefault.jpg">
        </div>
        <div class="box_text_hair">
        <p>${element.name}</p>
        <P>${element.price}</P>
        </div>
        `
    }
    else if(element.about==="hair2"){
        
    }
}