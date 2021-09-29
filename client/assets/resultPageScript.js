const luckyButton = document.getElementById('#lucky');

luckyButton.addEventListener('click', e => {
    e.preventDefault();

})


const imFeelingLucky = async () => {
    try {
        let resp = await fetch('http://localhost:3001/lucky')
        let data = await resp.json();
        console.log(data)
    } catch (err) {
        console.error(`Oh no..${err}`)
    }
}
