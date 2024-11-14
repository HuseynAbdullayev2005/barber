const inp_name = document.querySelector(".inp_name");
const inp_prize = document.querySelector(".inp_prize");
const inp_choose = document.querySelector(".inp_choose");
const btn_submit = document.querySelector(".btn_submit");
const form = document.querySelector("form")
const create = async () => {
  try {
        const response = await fetch("https://6724aabbc39fedae05b2470a.mockapi.io/adminpanel", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: inp_name.value,
                prize: inp_prize.value,
                about: inp_choose.value,
            })
        });

        const data = await response.json();
        console.log(data);
       
    } catch (error) {
        console.log(error);
    }
};


btn_submit.addEventListener("click", create)
form.addEventListener('submit', function (event) {
    event.preventDefault();
});