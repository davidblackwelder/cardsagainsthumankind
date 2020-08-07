const starterBlackCardsDeck = [
  "It's a pity that kids these days are all getting invloved with _____",
  "What's a girl's best friend?",
  "While the United States raced the Soviet Union to the moon, the Mexican governement funneled millions of pesos into research on _____",
  "What gets better with age?",
  "War! What is it good for?",
  "I drink to forget _____",
  "How did I lose my virginity?",
  "What is George W. Bush thinking about right now?",
  "_____. Betcha can't have just one!",
  "Why am I sticky?",
  "What will always get you laid?",
  "Next from J.K. Rowing: Harry Potter and the Chamber of _____.",
  "What's that smell?",
  "Here is the church. Here is the steeple. Open the doors and there is _____.",
  "What gives me uncontrollable gas?",
  "Introducing X-treme Baseball! It's like baseball, but with _____!",
  "What never fails to liven up the party?",
  "What's the next Happy Meal toy?",
  "Life for American Indians was forever changed when the White Man introduced them to _____.",
  "What would grandma find disturbing, yet oddly charming?",
  "Daddy, why is mommy crying?",
  "What ended my last relationship?",
  "What is Batman's guilty pleasure?",
  "_____. That's how I want to die.",
  "What's there a ton of in heaven?",
  "In L.A. County Jail, word is you can trade 200 cigarettes for _____.",
  "I'm sorry, Professor, but I couldn't complete my homework because of _____.",
  "This is the way the world ends. This is the way the world ends. Not with a bang but with _____.",
  "After the earthquake, Sean Penn brought _____ to the people of Haiti.",
  "I get by with a little help from _____.",
  "When I am President of the United States, I will create the department of _____.",
];

const starterWhiteCardsDeck = [
  "Helplessly giggling at the mention of Hutus and Tutsis.",
  "An M16 assualt rifle.",
  "Bingeing and purging.",
  "Nicolas Cage",
  "A Fleshlight",
  "Strong female characters",
  "An M. Night Shyamalan plot twist.",
  "The female orgasm",
  "Teaching a robot to love.",
  "Rush Limbaugh's soft, shitty body.",
  "Justin Bieber",
  "Pixelated bukkake.",
  "Vigilante justice.",
  "Destroying the evidence.",
  "Leprosy.",
  "Anal beads.",
  "Nazis.",
  "Sean Penn.",
  "Genuine human connection.",
  "Classist undertones.",
  "Wiping her butt.",
  "Pictures of boobs.",
  "Emma Watson",
  "White people.",
  "Sniffing glue.",
  "A sad handjob.",
  "BATMAN!!!",
  "Women in yogurt commercials.",
  "Running out of semen.",
  "Hot cheese.",
  "Cards Against Humanity.",
  "Laying an egg.",
  "Queefing",
  "An erection that last longer than four hours.",
  "An Oedipus complex",
  "Stephen Hawking talking dirty.",
  "Giving birth to the Antichrist.",
  "Catapults.",
  "Elderly Japanese men.",
  "Surprise sex!",
  "The clitoris.",
  "The invisible hand.",
  "Your weird brother.",
  "72 virgins.",
  "Italians.",
  "God.",
  "Joe Biden.",
  "A micropig wearing a tiny raincoat and booties.",
  "Cybernetic enhancements.",
  "Growing a pair.",
  "Flightless birds.",
  "The Tempur-Pedic Swedish Sleep System.",
  "Spontaneous human combustion.",
  "Hot people.",
  "Genghis Khan.",
  "Self-loathing.",
  "Praying the gay away.",
  "Poor life choices.",
  "The KKK.",
  "The Amish.",
  "Altar boys.",
  "Wet dreams.",
  "Emotions.",
  "A tribe of warrior women.",
  "Bio-engineered assault turtles with acid breath.",
  "The folly of man.",
  "Soup that is too hot.",
  "Miley Cyrus at 55.",
  "Geese.",
  "Lumberjack fantasies.",
  "Concealing a boner.",
  "Road head.",
  "A murder most foul.",
  "Sperm whale.",
  "The gays.",
  "Exactly what you'd expect.",
  "The Trail of Tears.",
  "Daniel Radcliffe's delicious asshole.",
  "The South.",
  "Amputees.",
  "Puberty.",
  "Vikings.",
  "Lunchables.",
  "MechaHitler.",
  "Toni Morrison's vagina.",
  "Horrifying laser hair removal accidents.",
  "The cool, refreshing taste of Pepsi.",
  "Masturbation.",
  "Being fabulous.",
  "Women's suffrage.",
  "Scientology.",
  "Switching to Geico.",
  "Police brutality.",
  "Two midgets shitting into a bucket.",
  "The Care Bear Star.",
  "Jewish fraternities.",
  "A robust mongoloid.",
  "My inner demons.",
  "The Three-Fifths compromise.",
  "Natalie Portman.",
  "A live studio audience.",
  "Breaking out into song and dance.",
  "YOU MUST CONSTRUCT ADDITIONAL PYLONS.",
  "Michael Jackson.",
  "Pooping back and forth. Forever.",
  "Mouth herpes.",
];

const getBlackCardText = function () {
  return starterBlackCardsDeck[
    Math.floor(Math.random() * starterBlackCardsDeck.length)
  ];
};

const getWhiteCardText = function () {
  return starterWhiteCardsDeck[
    Math.floor(Math.random() * starterWhiteCardsDeck.length)
  ];
};

const renderCards = function (blackCard, whiteCard) {
  document.querySelector("#black-card-text").innerHTML = "";
  document.querySelector("#white-card-text").innerHTML = "";

  const blackCardText = document.createElement("p");
  blackCardText.textContent = blackCard;
  document.querySelector("#black-card-text").appendChild(blackCardText);

  const whiteCardText = document.createElement("p");
  whiteCardText.textContent = whiteCard;
  document.querySelector("#white-card-text").appendChild(whiteCardText);
};

renderCards(getBlackCardText(), getWhiteCardText());

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  renderCards(getBlackCardText(), getWhiteCardText());
});
