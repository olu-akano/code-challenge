const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => console.log(`Express is running on port ${port}`))

const cors = require('cors');
app.use(cors());

const dogs = [
    {id: 1, title: 'Dogs Trust: Dogs Rehoming & Dog Rescue Charity', url: 'https://www.dogstrust.org.uk/', description: "Dogs Trust is the UK's largest Dog Welfare Charity. Looking to rehome a rescue dog or to donate to an animal charity? Visit us today to find out more!"},
    {id: 2, title: 'Dog - Wikipedia', url: 'https://en.wikipedia.org/wiki/Dog', description: "The dog or domestic dog (Canis familiaris) is a domesticated descendant of the grey wolf."},
    {id: 3, title: "Dog Care Advice, Tips & Health Information | RSPCA", url: 'https://www.rspca.org.uk/adviceandwelfare/pets/dogs', description: "Give a home to a rescued dog. We rescue and rehome thousands of dogs each year - each one comes with a unique personality ready made"},
    {id: 4, title: 'Dog, facts and photos - National Geographic', url : 'https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog', description: 'The term “domestic dog” refers to any of several hundred breeds of dog in the world today.'},
    {id: 5, title: "All Dog Breeds - Complete List of Dog Profiles - DogTime", url: "https://dogtime.com/dog-breeds/profiles", description: 'Detailed profiles of more than 200 dog breeds. Includes personality, history, dog pictures, dog health info, and more.'},
    {id: 6, title: 'Dogs | Healthy Pets, Healthy People | CDC', url: "https://www.cdc.gov/healthypets/pets/dogs.html", description: 'Dogs can have many positive effects on the lives of their owners. They influence social, emotional, and cognitive development in children.'},
    {id: 7, title: "Dogs for Good - Who we are - Assistance Dogs", url = "https://www.dogsforgood.org/", description: "Dogs for Good is a life-transforming charity, creating partnerships between people living with disability and specially trained assistance dogs."},
    {id: 8, title: 'Here are the 10 most loyal breeds of adorable and cuddly dog that are completely devoted to their owners', url: 'https://www.scotsman.com/lifestyle/family-and-parenting/these-are-the-10-most-loyal-breeds-of-adorable-dog-that-are-completely-devoted-to-their-human-families-3326796', description: ' With demand for puppies remaining high post-lockdown, here are the breeds of dogs that will love their human family unconditionally.'},
    {id: 9, title: 'Birmingham Dogs Home', url: 'https://www.birminghamdogshome.org.uk/?gclid=CjwKCAjwndCKBhAkEiwAgSDKQXu_MCPHT4RNnuUmd4b1-Fab4-qc2DvlxVaU5GHY1o0IdGN0k8jszBoCjggQAvD_BwE', description:'Helping Stray And Rejected Dogs Find Happier Tomorrows. We Provide Rescue & Rehoming Services For Dogs. Support Us Today! Save An Unloved Dog. End Dog Suffering'},
    {id: 10, title: "Manchester and Cheshire Dogs' Home", url: 'https://www.dogshome.net/', description: 'Dogs. Click here to find out more about some of our residents... Fundraise.'}
]

app.get('/dogs', (req, res) => res.send(dogs));


let luckyItems = [dogs, sport, europe];

function imFeelingLucky () {
    return luckyItems[Math.floor(Math.random()*items.length)];
}

app.get('/lucky', (req, res) => res.send(imFeelingLucky));