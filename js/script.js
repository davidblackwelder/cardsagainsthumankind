const starterBlackCardsDeck = [
  "It's a pity that kids these days are all getting invloved with ____________.",
  "What's a girl's best friend?",
  "While the United States raced the Soviet Union to the moon, the Mexican governement funneled millions of pesos into research on ____________.",
  "What gets better with age?",
  "War! What is it good for?",
  "I drink to forget ____________.",
  "How did I lose my virginity?",
  "What is George W. Bush thinking about right now?",
  "____________. Betcha can't have just one!",
  "Why am I sticky?",
  "What will always get you laid?",
  "Next from J.K. Rowing: Harry Potter and the Chamber of ____________.",
  "What's that smell?",
  "Here is the church. Here is the steeple. Open the doors and there is ____________.",
  "What gives me uncontrollable gas?",
  "Introducing X-treme Baseball! It's like baseball, but with ____________!",
  "What never fails to liven up the party?",
  "What's the next Happy Meal toy?",
  "Life for American Indians was forever changed when the White Man introduced them to ____________.",
  "What would grandma find disturbing, yet oddly charming?",
  "Daddy, why is mommy crying?",
  "What ended my last relationship?",
  "What is Batman's guilty pleasure?",
  "____________. That's how I want to die.",
  "What's there a ton of in heaven?",
  "In L.A. County Jail, word is you can trade 200 cigarettes for ____________.",
  "I'm sorry, Professor, but I couldn't complete my homework because of ____________.",
  "This is the way the world ends. This is the way the world ends. Not with a bang but with ____________.",
  "After the earthquake, Sean Penn brought ____________. to the people of Haiti.",
  "I get by with a little help from ____________.",
  "When I am President of the United States, I will create the department of ____________.",
  "____________. High five, bro.",
  "When I am a billionaire, I shall erect a 50-foot statue to commemorate ____________.",
  "Instead of coal, Santa now gives the bad children ____________.",
  "Today on Maury: 'Help! My son is ____________!'",
  "MTV's new reality show features eight washed-up celebrities living with ____________.",
  "The Smithsonian Museum of Natural History has just opened an interactive exhibit on ____________.",
  "What don't you want to find in your Kung Pao chicken?",
  "What's Teach for America using to inspire inner city students to succeed?",
  "Coming to Broadway this season, ____________: The Musical.",
  "What did I bring back from Mexico?",
  "The class field trip was completely ruined by ____________.",
  "What did Vin Diesel eat for dinner?",
  "In the new Disney Channel Original Movie, Hanna Montana struggles with ____________ for the first time.",
  "But before I kill you, Mr. Bond, I must show you ____________.",
  "____________: kid-tested, mother-approved.",
  "A recent laboratory study shows that undergraduates have 50% less sex after being exposed to ____________.",
  "____________: good to the last drop.",
  "Next on ESPN2: The World Series of ____________.",
  "During sex, I like to think about ____________.",
  "Maybe she's born with it. Maybe it's ____________.",
  "What's that sound?",
  "What's the new fad diet?",
  "I got 99 problems but ____________ ain't one.",
  "____________. It's a trap!",
  "Fun tip! When your man asks you to go down on him, try surprising him with ____________ instead.",
  "When Pharaoh remained unmoved, Moses called down a Plague of ____________.",
  "What will I bring back in time to convince people that I am a powerful wizard?",
  "Why do I hurt all over?",
  "A romantic candlelit dinner would be incomplete without ____________.",
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

$("#my-form").submit(function (e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function () {
    alert("Thank you!");
  });
});
