var library = JSON.parse(`
[
  {
    "Title": "A King's Ransom",
    "Series": "The 39 Clues: Cahills vs Vespers series",
    "Book Number": 2,
    "Author": "Jude Watson",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Vespers/A King's Ransom",
    "Status": "Downloaded"
  },
  {
    "Title": "Beyond the Grave",
    "Series": "The 39 Clues: Original series",
    "Book Number": 4,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "Breakaway",
    "Series": "The 39 Clues: Unstoppable series",
    "Book Number": 2,
    "Author": "Jeff Hirsh",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Unstoppable/Breakaway",
    "Status": "Downloaded"
  },
  {
    "Title": "Charlie Bone and the Beast",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 6,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Jones",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Charlie Bone and the Hidden King",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 5,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Russell Beale",
    "Publisher": "Penguin",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Charlie Bone and the Invisible Boy",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 3,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Russell Beale",
    "Publisher": "Penguin",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Charlie Bone and the Red Knight",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 8,
    "Author": "Jenny Nimmo",
    "Narrator": "",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "Charlie Bone and the Shadow",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 7,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Jones",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Countdown",
    "Series": "The 39 Clues: Unstoppable series",
    "Book Number": 3,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "Crystal Keepers",
    "Series": "The Five Kingdoms",
    "Book Number": 3,
    "Author": "Brandon Mull",
    "Narrator": "Keith Nobbs",
    "Publisher": "Simon and Schuster",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Day of Doom",
    "Series": "The 39 Clues: Cahills vs Vespers series",
    "Book Number": 6,
    "Author": "David Balacci",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Vesperse/Day of Doom",
    "Status": "Downloaded"
  },
  {
    "Title": "Death Weavers",
    "Series": "The Five Kingdoms",
    "Book Number": 4,
    "Author": "Brandon Mull",
    "Narrator": "Keith Nobbs",
    "Publisher": "Simon and Schuster",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Dragons at Crumbling Castle",
    "Series": "Single Book",
    "Book Number": 1,
    "Author": "Terry Pratchett",
    "Narrator": "Julian Rhind-tutt",
    "Publisher": "Penguin",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Emlyn's Moon",
    "Series": "The Magician Trilogy",
    "Book Number": 2,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Flashpoint",
    "Series": "The 39 Clues: Unstoppable series",
    "Book Number": 4,
    "Author": "Gordon Kor",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Unstoppable/Flashpoint",
    "Status": "Downloaded"
  },
  {
    "Title": "In Too Deep",
    "Series": "The 39 Clues: Original series",
    "Book Number": 6,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "none"
  },
  {
    "Title": "Into the Gauntlet",
    "Series": "The 39 Clues: Original series",
    "Book Number": 10,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "Leopards' Gold",
    "Series": "Chronicles of the Red King",
    "Book Number": 3,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": ""
  },
  {
    "Title": "Midnight for Charlie Bone",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 1,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Russell Beale",
    "Publisher": "Penguin",
    "Folder": "",
    "Status": ""
  },
  {
    "Title": "Mission Atomic",
    "Series": "The 39 Clues: Double cross series",
    "Book Number": 4,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "Mission Hindenburg",
    "Series": "The 39 Clues: Double cross series",
    "Book Number": 2,
    "Author": "C. Alexander London",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Double Cross/Mission Hindenburg",
    "Status": "Downloaded"
  },
  {
    "Title": "Mission Hurricante",
    "Series": "The 39 Clues: Double cross series",
    "Book Number": 3,
    "Author": "Jenny Goebel",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Double Cross/Mission Hurricane",
    "Status": "Downloaded"
  },
  {
    "Title": "Mission Titanic",
    "Series": "The 39 Clues: Double cross series",
    "Book Number": 1,
    "Author": "Jude Watson",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Double Cross/Mission Titanic",
    "Status": "Downloaded"
  },
  {
    "Title": "Nowhere to Run",
    "Series": "The 39 Clues: Unstoppable series",
    "Book Number": 1,
    "Author": "Jude Watson",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Unstoppable/Nowhere to Run",
    "Status": "Downloaded"
  },
  {
    "Title": "One False Note",
    "Series": "The 39 Clues: Original series",
    "Book Number": 2,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "Operation Trinity",
    "Series": "The 39 Clues: Cahills Files Series",
    "Book Number": 1,
    "Author": "Clifford Riley",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Cahill Files/Operation Trinity",
    "Status": "Downloaded"
  },
  {
    "Title": "Outbreak",
    "Series": "The 39 Clues: Superspecial series",
    "Book Number": 1,
    "Author": "C. Alexander London",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Superspecial/Outbreak",
    "Status": "Downloaded"
  },
  {
    "Title": "Shatterproof",
    "Series": "The 39 Clues: Cahills vs Vespers series",
    "Book Number": 4,
    "Author": "Roland Smith",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Vespers/Shatterproof",
    "Status": "Downloaded"
  },
  {
    "Title": "Sky Raiders",
    "Series": "The Five Kingdoms",
    "Book Number": 1,
    "Author": "Brandon Mull",
    "Narrator": "Keith Nobbs",
    "Publisher": "Simon and Schuster",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "Storm Warning",
    "Series": "The 39 Clues: Original series",
    "Book Number": 9,
    "Author": "Linda Sue Park",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Original/Storm Warning",
    "Status": "Downloaded"
  },
  {
    "Title": "The Black Circle",
    "Series": "The 39 Clues: Original series",
    "Book Number": 5,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "The Castle of Mirrors",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 4,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Russell Beale",
    "Publisher": "Penguin",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "The Chestnut Soldier",
    "Series": "The Magician Trilogy",
    "Book Number": 3,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": ""
  },
  {
    "Title": "The Dead of Night",
    "Series": "The 39 Clues: Cahills vs Vespers series",
    "Book Number": 3,
    "Author": "Peter Lerangis",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Vespers/The Dead of Night",
    "Status": "Downloaded"
  },
  {
    "Title": "The Dragon's Child and the Night of the Unicorn",
    "Series": "Single Book",
    "Book Number": 1,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Oakhill Publishing",
    "Folder": "",
    "Status": ""
  },
  {
    "Title": "The Emperor's Code",
    "Series": "The 39 Clues: Original series",
    "Book Number": 8,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  },
  {
    "Title": "The Maze of Bones",
    "Series": "The 39 Clues: Original series",
    "Book Number": 1,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "none"
  },
  {
    "Title": "The Medusa Plot",
    "Series": "The 39 Clues: Cahills vs Vespers series",
    "Book Number": 1,
    "Author": "Gordon Kor",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Vespers/The Medusa Plot",
    "Status": "Downloaded"
  },
  {
    "Title": "The Rogue Knight",
    "Series": "The Five Kingdoms",
    "Book Number": 2,
    "Author": "Brandon Mull",
    "Narrator": "Keith Nobbs",
    "Publisher": "Simon and Schuster",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "The Secret Kingdom",
    "Series": "Chronicles of the Red King",
    "Book Number": 1,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": ""
  },
  {
    "Title": "The Snow Spider",
    "Series": "The Magician Trilogy",
    "Book Number": 1,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "The Stones of Ravenglass",
    "Series": "Chronicles of the Red King",
    "Book Number": 2,
    "Author": "Jenny Nimmo",
    "Narrator": "John Keating",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": ""
  },
  {
    "Title": "The Sword Thief",
    "Series": "The 39 Clues: Original series",
    "Book Number": 3,
    "Author": "Peter Lerangis",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Original/The Sword Thief",
    "Status": "Downloaded"
  },
  {
    "Title": "The Time Twister",
    "Series": "Charlie Bone and the Children of the Red King",
    "Book Number": 2,
    "Author": "Jenny Nimmo",
    "Narrator": "Simon Russell Beale",
    "Publisher": "Penguin",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "The Tombs of Atuan",
    "Series": "EarthSea",
    "Book Number": 2,
    "Author": "Ursula K. Le Guin",
    "Narrator": "Rob Inglis",
    "Publisher": "Recorded Books",
    "Folder": "",
    "Status": "Downloaded"
  },
  {
    "Title": "The Viper's Nest",
    "Series": "The 39 Clues: Original series",
    "Book Number": 7,
    "Author": "Peter Lerangis",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Original/The Viper's Nest",
    "Status": "Downloaded"
  },
  {
    "Title": "Trust No One",
    "Series": "The 39 Clues: Cahills vs Vespers series",
    "Book Number": 5,
    "Author": "Linda Sue Park",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "39 Clues/Vespers/Trust No One",
    "Status": "Downloaded"
  },
  {
    "Title": "Vespers Rising",
    "Series": "The 39 Clues: Original series",
    "Book Number": 11,
    "Author": "",
    "Narrator": "David Pittu",
    "Publisher": "Scholastic Audio",
    "Folder": "",
    "Status": "On Hold"
  }
]
  `);
