let submitButton = document.getElementById('submit');
let input = document.getElementById('input');

let prev = 1000;

let psychotypes = [
    {name: "Сосалистер", description: "Иногда вы можете заебывать Дункана, но в целом вы душка. Не против лизнуть кувалду"},
    {name: "наследник рода Невкусландов", description: "У вас нет коленей. Используйте это с умом!"},
    {name: "король Карлан", description: "На самом деле вы не маленький, просто ваши родители шутники"},
    {name: "тэйрн Логейн (гей)", description: "Да, гей. И что? Зато яой какой!"},
    {name: "Джори", description: "Не то чтобы вы ведомый персонаж, просто если вас попросить подойти, вы подойдёте"},
    {name: "Морриган", description: "Ваше имя приятно мурчит, но вы крайне негативно настроены к людям, тревожащим пиписьки. Особенно годами не встававшие"},
];

submitButton.addEventListener('click', (e) => {
    let rnd = getRand();
    while(rnd == prev) rnd = getRand();
    console.log(rnd);
    let resultHeader = document.querySelector('.result_name').innerText = psychotypes[rnd].name;
    let resultDescription = document.querySelector('.result_description').innerText = psychotypes[rnd].description;
    prev = rnd;
});

function getRand() {
    return Math.floor(Math.random() * psychotypes.length);
}