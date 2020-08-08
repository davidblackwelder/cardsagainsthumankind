const promptCards = [
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
  "What's my secret power?",
  "How am I maintaining my relationship status?",
  "Alternative medicine is now embracing the curative powers of ____________.",
  "What helps Obama unwind?",
  "Why can't I sleep at night?",
  "TSA guidelines now prohibit ____________ on airplanes.",
  "What's my anti-drug?",
  "What did the US airdrop to the children of Afghanistan?",
  "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",
  "What am I giving up for Lent?",
  "I do not know with what weapons World War III will be fought, but World World IV will be fought with ____________.",
  "What's the most emo?",
  "What are my parents hiding from me?",
  "White people like ____________.",
  "Dear Abby, I'm having some trouble with ____________ and would like your advice.",
  "The new Chevy Tahoe. With the power and space to take ____________ everywhere you go.",
];

const responseCards = [
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
  "Autocannibalism.",
  "Lockjaw.",
  "Goblins.",
  "Fiery poops.",
  "A windmill full of corpses.",
  "The unstoppable tide of Islam.",
  "The milkman.",
  "The Kool-Aid Man.",
  "A pyramid of severed heads.",
  "Pedophiles.",
  "Dead parents.",
  "Horse meat.",
  "Used panties.",
  "Nipple blades.",
  "Keanu Reeves.",
  "Not wearing pants.",
  "My black ass.",
  "Farting and walking away.",
  "Harry Potter erotica.",
  "Oompa-Loompas.",
  "Dying of dysentery.",
  "Waking up half-naked in a Denny's parking lot.",
  "A lifetime of sadness.",
  "The entire Mormon Tabernacle Choir.",
  "Dead babies.",
  "The Devil himself.",
  "Boogers.",
  "The light of a billion suns.",
  "The Rev. Dr. Martin Luther King, Jr.",
  "Kanye West.",
  "Teenage pregnancy.",
  "Tasteful sideboob.",
  "A sea of troubles.",
  "The Underground Railroad.",
  "Unfathomable stupidity.",
  "Explosions.",
  "Our first chimpanzee President.",
  "Alcoholism.",
  "Michelle Obama's arms.",
  "A fetus.",
  "Dying",
  "Crippling debt.",
  "Hope.",
  "Advice from a wise, old black man.",
  "Tom Cruise.",
  "Five-Dollar Footlongs.",
  "Domino's Oreo Dessert Pizza.",
  "Expecting a burp and vomiting on the floor.",
  "Hormone injections.",
  "Preteens.",
  "Sexual peeing.",
  "My soul.",
  "Sean Connery.",
  "Cheating in the Special Olympics.",
  "Licking things to claim them as your own.",
  "A brain tumor.",
  "Bill Nye the Science Guy.",
  "Her Majesty, Queen Elizabeth II.",
  "Whipping it out.",
  "Passive-aggressive Post-It notes.",
  "Some god damn peace and quiet.",
  "Asians who aren't good at math.",
  "Not giving a shit about the Third World.",
  "White privilege.",
  "50,000 volts straight to the nipples.",
  "The penny whistle solo from 'My Heart Will Go On.'",
  "A cooler full of organs.",
  "My humps.",
  "Shapeshifters.",
  "The inevitable heat death of the universe.",
  "A salty surprise.",
  "Full frontal nudity.",
  "Heteronormativity.",
  "Ghosts.",
  "Being rich.",
  "AXE Body Spray.",
  "A sassy black woman.",
  "A homoerotic volleyball montage.",
  "An asymmetric boob job.",
  "Mr. Clean right behind you.",
  "Shaquille O'Neal's acting carrer.",
  "Opposable thumbs.",
  "Being a dick to children.",
  "Homeless people.",
  "Heartwarming orphans.",
  "Saying 'I love you.'",
  "Children on leashes.",
  "Lance Armstrong's missing testicle.",
  "Take-backsies.",
  "Sweet, sweet vengeance.",
  "The Pope.",
  "Mutually assured destruction.",
  "Hurrican Katrina.",
  "Not reciprocating oral sex.",
  "A saxophone solo.",
  "Lady Gaga.",
  "New Age music.",
  "Pretending to care.",
  "Viagra.",
  "Firing a rifle into the air while balls deep in a squealing hog.",
  "Judge Judy",
  "Chunks of dead hitchhiker.",
  "The hardworking Mexican.",
  "Waiting 'till marriage.",
  "Silence.",
  "8 oz. of sweet Mexican black-tar heroin.",
  "Science.",
  "An icepick lobotomy.",
  "Sex with Patrick Stewart.",
  "The wrath of Vladimir Putin.",
  "A mime having a stroke.",
  "Count Chocula.",
  "Former President George W. Bush.",
  "My genitals.",
  "Ronald Reagan.",
  "Muhammad (Praise Be Unto Him).",
  "The miracle of childbirth.",
  "Copping a feel.",
  "Adderall.",
  "An endless stream of diarrhea.",
  "A bitch slap.",
  "Overcompensation.",
  "Puppies!",
  "Aaron Burr.",
  "Child beauty pageants.",
  "Prancing.",
  "Object permanence.",
  "Estrogen.",
  "Figgy pudding.",
  "Winking at old people.",
  "Balls.",
  "Poopy diapers.",
  "The homoxsexual agenda.",
  "Battlefield amputations.",
  "Darth Vader.",
  "Being on fire.",
  "Men.",
  "My vagina.",
  "Republicans.",
  "Same-sex ice dancing.",
  "The Great Depression.",
  "Having anuses for eyes.",
  "Me time.",
  "Home video of Oprah sobbing into a Lean Cuisine.",
  "Crumbs all over the god damn carpet.",
  "Half-assed foreplay.",
  "Inappropriate yodeling.",
  "Tentacle porn.",
  "Incest.",
  "Vigorous jazz hands.",
  "Famine.",
  "Fancy Feast.",
  "Necrophilia.",
  "Racially-biased SAT questions.",
  "Seppuku.",
  "A mopey zoo lion.",
  "The profoundly handicapped.",
  "Edible underpants.",
  "The pirate's life.",
  "Dropping a chandelier on your enemies and riding the rope up.",
  "Making a pouty face.",
  "Fingering.",
  "Dark and mysterious forces beyond our control.",
  "An ugly face.",
  "Giving 110%.",
  "Being fat and stupid.",
  "Public ridicule.",
  "Dry heaving.",
  "RoboCop.",
  "The wonders of the Orient.",
  "Centaurs.",
  "The Little Engine That Could.",
  "Old-people smell.",
  "Synergistic managment solutions.",
  "Child abuse.",
  "Robert Downey, Jr.",
  "The Chinese gymnastics team.",
  "Raptor attacks.",
  "Man meat.",
  "Morgan Freeman's voice.",
  "Bees?",
  "Smegma.",
  "John Wilkes Booth.",
  "Pulling out.",
  "Crystal meth.",
  "My relationship status.",
  "Poorly-timed Holocaust jokes.",
  "Getting married, having a few kids, buying some stuff, retiring to Florida and dying.",
  "Active listening.",
  "Invading Poland.",
  "Extremely tight pants.",
  "Doing the right thing.",
  "The token minority.",
  "Establishing dominance.",
  "The American Dream.",
  "AIDS.",
  "A bucket of fish heads.",
  "A snapping turtle biting the tip of your penis.",
  "Jerking off into a pool of children's tears.",
  "GoGurt.",
  "Shiny objects.",
  "Barack Obama.",
  "The violation of our most basic human rights.",
  "A gassy antelope.",
  "A ball of earwax, semen, and toenail clippings.",
  "Flying sex snakes.",
  "Multiple stab wounds.",
  "An oversized lollipop.",
  "Gandhi.",
  "Nickelback.",
  "Flesh-eating bacteria.",
  "A defective condom.",
  "Testicular torsion.",
  "Throwing a virgin into a volcano.",
  "Seeing Grandma naked.",
  "Crucifixion.",
  "Assless chaps.",
  "A middle-aged man on roller skates.",
  "Consensual sex.",
  "Brown people.",
  "Funky fresh rhymes.",
  "Arnold Schwarzenegger.",
  "Erectile dysfunction.",
  "A monkey smoking a cigar.",
  "The Hustle.",
  "Racism.",
  "Eugenics.",
  "Repression.",
  "Land mines.",
  "A thermonuclear detonation.",
  "Kids with ass cancer.",
  "Civilian casualties.",
  "Inserting a Mason jar into my anus.",
  "The morbidly obese.",
  "Agriculture.",
  "The Patriarchy.",
  "Foreskin.",
  "Black people.",
  "My ex-wife.",
  "A falcon with a cap on its head.",
  "Three dicks at the same time.",
  "Drinking alone.",
  "Sunshine and rainbows.",
  "Cuddling.",
  "This year's mass shooting.",
  "When you fart and a little bit comes out.",
  "The art of seduction.",
  "Finger painting.",
  "Friction.",
  "A stray pube.",
  "The glass ceiling.",
  "A micropenis.",
  "Lactation.",
  "The Force.",
  "A good sniff.",
  "Dick Cheney.",
  "The Big Bang.",
  "A mating display.",
  "Pac-Man uncontrollably guzzling cum.",
  "Getting so angry that you pop a boner.",
  "Eating the last known bison.",
  "Third base.",
  "Becoming a blueberry.",
  "Daddy issues.",
  "Gloryholes.",
  "Panda sex.",
  "The true meaning of Christmas.",
  "Hot Pockets.",
  "Hip hop jewels.",
  "Getting naked and watching Nickelodeon.",
  "Dick fingers.",
  "Stalin.",
  "Vehicular manslaughter.",
  "Peeing a little bit.",
  "Serfdom.",
  "The rhythms of Africa.",
  "A can of whoop-ass.",
  "A really cool hat.",
  "Chainsaws for hands.",
  "Powerful thighs.",
  "The chronic.",
  "David Bowie flying in on a tiger made of lightning.",
  "Swooping.",
  "Embryonic stem cells.",
  "Christopher Walken.",
  "Getting really high.",
  "Holding down a child and farting all over him.",
  "The Holy Bible.",
  "A zesty breakfast burrito.",
  "Court-ordered rehab.",
  "A time travel paradox.",
  "The Hamburglar.",
  "One trillon dollars.",
  "Yeast.",
  "The Blood of Christ.",
  "Authentic Mexican cuisine.",
  "Auschwitz.",
  "A balanced breakfast.",
  "A bleached asshole.",
  "Grandma.",
  "World Peace.",
  "Friendly fire.",
  "Coat hanger abortions.",
  "Hospice care.",
  "German dungeon porn.",
  "Taking off your shirt.",
  "Magnets.",
  "Natural male enhancement.",
  "Ethnic cleansing.",
  "My sex life.",
  "Frolicking.",
  "Penis envy.",
  "Free samples.",
  "A Super Soaker full of cat pee.",
  "Spectacular abs.",
  "All-you-can-eat shrimp for $4.99.",
  "Menstrual rage.",
  "Wifely duties.",
  "Sexual tension.",
  "A disappointing birthday party.",
  "Kamikaze pilots.",
  "Grave robbing.",
  "The terrorists.",
  "Historically black colleges.",
  "African children.",
  "The Make-A-Wish Foundation.",
  "A tiny horse.",
  "A man on the brink of orgasm.",
  "The placenta.",
  "The Boy Scouts of America.",
  "William Shatner.",
  "A subscription to Men's Fitness.",
  "Sexy pillow fights.",
  "The Rapture.",
  "Natural selection.",
  "Skeletor.",
  "Being a motherfuckering sorcerer.",
  "Being marginalized.",
  "Jobs.",
  "The World of Warcraft.",
  "Bitches.",
  "Riding off into the sunset.",
  "My collection of high-tech sex toys.",
  "Fear itself.",
  "Penis breath.",
  "A gentle caress of the inner thigh.",
  "Doin' it in the butt.",
  "Poor people.",
  "White-man scalps.",
  "The Jews.",
  "The heart of a child.",
  "Smallpox blankets.",
  "A bag of magic beans.",
];

const getPromptCardText = function () {
  return promptCards[Math.floor(Math.random() * promptCards.length)];
};

const getResponseCardText = function () {
  return responseCards[Math.floor(Math.random() * responseCards.length)];
};

const renderCards = function (promptCard, responseCard) {
  document.querySelector("#prompt-card-text").innerHTML = "";
  document.querySelector("#response-card-text").innerHTML = "";

  const promptCardText = document.createElement("p");
  promptCardText.textContent = promptCard;
  document.querySelector("#prompt-card-text").appendChild(promptCardText);

  const responseCardText = document.createElement("p");
  responseCardText.textContent = responseCard;
  document.querySelector("#response-card-text").appendChild(responseCardText);
};

renderCards(getPromptCardText(), getResponseCardText());

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();
  renderCards(getPromptCardText(), getResponseCardText());
});

$("#my-form").submit(function (e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function () {
    alert("Thank you!");
  });
});
