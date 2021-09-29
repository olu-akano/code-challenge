const luckyButton = document.getElementById('lucky');

luckyButton.addEventListener('submit', e => {
    let url = imFeelingLucky;
    console.log(url);
    luckyButton.setAttribute("action", url)
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

