const dictionary = {
    "beautifully presented": "hoovered",
    "luxury apartment": "miserable, overpriced little hovel",
    "luxury flat": "miserable, overpriced little hovel",
    "of luxury": "of 'luxury'",
    "luxurious": "miserable",
    "a luxury": "an extortionate",
    "luxury": "somewhat comfortable",
    "stunningly": "passably",
    "stunning": "passable",
    "impressive": "underwhelming",
    "high standard": "bare minimum",
    "very": "sort of",
    "stylishly": "tackily",
    "stylish": "tacky",
    "bright": "tasteless",
    "lots of light": "windows", 
    "light ": "lurid ",
    "spacious": "disappointing",
    "extraordinary": "ordinary",
    "exceptionally": "unexceptionally",
    "exceptional": "unexceptional",
    "exclusive": "aloof",
    "fashionable": "conceited",
    "vibrant": "garish",
    "charming": "bleak",
    "love ":"hate ",
    "spectacular": "middling",
    "lovely": "lacklustre",
    "brilliant":"horrendous",
    "tastefully": "cheaply",
    "awesome": "awful",
    "beautiful": "drab",
    "cute":"nauseating",
    "wonderfully": "horrendously",
    "a superb": "an unremarkable",
    "a superbly": "an unremarkably",
    "superbly": "contemptibly",
    "superb": "unremarkable",
    "super ": "shitty ",
    "wonderful": "so-so",
    "homely": "small",
    "perfectly": "terribly",
    "perfect": "terrible",
    "enviable": "okay",
    "quiet": "lifeless",
    "peaceful": "boring",
    "sleek": "small",
    "prestigious": "pompous",
    "enviably": "insufferably",
    "fabulous": "dreadful",
    "desirable": "godforsaken",
    "marvelous": "tolerable",
    "comfortable": "desolate",
    "well-presented": "clean-ish",
    "great": "shit",
    "gorgeous": "grim",
    "superior": "snooty",
    "massive": "reasonably-sized",
    "trendy": "wanky",
    "incredible": "insufferable",
    "ideal": "awful",
    "ideally": "awfully",
    "nice": "bog-standard",
    "pretty": "grotty",
    "convenient": "frustrating",
    "good size": "high price",
    "good ": "poor ",
    "prime": "piss-poor",
    "substantial": "substandard",
    "brand new": "hastily assembled",
    "not to be missed": "somewhere you could probably live without",
    "ample ": "insufficient ",
    "airy": "bare",
    "an airy": "a bare",
    "remarkable": "unremarkable",
    "a remarkable": "an unremarkable",
    "excellently": "awkwardly", 
    "an excellent": "a decidedly average",
    "excellent": "decidedly average",
    "an extremely": "a somewhat",
    "extremely": "moderately",
    "breathtaking": "so-so",
    "boasts": "has",
    "upmarket": "expensive",
    "expansive": "expensive",
    "attractive": "expensive",
    "unique": "expensive",
    "sought after": "expensive",
    "sought-after": "expensive",
    "exquisite": "expensive",
    "contemporary": "new-ish",
    "plenty of storage": "cupboards",
    "period features": "outdated furnishings",
    "highly sought after": "rip-off",
    "cosy": "tiny",
    "cozy": "tiny",
    "intimate": "cramped",
    "bijou": "claustrophobic",
    "an up and coming": "a stabby",
    "picturesque":"dismal",
    "impeccable":"imperfect",
    "up and coming": "stabby",
    "available immediately": "currently sitting empty, so we'll be pressuring you to take this one",
    "is available now":"currently sitting empty, so we'll be pressuring you to take this one",
    "available now": "please, we're desperate",
    "available to rent now": "currently sitting empty, so we'll be pressuring you to take this one",
    "a fantastic": "an alright",
    "fantastic": "alright",
    "immaculately presented": "unexceptional",
    "an immaculate": "a clean-ish",
    "immaculate": "clean-ish",
    "amazingly": "underwhelmingly",
    "amazing ": "okay ",
    "modern": "characterless",
    "outstanding": "adequate",
    "delightful": "depressing",
    "popular": "pricey",
    "benefits from": "has",
    "magnificent":"second-rate",
    "enormous":"ordinary-sized",
    "flawless":"flawed",
    "a generous":"an insufficient",
    "generous":"insufficient",
    "an exciting":"a gaudy",
    "exciting":"gaudy",
    "coveted":"high-priced",
    "huge":"reasonably-sized",
    "appealing":"appalling",

    "fully fitted": "",
    "fully-fitted": "",
    "newly fitted": "",
    "newly-fitted": "",

    "well maintained": "working",
    "well-maintained": "working",

    "well proportioned": "jammed-in",
    "well-proportioned": "jammed-in",

    "well presented": "clean-ish",
    "well-presented": "clean-ish",

    "purpose built": "",
    "purpose-built": "",

    "recently refurbished": "recently painted",
    "newly refurbished": "recently painted",
    "refurbished": "repainted",
    "renovated":"repainted",
    "modernised": "done-on-the-cheap",

    "studio apartment": "hovel",
    "studio flat": "cupboard",
    "maisonette": "cupboard",
    "lateral apartment": "flat",
    "lateral flat": "flat",

    "natural lighting": "bog-standard sunlight",
    "natural light": "bog-standard sunlight",

    "to the market": "",
    "pleased to present": "trying to shift",
    "pleased to offer": "trying to shift",
    "delighted to offer": "trying to get rid of",
    "delighted to present": "trying to shift",
    "happy to introduce": "trying to shift",
    "in the heart of": "somewhere kinda near to",
    "proud to present": "trying to earn a hefty commission on",
    
    "click here": "please, we're desperate",
    "call now": "we're desperate",
    "viewings highly recommended": "viewings will be high-pressure",
    "ex local authority": "ex-council (meaning someone has made a tidy profit off of this)",
    "ex-local authority": "ex-council (meaning someone has made a tidy profit off of this)",
    "ex council": "ex-council (meaning someone has made a tidy profit off of this)",

    // Using negative lookaheads to stop these from getting replaced over and over
    "clean(?!-ish)": "clean-ish",
    "fully furnished(?! \\(with IKEA's cheapest\\))": "fully furnished (with IKEA's cheapest)",
    "large(?! \\(in the photos, at least\\))": "large (in the photos, at least) ",
    "no lounge(?! \\(landlord turned it into another bedroom for more profit\\))": "no lounge (landlord turned it into another bedroom for more profit)",
    "no living area(?! \\(landlord thinks you don't deserve one\\))": "no living area (landlord thinks you don't deserve one)",
    "no living room(?! \\(landlord turned it into another bedroom to milk more money out of the place\\))": "no living room (landlord turned it into another bedroom to milk more money out of the place)",
    "no dss(?! \\(the landlord doesn't think people on benefits deserve a home\\))": "no dss (the landlord doesn't think people on benefits deserve a home)",
    "ex-council(?! \\(meaning someone has made a tidy profit off of this\\))": "ex-council (meaning someone has made a tidy profit off of this)"
}

// Had to add this because the negative lookahead regex only returns the first part of the key.
// Yes I know I could have just changed the values to something different instead.

const secondary_dictionary = {
    "clean": "clean-ish",
    "fully furnished": "fully furnished (with IKEA's cheapest)",
    "large":"large (in the photos, at least)",
    "no lounge": "no lounge (landlord turned it into another bedroom for more profit)",
    "no living area": "no living area (landlord thinks you don't deserve one)",
    "no living room": "no living room (landlord turned it into another bedroom to milk more money out of the place)",
    "no dss": "no dss (the landlord doesn't think people on benefits deserve a home)",
    "ex-council": "ex-council (meaning someone has made a tidy profit off of this)"
}