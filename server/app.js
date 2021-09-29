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




const sport = [
    {id: 1, url: "https://www.bbc.co.uk/sport", title: "Home - BBC Sport", description: "Breaking news & live sports coverage including results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all ..."},
    {id: 2, url: "https://www.sportsdirect.com/", title: "SportsDirect.com – The UK's No 1 Sports Retailer", description: "Your one stop sport shop for the biggest brands - browse trainers for Men, Women & Kids. Plus sports fashion, clothing & accessories."},
    {id: 3, url: "https://www.sportengland.org/", title: "Sport England: Home | Uniting the Movement", description: "Sport England's vision is to transform lives and communities through sport and physical activity, driven by Uniting the Movement, a 10-year strategy of ..."},
    {id: 4, url: "https://www.skysports.com/", title: "Sky Sports - Sports News, Transfers, Scores | Watch Live Sport", description: "Watch the best live coverage of your favourite sports: Football, Golf, Rugby, Cricket, F1, Boxing, NFL, NBA, plus the latest sports news, ..."},
    {id: 5, url: "https://en.wikipedia.org/wiki/Sport", title: "Sport - Wikipedia", description: "Sport pertains to any form of competitive physical activity or game that aims to use, maintain or improve physical ability and skills while providing ..."},
    {id: 6, url: "https://www.independent.co.uk/sport", title: "Sport latest news, live results, updates and comment - The ...", description: "Independent Sport - Follow the latest sports news and breaking sports stories including Football, Tennis, F1, Golf and Rugby. "},
    {id: 7, url: "https://www.theguardian.com/uk/sport", title: "Sport news, comment and results | The Guardian", description: "Sport news, results, fixtures, blogs and comments on UK and world sport from the Guardian, the world's leading liberal voice."},
    {id: 8, url: "https://www.dictionary.com/browse/sport", title: "Sport Definition & Meaning | Dictionary.com", description: "Sport definition, an athletic activity requiring skill or physical prowess and often of a competitive nature, as racing, baseball, tennis, golf, bowling, ... "},
    {id: 9, url: "https://metro.co.uk/sport/", title: "Sport - Latest UK sports news, results, stats and videos - Metro", description: "Sport – Latest UK sports news, results, stats and videos."},
    {id: 10, url: "https://dictionary.cambridge.org/dictionary/english/sport", title: "SPORT | meaning in the Cambridge English Dictionary", description: "7 days ago — sport noun (GAME) ... a game, competition, or activity needing physical effort and skill that is played or done according to rules, for enjoyment ..."}
]

const sport = [
    {id: 1, url: "https://en.wikipedia.org/wiki/Europe", title: "Europe - Wikipedia", description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost peninsulas of the ..."},
    {id: 2, url: "https://www.britannica.com/place/Europe", title: "Europe | History, Countries, Map, & Facts | Britannica", description: "Europe, second smallest of the world's continents, composed of the westward-projecting peninsulas of Eurasia (the great landmass that it shares with Asia)."},
    {id: 3, url: "https://ec.europa.eu/culture/creative-europe", title: "Creative Europe | Culture and Creativity - European ...", description: "Creative Europe programme strands · Culture sub-programme. Culture sector initiatives, such as those promoting cross-border cooperation, platforms, networking, ..."},
    {id: 4, url: "https://www.aljazeera.com/europe/", title: "Europe News | Today's latest from Al Jazeera", description: "Stay on top of Europe latest developments on the ground with Al Jazeera's fact-based news, exclusive video footage, photos and updated maps."},
    {id: 5, url: "https://wikitravel.org/en/Europe", title: "Europe - Wikitravel", description: "Europe makes up the western one fifth of the Eurasian landmass. It's bounded by bodies of water on three sides: the Arctic Ocean to the north (the Nordkapp ..."},
    {id: 6, url: "https://www.nytimes.com/section/world/europe", title: "Europe - The New York Times", description: "The latest news, analysis and investigations from Europe."},
    {id: 7, url: "https://www.bbc.co.uk/news/world/europe", title: "Europe - BBC News", description: "Get the latest European news from BBC News in Europe: headlines, features and analysis from BBC correspondents across the European Union, EU, ..."},
    {id: 8, url: "https:www.facebook.com", title: "Europe | Facebook", description: "Europe. 1271567 likes · 13634 talking about this. The OFFICIAL Facebook page of the Swedish Rock group EUROPE as well as band members Joey Tempest,..."},
    {id: 9, url: "https://www.politico.eu/", title: "POLITICO – European Politics, Policy, Government News", description: "POLITICO Europe covers the politics, policy and personalities of the European Union. Our coverage includes breaking news, opinion pieces, and features."},
    {id: 10, url: "https://www.reuters.com/world/europe/", title: "Europe News | Latest Headlines & Stories | Reuters", description: "... future on Tuesday as lawmakers in his CDU/CSU alliance met to decide what to do after suffering their first national election defeat since 2002. Europe ... "}
]


