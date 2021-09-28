const form = document.querySelector('form')
fakeFetchBecauseICantMakeItWord = '"YESTERDAY I WAS CLEVER, SO I CHANGED THE WORLD. TODAY I AM WISE, SO I AM CHANGING MYSELF." -RUMI';

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const quote = document.querySelector('#text')

  fetch('http://localhost:3000/quotes/random')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log('data parsed', data)
    })
    .then(quote.innerHTML = fakeFetchBecauseICantMakeItWord)
    .catch(console.log('Error'))
});


