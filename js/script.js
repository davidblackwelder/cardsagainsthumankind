const promptCards = [
	// Starter Deck
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
	// Red Deck
	"A remarkable new study shows that chimps have evolved their own primitive version of ____________",
	"When I pooped, what came out of my butt?",
	"In his new self-produced album, Kanye West raps over the sound of ____________",
	"And what did you bring for show and tell?",
	"Finally! A service that delivers ____________ right to your door.",
	"The blind date was going horribly until we discovered our shared interest in ____________.",
	"In Rome, there are whisperings that the Vatican has a secret room devoted to ____________.",
	"This month's Cosmo: 'Spice up your sex life by bringing ____________ into the bedroom.'",
	"This is your captain speaking. Fasten your seatbelts and prepare for ____________.",
	"Next week on the Discovery Channel, one man must survive in the depths of the Amazon with only ____________ and his wits.",
	"My country, 'tis of thee, sweet land of ____________.",
	"What has been making life difficult at the nudist colony?",
	"To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of ____________.",
	"Charades was ruined for me forever when my mom had to act out ____________.",
	"My new favorite porn star is Joey '____________' McGee.",
	"What brought the orgy to a grinding halt?",
	"The Five Stages of Grief: denial, anger, bargaining, ____________, acceptance.",
	"Your persistence is admirable, my dear Prince. But you cannot win my heart with ____________ alone.",
	"During his midlife crisis, my dad got really into ____________.",
	"As part of his daily regimen Anderson Cooper sets aside 15 minutes for ____________.",
	"Little Miss Muffet Sat on a tuffet, Eating her curds and ____________.",
	"I love being a mom. But it's tough when my kids come home filthy from ____________. That's why there's Tide.",
	"Call the law offices of Goldstein & Goldstein, because no one should have to tolerate ____________ in the workplace.",
	"Hey baby, come back to my place and I'll show you ____________.",
	"I'm not like the rest of you. I'm too rich and busy for ____________.",
	"Awww, sick! I just saw this skater do a 720 kickflip into ____________!",
	"Tonight on 20/20: What you don't know about ____________ could kill you.",
	"I learned the hard way that you can't cheer up a grieving friend with ____________.",
	"In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated ____________.",
	"What left this stain on my couch?",
	"In the seventh circle of Hell, sinners must endure ____________ for all eternity.",
	"And I would have gotten away with it, too, if it hadn't been for ____________!",
	"When all else fails, I can always masturbate to ____________.",
	"Members of New York's social elite are paying thousands of dollars just to experience ____________.",
	"____________. Awesome in theory, kind of a mess in practice.",
	"In his newest and most difficult stunt, David Blaine must escape from ____________.",
	"Next time on Dr. Phil: How to talk to your child about ____________.",
	"Future historians will agree that ____________ marked the beginning of America's decline.",
	"During high school, I never really fit in until I found ____________ club.",
	"Lovin' you is easy 'cause you're ____________.",
	"Money can't buy me love, but it can buy me ____________.",
	"Only two things in life are certain: death and ____________.",
	"My plan for world domination begins with ____________.",
	"A successful job interview begins with a firm handshake and ends with ____________.",
	"My gym teacher got fired for adding ____________ to the obstacle course.",
	"Doctor, you've gone too far! The human body wasn't meant to withstand that amount of ____________!",
	"The secret to a lasting marriage is communication, communication, and ____________.",
	"Legend has it Prince wouldn't perform without ____________ in his dressing room.",
	"Science will never explain ____________.",
	"What's harshing my mellow, man?",
	"Welcome to Señor Frog's! Would you like to try our signature cocktail, '____________ on the Beach'?",
	"The healing process began when I joined a support group for victims of ____________.",
	"Turns out that ____________-Man was neither the hero we needed or wanted.",
	// Blue Deck
	"Everybody join hands and close your eyes. Do you sense that? That's the presence of ____________ in this room.",
	"Get ready for the movie of the summer! One cop plays by the book. The other's only interested in one thing: ____________",
	"Man, this is bullshit. Fuck ____________.",
	"To become a true Yanomami warrior, you must prove that you can withstand ____________ without crying out.",
	"Dammit, Gary. You can't just solve every problem with ____________.",
	"Do the Dew with our most extreme flavor yet! Get ready for Mountain Dew ____________!",
	"In his farewell address, George Washington famously warned Americans about the dangers of ____________.",
	"Tonight, we will have sex. And afterwards, if you'd like, a little bit of ____________.",
	"Listen, Gary, I like you. But if you want that corner office, you're going to have to show me ____________.",
	"What killed my boner?",
	"'This is madness!' 'No. THIS IS ____________!",
	"Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for ____________.",
	"What's fun until it gets weird?",
	"I'm sorry, sir, but we don't allow ____________ at the country club.",
	"You are not alone. Millions of Americans struggle with ____________ every day.",
	"Don't forget! Beginning this week, Casual Friday will officially become '____________ Friday.'",
	"Why am I broke?",
	"As king, how will I keep the peasants in line?",
	"The Japanese have developed a smaller, more efficient version of ____________.",
	"When I was a kid, we used to play Cowboys and ____________.",
	"Help me doctor, I've got ____________ in my butt!",
	"I'm pretty sure I'm high right now, because I'm absolutely mesmerized by ____________.",
	"Don't worry, kid. It gets better. I've been living with ____________ for 20 years.",
	"If you had to describe me, the Card Czar, using only one of the cards in your hand, which one would it be?",
	"And today's soup is Cream of ____________.",
	"I work my ass off all day for this family, and this is what I come home to? ____________!?",
	"And would you like those buffalo wings mild, hot, or ____________?",
	"You Won't Believe These 15 Hilarious ____________ Bloopers!",
	"Come to Dubai, where you can relax in our world-famous spas, experience the nightlife, or simply enjoy ____________ by the poolside.",
	"Yo' mama so fat she ____________!",
	"WHOOO! God damn I love ____________!",
	"Puberty is a time of change. You might notice hair growing in new places. You might develop an interest in ____________. This is normal.",
	"James is a lonely boy. But when he discovers a secret door in his attic, he meets a magical new friend: ____________.",
	"Having the worst day EVER. #____________",
	"Do not fuck with me! I am literally ____________ right now.",
	"I'm Miss Tennessee, and if I could make the world better by changing one thing, I would get rid of ____________.",
	"I'm sorry, Mrs. Chen, but there was nothing we could do. At 4:15 this morning, your son succumbed to ____________.",
	"What's making things awkward in the sauna?",
	"My grandfather worked his way up from nothing. When he came to this country, all he had was the shoes on his feet and ____________.",
	"I have a strict policy. First date, dinner. Second date, kiss. Third date, ____________.",
	"Why won't you make love to me anymore? Is it ____________?",
	"It lurks in the night. It hungers for flesh. This summer, no one is safe from ____________.",
	"Here at the Academy for Gifted Children, we allow students to explore ____________ at their own pace.",
	"The six things I could never do without: oxygen, facebook, chocolate, netflix, friends, and ____________ LOL!",
	"Hi, this is Jim from accounting. We noticed a $1,200 charge labeled '____________.' Can you explain?",
	"Life's pretty tough in the fast lane. That's why I never leave the house without ____________.",
	"This is the prime of my life. I'm young, hot, and full of ____________.",
	"Behind every powerful man is ____________.",
	"Do you lack energy? Does it sometimes feel like the whole world is ____________? Ask your doctor about Zoloft.",
	"How am I compensating for my tiny penis?",
	"You've seen the bearded lady! You've seen the ring of fire! Now, ladies and gentlemen, feast your eyes upon ____________!",
	"Y'all ready to get this thing started? I'm Nick Cannon, and this is America's Got ____________.",
	"In his new action comedy, Jackie Chan must fend off ninjas while also dealing with ____________.",
	"Hi MTV! My name is Kendra, I live in Malibu, I'm into ____________, and I love to have a good time.",
	"She's up all night for good fun. I'm up all night for ____________.",
	"2 AM in the city that never sleeps. The door swings open and she walks in, legs up to here. Something in her eyes tells me she's looking for ____________.",
	"Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with ____________: priceless.",
	"Now in bookstores: 'The Audacity of ____________,' by Barack Obama",
	"Wes Anderson's new film tells the story of a precocious child coming to terms with ____________.",
	"This is America. If you don't work hard, you don't succeed. I don't care if you're black, white, purple, or ____________.",
	"I don't mean to brag, but they call me the Michael Jordan of ____________.",
	"Dear Leader Kim Jong-un, our village praises your infinite wisdom with a humble offering of ____________.",
	// Green Deck
	"Girls just wanna have ____________.",
	"Dance like there's nobody watching, love like you'll never be hurt, and live like you're ____________.",
	"Feeling so grateful! #amazing #mylife #____________.",
	"What's the most problematic?",
	"What's the gayest?",
	"What totally destroyed my asshole?",
	"Mom's to-do list: 1. Buy groceries 2. Clean up ____________ 3. Soccer practice.",
	"Why am I laughing and crying and taking off my clothes?",
	"I don't believe in God. I believe in ____________.",
	"She's a lady in the streets, ____________ in the sheets.",
	"Then the princess kissed the frog, and all of a sudden the frog was ____________!",
	"I've got rhythm, I've got music, I've got ____________. Who could ask for anything more?",
	"What's about to take this dance floor to the next level?",
	"No, no, no, no, no, no, NO! I will NOT let ____________ ruin this wedding.",
	"CNN breaking news! Scientists discover ____________.",
	"Coming to Red Lobster this month, ____________.",
	"Most Americans would not vote for a candidate who is openly ____________.",
	"Ooo, daddy like ____________.",
	"Congratulations! You have been selected for our summer internship program. While we are unable to offer a salary, we can offer you ____________.",
	"Best you go back where you came from, now. We don't take too kindly to ____________ in these parts.",
	"In the 1950s, psychologists prescribed ____________ as a cure for homosexuality.",
	"Summer lovin', had me a blast. ____________, happened so fast.",
	"As reparations for slavery, all African Americans will receive ____________.",
	"LSD + ____________ = really bad time.",
	"What are all those whales singing about?",
	"With a one-time gift of just $10, you can save this child from ____________.",
	"As Teddy Roosevelt said, the four manly virtues are honor, temperance, industry, and ____________.",
	"The top Google auto-complete results for 'Barack Obama': Barack Obama height. Barack Obama net worth. Barack Obama ____________.",
	"Son, take it from someone who's been around the block a few times. Nothin' puts her in the mood like ____________.",
	"Art isn't just a painting in a stuffy museum. Art is alive. Art is ____________.",
	"Run, run, as fast as you can! You can't catch me. I'm ____________!",
	"You won't believe what's in my pussy. It's ____________.",
	"I'm sorry, sir, but your insurance plan doesn't cover injuries caused by ____________.",
	"Errbody in the club ____________.",
	"What turned me into a Republican?",
	"I may not be muct to look at, but I fuck like ____________.",
	"I tell you, it was a non-stop fuckfest. When it was over, my asshole looked like ____________.",
	"One more thing. Watch out for Big Mike. They say he killed a man with ____________.",
	"There is no God. It's just ____________ and then you die.",
	"Google Calendar alert: ____________ in 10 minutes.",
	"Well, shit. My eyes ain't so good, but I'll eat my own boot if that ain't ____________!",
	"She's jsut one of the guys, you know? She likes beer, and football, and ____________.",
	"If at first you don't succeed, try ____________.",
	"This Friday at the Liquid Lounge, it's ____________ Night! Ladies drink free.",
	"What will end racism once and for all?",
	"I'll take the BBQ bacon burger with a fried egg and fuck it how about ____________.",
	"What sucks balls?",
	"Well if ____________ is a crime, then lock me up!",
	"I've had a horrible vision, father. I saw mountains crumbling, stars falling from the sky. I saw ____________.",
	"We do not shake with our left hands in this country. That is the hand we use for ____________.",
	"Oh no! Siri, how do I fix ____________?",
	"You know who else liked ____________? Hitler.",
	"Poor Brandon, still living in his parents' basement. I heard he never got over ____________.",
];

const responseCards = [
	// Starter Deck
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
	// Red Deck
	"The baby that ruined my pussy.",
	"Being white.",
	"Being black.",
	"Fuck Mountain.",
	"Me.",
	"The mixing of the races.",
	"Double penetration.",
	"Daddy's belt.",
	"Drinking my bro's pee-pee right out of his peen.",
	"Cumming deep inside my best bro.",
	"Sneezing, farting, and cumming at the same time.",
	"Blowing some dudes in an alley.",
	"Fisting.",
	"Getting your dick stuck in a Chinese finger trap with another dick.",
	"A vagina that leads to another dimension.",
	"Overpowering your father.",
	"Stockholm Syndrome.",
	"Quiche.",
	"A black-owned and operated business.",
	"Jesus.",
	"Ripping open a man's chest and pulling out his still-beating heart.",
	"Ryan Gosling riding in on a white horse.",
	"Santa Claus.",
	"A spontaneous conga line.",
	"Disco fever.",
	"My father, who died when I was seven.",
	"A Japanese toaster you can fuck.",
	"Existing.",
	"A Piñata full of scorpions.",
	"Mooing.",
	"Subduing a grizzly bear and making her your wife.",
	"Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.",
	"The shambling corpse of Larry King.",
	"An unhinged Ferris wheel rolling toward the sea.",
	"Survivor's guilt.",
	"Living in a trash can.",
	"Wearing an octopus for a hat.",
	"A fortuitous turnip harvest.",
	"Tiny nipples.",
	"Getting hilariously gang-banged by the Blue Man Group.",
	"Mad hacky-sack skills.",
	"Leveling up.",
	"Literally eating shit.",
	"Making the penises kiss.",
	"24-hour media coverage.",
	"Medieval Times Dinner & Tournament.",
	"Moral ambiguity.",
	"One thousand Slim Jims.",
	"Having $57 in the bank.",
	"Ominous background music.",
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
