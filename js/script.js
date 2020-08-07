const starterBlackCardsDeck = [
  "It's a pity that kids these days are all getting invloved with [blank]",
  "What's a girl's best friend?",
  "While the United States raced the Soviet Union to the moon, the Mexican governement funneled millions of pesos into research on [blank]",
  "What gets better with age?",
  "War! What is it good for?",
  "I drink to forget [blank]",
  "How did I lose my virginity?",
  "What is George W. Bush thinking about right now?",
  "[Blank]. Betcha can't have just one!",
  "Why am I sticky?",
  "What will always get you laid?",
  "Next from J.K. Rowing: Harry Potter and the Chamber of [blank].",
  "What's that smell?",
  "Here is the church. Here is the steeple. Open the doors and there is [Blank].",
  "What gives me uncontrollable gas?",
  "Introducing X-treme Baseball! It's like baseball, but with [Blank]!",
  "What never fails to liven up the party?",
  "What's the next Happy Meal&#174; toy?",
  "Life for American Indians was forever changed when the White Man introduced them to [BLANK].",
  "What would grandma find disturbing, yet oddly charming?",
  "Daddy, why is mommy crying?",
  "What ended my last relationship?",
  "What is Batman's guilty pleasure?",
  "[BLANK]. That's how I want to die.",
  "What's there a ton of in heaven?",
  "In L.A. County Jail, word is you can trade 200 cigarettes for [BLANK].",
  "I'm sorry, Professor, but I couldn't complete my homework because of [BLANK].",
  "This is the way the world ends. This is the way the world ends. Not with a bang but with [BLANK].",
  "After the earthquake, Sean Penn brought [BLANK] to the people of Haiti.",
  "I get by with a little help from [BLANK].",
  "When I am President of the United States, I will create the department of [BLANK].",
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
  "The Tempur-Pedic&#174; Swedish Sleep System.",
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
