const express = require('express');
const app = express();
const port = 5501;

app.listen(port, () => console.log(`Express is running on port ${port}`))

const cors = require('cors');
app.use(cors());

const dogs = [
    {id: 1, title: 'Dogs Trust: Dogs Rehoming & Dog Rescue Charity', url: 'https://www.dogstrust.org.uk/', description: "Dogs Trust is the UK's largest Dog Welfare Charity. Looking to rehome a rescue dog or to donate to an animal charity? Visit us today to find out more!"},
    {id: 2, title: 'Dog - Wikipedia', url: 'https://en.wikipedia.org/wiki/Dog', description: "The dog or domestic dog (Canis familiaris) is a domesticated descendant of the grey wolf."},
    {id: 3, title: "Dog Care Advice, Tips & Health Information | RSPCA", url: 'https://www.rspca.org.uk/adviceandwelfare/pets/dogs', description: "Give a home to a rescued dog. We rescue and rehome thousands of dogs each year - each one comes with a unique personality ready made"},
    {id: 4, title: 'Dog, facts and photos - National Geographic', url : 'https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog', description: 'The term “domestic dog” refers to any of several hundred breeds of dog in the world today.'},
]