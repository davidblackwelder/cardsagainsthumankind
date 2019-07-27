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
  "Introducing X-treme Baseball! It's like baseball, but with [Blank]!"
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
  "Catapults."
];

const currentBlackCard =
  starterBlackCardsDeck[
    Math.floor(Math.random() * starterBlackCardsDeck.length)
  ];

const currentWhiteCard =
  starterWhiteCardsDeck[
    Math.floor(Math.random() * starterWhiteCardsDeck.length)
  ];

document.getElementById("blackCard").innerHTML = currentBlackCard;
document.getElementById("whiteCard").innerHTML = currentWhiteCard;
