var _toISO3Countries = require("./src/countries/toISO3.json");
var _countryCapitals = require("./src/countries/capitals.json");
var _phoneCodes = require("./src/phonecodes.json");
var _currencyCodes = require("./src/currencycodes.json");

var NUMBERS = '0123456789';
var CHARS_LOWER = 'abcdefghijklmnopqrstuvwxyz';
var MAX_INT = 9007199254740992;
var MIN_INT = -MAX_INT;

module.exports.MAX_INT = MAX_INT;
module.exports.MIN_INT = MIN_INT;
module.exports.NUMBERS = NUMBERS;
module.exports.CHARS_LOWER = CHARS_LOWER;
module.exports.CHARS_UPPER = CHARS_LOWER.toUpperCase();
module.exports.HEX_POOL = NUMBERS + "abcdef";

module.exports.currencyCodes = _currencyCodes;
module.exports.phoneCodes = _phoneCodes;
module.exports.toISO3Countries = _toISO3Countries;
module.exports.countryCapitals = _countryCapitals;

module.exports.usStates = {
	"AL": "Alabama",
	"AK": "Alaska",
	"AS": "American Samoa",
	"AZ": "Arizona",
	"AR": "Arkansas",
	"CA": "California",
	"CO": "Colorado",
	"CT": "Connecticut",
	"DE": "Delaware",
	"DC": "District Of Columbia",
	"FM": "Federated States Of Micronesia",
	"FL": "Florida",
	"GA": "Georgia",
	"GU": "Guam",
	"HI": "Hawaii",
	"ID": "Idaho",
	"IL": "Illinois",
	"IN": "Indiana",
	"IA": "Iowa",
	"KS": "Kansas",
	"KY": "Kentucky",
	"LA": "Louisiana",
	"ME": "Maine",
	"MH": "Marshall Islands",
	"MD": "Maryland",
	"MA": "Massachusetts",
	"MI": "Michigan",
	"MN": "Minnesota",
	"MS": "Mississippi",
	"MO": "Missouri",
	"MT": "Montana",
	"NE": "Nebraska",
	"NV": "Nevada",
	"NH": "New Hampshire",
	"NJ": "New Jersey",
	"NM": "New Mexico",
	"NY": "New York",
	"NC": "North Carolina",
	"ND": "North Dakota",
	"MP": "Northern Mariana Islands",
	"OH": "Ohio",
	"OK": "Oklahoma",
	"OR": "Oregon",
	"PW": "Palau",
	"PA": "Pennsylvania",
	"PR": "Puerto Rico",
	"RI": "Rhode Island",
	"SC": "South Carolina",
	"SD": "South Dakota",
	"TN": "Tennessee",
	"TX": "Texas",
	"UT": "Utah",
	"VT": "Vermont",
	"VI": "Virgin Islands",
	"VA": "Virginia",
	"WA": "Washington",
	"WV": "West Virginia",
	"WI": "Wisconsin",
	"WY": "Wyoming"
};

module.exports.CanadianProvinces = {
	"AB": "Alberta",
	"BC": "British Columbia",
	"MB": "Manitoba",
	"NB": "New Brunswick",
	"NL": "Newfoundland and Labrador",
	"NT": "Northwest Territories",
	"NS": "Nova Scotia",
	"NU": "Nunavut",
	"ON": "Ontario",
	"PE": "Prince Edward Island",
	"QC": "Quebec",
	"SK": "Saskatchewan",
	"YT": "Yukon Territory"
};

module.exports.firstNames = {
	"male": {
		"en": ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
		// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0163
		"it": ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccolò", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"]
	},
	"female": {
		"en": ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "John", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
		// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0162
		"it": ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Leda", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"]
	}
};

module.exports.lastNames = {
	"en": ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King', 'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'McDonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce', 'Berry', 'Matthews', 'Arnold', 'Wagner', 'Willis', 'Ray', 'Watkins', 'Olson', 'Carroll', 'Duncan', 'Snyder', 'Hart', 'Cunningham', 'Bradley', 'Lane', 'Andrews', 'Ruiz', 'Harper', 'Fox', 'Riley', 'Armstrong', 'Carpenter', 'Weaver', 'Greene', 'Lawrence', 'Elliott', 'Chavez', 'Sims', 'Austin', 'Peters', 'Kelley', 'Franklin', 'Lawson', 'Fields', 'Gutierrez', 'Ryan', 'Schmidt', 'Carr', 'Vasquez', 'Castillo', 'Wheeler', 'Chapman', 'Oliver', 'Montgomery', 'Richards', 'Williamson', 'Johnston', 'Banks', 'Meyer', 'Bishop', 'McCoy', 'Howell', 'Alvarez', 'Morrison', 'Hansen', 'Fernandez', 'Garza', 'Harvey', 'Little', 'Burton', 'Stanley', 'Nguyen', 'George', 'Jacobs', 'Reid', 'Kim', 'Fuller', 'Lynch', 'Dean', 'Gilbert', 'Garrett', 'Romero', 'Welch', 'Larson', 'Frazier', 'Burke', 'Hanson', 'Day', 'Mendoza', 'Moreno', 'Bowman', 'Medina', 'Fowler', 'Brewer', 'Hoffman', 'Carlson', 'Silva', 'Pearson', 'Holland', 'Douglas', 'Fleming', 'Jensen', 'Vargas', 'Byrd', 'Davidson', 'Hopkins', 'May', 'Terry', 'Herrera', 'Wade', 'Soto', 'Walters', 'Curtis', 'Neal', 'Caldwell', 'Lowe', 'Jennings', 'Barnett', 'Graves', 'Jimenez', 'Horton', 'Shelton', 'Barrett', 'Obrien', 'Castro', 'Sutton', 'Gregory', 'McKinney', 'Lucas', 'Miles', 'Craig', 'Rodriquez', 'Chambers', 'Holt', 'Lambert', 'Fletcher', 'Watts', 'Bates', 'Hale', 'Rhodes', 'Pena', 'Beck', 'Newman', 'Haynes', 'McDaniel', 'Mendez', 'Bush', 'Vaughn', 'Parks', 'Dawson', 'Santiago', 'Norris', 'Hardy', 'Love', 'Steele', 'Curry', 'Powers', 'Schultz', 'Barker', 'Guzman', 'Page', 'Munoz', 'Ball', 'Keller', 'Chandler', 'Weber', 'Leonard', 'Walsh', 'Lyons', 'Ramsey', 'Wolfe', 'Schneider', 'Mullins', 'Benson', 'Sharp', 'Bowen', 'Daniel', 'Barber', 'Cummings', 'Hines', 'Baldwin', 'Griffith', 'Valdez', 'Hubbard', 'Salazar', 'Reeves', 'Warner', 'Stevenson', 'Burgess', 'Santos', 'Tate', 'Cross', 'Garner', 'Mann', 'Mack', 'Moss', 'Thornton', 'Dennis', 'McGee', 'Farmer', 'Delgado', 'Aguilar', 'Vega', 'Glover', 'Manning', 'Cohen', 'Harmon', 'Rodgers', 'Robbins', 'Newton', 'Todd', 'Blair', 'Higgins', 'Ingram', 'Reese', 'Cannon', 'Strickland', 'Townsend', 'Potter', 'Goodwin', 'Walton', 'Rowe', 'Hampton', 'Ortega', 'Patton', 'Swanson', 'Joseph', 'Francis', 'Goodman', 'Maldonado', 'Yates', 'Becker', 'Erickson', 'Hodges', 'Rios', 'Conner', 'Adkins', 'Webster', 'Norman', 'Malone', 'Hammond', 'Flowers', 'Cobb', 'Moody', 'Quinn', 'Blake', 'Maxwell', 'Pope', 'Floyd', 'Osborne', 'Paul', 'McCarthy', 'Guerrero', 'Lindsey', 'Estrada', 'Sandoval', 'Gibbs', 'Tyler', 'Gross', 'Fitzgerald', 'Stokes', 'Doyle', 'Sherman', 'Saunders', 'Wise', 'Colon', 'Gill', 'Alvarado', 'Greer', 'Padilla', 'Simon', 'Waters', 'Nunez', 'Ballard', 'Schwartz', 'McBride', 'Houston', 'Christensen', 'Klein', 'Pratt', 'Briggs', 'Parsons', 'McLaughlin', 'Zimmerman', 'French', 'Buchanan', 'Moran', 'Copeland', 'Roy', 'Pittman', 'Brady', 'McCormick', 'Holloway', 'Brock', 'Poole', 'Frank', 'Logan', 'Owen', 'Bass', 'Marsh', 'Drake', 'Wong', 'Jefferson', 'Park', 'Morton', 'Abbott', 'Sparks', 'Patrick', 'Norton', 'Huff', 'Clayton', 'Massey', 'Lloyd', 'Figueroa', 'Carson', 'Bowers', 'Roberson', 'Barton', 'Tran', 'Lamb', 'Harrington', 'Casey', 'Boone', 'Cortez', 'Clarke', 'Mathis', 'Singleton', 'Wilkins', 'Cain', 'Bryan', 'Underwood', 'Hogan', 'McKenzie', 'Collier', 'Luna', 'Phelps', 'McGuire', 'Allison', 'Bridges', 'Wilkerson', 'Nash', 'Summers', 'Atkins'],
	// Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0164 (first 1000)
	"it": ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"]
};

module.exports.isoCountries = {
	'AF': 'Afghanistan',
	'AX': 'Aland Islands',
	'AL': 'Albania',
	'DZ': 'Algeria',
	'AS': 'American Samoa',
	'AD': 'Andorra',
	'AO': 'Angola',
	'AI': 'Anguilla',
	'AQ': 'Antarctica',
	'AG': 'Antigua And Barbuda',
	'AR': 'Argentina',
	'AM': 'Armenia',
	'AW': 'Aruba',
	'AU': 'Australia',
	'AT': 'Austria',
	'AZ': 'Azerbaijan',
	'BS': 'Bahamas',
	'BH': 'Bahrain',
	'BD': 'Bangladesh',
	'BB': 'Barbados',
	'BY': 'Belarus',
	'BE': 'Belgium',
	'BZ': 'Belize',
	'BJ': 'Benin',
	'BM': 'Bermuda',
	'BT': 'Bhutan',
	'BO': 'Bolivia',
	'BA': 'Bosnia And Herzegovina',
	'BW': 'Botswana',
	'BV': 'Bouvet Island',
	'BR': 'Brazil',
	'IO': 'British Indian Ocean Territory',
	'BN': 'Brunei Darussalam',
	'BG': 'Bulgaria',
	'BF': 'Burkina Faso',
	'BI': 'Burundi',
	'KH': 'Cambodia',
	'CM': 'Cameroon',
	'CA': 'Canada',
	'CV': 'Cape Verde',
	'KY': 'Cayman Islands',
	'CF': 'Central African Republic',
	'TD': 'Chad',
	'CL': 'Chile',
	'CN': 'China',
	'CX': 'Christmas Island',
	'CC': 'Cocos (Keeling) Islands',
	'CO': 'Colombia',
	'KM': 'Comoros',
	'CG': 'Congo',
	'CD': 'Congo, Democratic Republic',
	'CK': 'Cook Islands',
	'CR': 'Costa Rica',
	'CI': 'Cote D\'Ivoire',
	'HR': 'Croatia',
	'CU': 'Cuba',
	'CY': 'Cyprus',
	'CZ': 'Czech Republic',
	'DK': 'Denmark',
	'DJ': 'Djibouti',
	'DM': 'Dominica',
	'DO': 'Dominican Republic',
	'EC': 'Ecuador',
	'EG': 'Egypt',
	'SV': 'El Salvador',
	'GQ': 'Equatorial Guinea',
	'ER': 'Eritrea',
	'EE': 'Estonia',
	'ET': 'Ethiopia',
	'FK': 'Falkland Islands (Malvinas)',
	'FO': 'Faroe Islands',
	'FJ': 'Fiji',
	'FI': 'Finland',
	'FR': 'France',
	'GF': 'French Guiana',
	'PF': 'French Polynesia',
	'TF': 'French Southern Territories',
	'GA': 'Gabon',
	'GM': 'Gambia',
	'GE': 'Georgia',
	'DE': 'Germany',
	'GH': 'Ghana',
	'GI': 'Gibraltar',
	'GR': 'Greece',
	'GL': 'Greenland',
	'GD': 'Grenada',
	'GP': 'Guadeloupe',
	'GU': 'Guam',
	'GT': 'Guatemala',
	'GG': 'Guernsey',
	'GN': 'Guinea',
	'GW': 'Guinea-Bissau',
	'GY': 'Guyana',
	'HT': 'Haiti',
	'HM': 'Heard Island & Mcdonald Islands',
	'VA': 'Holy See (Vatican City State)',
	'HN': 'Honduras',
	'HK': 'Hong Kong',
	'HU': 'Hungary',
	'IS': 'Iceland',
	'IN': 'India',
	'ID': 'Indonesia',
	'IR': 'Iran, Islamic Republic Of',
	'IQ': 'Iraq',
	'IE': 'Ireland',
	'IM': 'Isle Of Man',
	'IL': 'Israel',
	'IT': 'Italy',
	'JM': 'Jamaica',
	'JP': 'Japan',
	'JE': 'Jersey',
	'JO': 'Jordan',
	'KZ': 'Kazakhstan',
	'KE': 'Kenya',
	'KI': 'Kiribati',
	'KR': 'Korea',
	'KW': 'Kuwait',
	'KG': 'Kyrgyzstan',
	'LA': 'Lao People\'s Democratic Republic',
	'LV': 'Latvia',
	'LB': 'Lebanon',
	'LS': 'Lesotho',
	'LR': 'Liberia',
	'LY': 'Libyan Arab Jamahiriya',
	'LI': 'Liechtenstein',
	'LT': 'Lithuania',
	'LU': 'Luxembourg',
	'MO': 'Macao',
	'MK': 'Macedonia',
	'MG': 'Madagascar',
	'MW': 'Malawi',
	'MY': 'Malaysia',
	'MV': 'Maldives',
	'ML': 'Mali',
	'MT': 'Malta',
	'MH': 'Marshall Islands',
	'MQ': 'Martinique',
	'MR': 'Mauritania',
	'MU': 'Mauritius',
	'YT': 'Mayotte',
	'MX': 'Mexico',
	'FM': 'Micronesia, Federated States Of',
	'MD': 'Moldova',
	'MC': 'Monaco',
	'MN': 'Mongolia',
	'ME': 'Montenegro',
	'MS': 'Montserrat',
	'MA': 'Morocco',
	'MZ': 'Mozambique',
	'MM': 'Myanmar',
	'NA': 'Namibia',
	'NR': 'Nauru',
	'NP': 'Nepal',
	'NL': 'Netherlands',
	'AN': 'Netherlands Antilles',
	'NC': 'New Caledonia',
	'NZ': 'New Zealand',
	'NI': 'Nicaragua',
	'NE': 'Niger',
	'NG': 'Nigeria',
	'NU': 'Niue',
	'NF': 'Norfolk Island',
	'MP': 'Northern Mariana Islands',
	'NO': 'Norway',
	'OM': 'Oman',
	'PK': 'Pakistan',
	'PW': 'Palau',
	'PS': 'Palestinian Territory, Occupied',
	'PA': 'Panama',
	'PG': 'Papua New Guinea',
	'PY': 'Paraguay',
	'PE': 'Peru',
	'PH': 'Philippines',
	'PN': 'Pitcairn',
	'PL': 'Poland',
	'PT': 'Portugal',
	'PR': 'Puerto Rico',
	'QA': 'Qatar',
	'RE': 'Reunion',
	'RO': 'Romania',
	'RU': 'Russian Federation',
	'RW': 'Rwanda',
	'BL': 'Saint Barthelemy',
	'SH': 'Saint Helena',
	'KN': 'Saint Kitts And Nevis',
	'LC': 'Saint Lucia',
	'MF': 'Saint Martin',
	'PM': 'Saint Pierre And Miquelon',
	'VC': 'Saint Vincent And Grenadines',
	'WS': 'Samoa',
	'SM': 'San Marino',
	'ST': 'Sao Tome And Principe',
	'SA': 'Saudi Arabia',
	'SN': 'Senegal',
	'RS': 'Serbia',
	'SC': 'Seychelles',
	'SL': 'Sierra Leone',
	'SG': 'Singapore',
	'SK': 'Slovakia',
	'SI': 'Slovenia',
	'SB': 'Solomon Islands',
	'SO': 'Somalia',
	'ZA': 'South Africa',
	'GS': 'South Georgia And Sandwich Isl.',
	'ES': 'Spain',
	'LK': 'Sri Lanka',
	'SD': 'Sudan',
	'SR': 'Suriname',
	'SJ': 'Svalbard And Jan Mayen',
	'SZ': 'Swaziland',
	'SE': 'Sweden',
	'CH': 'Switzerland',
	'SY': 'Syrian Arab Republic',
	'TW': 'Taiwan',
	'TJ': 'Tajikistan',
	'TZ': 'Tanzania',
	'TH': 'Thailand',
	'TL': 'Timor-Leste',
	'TG': 'Togo',
	'TK': 'Tokelau',
	'TO': 'Tonga',
	'TT': 'Trinidad And Tobago',
	'TN': 'Tunisia',
	'TR': 'Turkey',
	'TM': 'Turkmenistan',
	'TC': 'Turks And Caicos Islands',
	'TV': 'Tuvalu',
	'UG': 'Uganda',
	'UA': 'Ukraine',
	'AE': 'United Arab Emirates',
	'GB': 'United Kingdom',
	'US': 'United States',
	'UM': 'United States Outlying Islands',
	'UY': 'Uruguay',
	'UZ': 'Uzbekistan',
	'VU': 'Vanuatu',
	'VE': 'Venezuela',
	'VN': 'Viet Nam',
	'VG': 'Virgin Islands, British',
	'VI': 'Virgin Islands, U.S.',
	'WF': 'Wallis And Futuna',
	'EH': 'Western Sahara',
	'YE': 'Yemen',
	'ZM': 'Zambia',
	'ZW': 'Zimbabwe'
};

// Data taken from https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json
module.exports.countries = [{
	"name": "Afghanistan",
	"abbreviation": "AF"
}, {
	"name": "Åland Islands",
	"abbreviation": "AX"
}, {
	"name": "Albania",
	"abbreviation": "AL"
}, {
	"name": "Algeria",
	"abbreviation": "DZ"
}, {
	"name": "American Samoa",
	"abbreviation": "AS"
}, {
	"name": "Andorra",
	"abbreviation": "AD"
}, {
	"name": "Angola",
	"abbreviation": "AO"
}, {
	"name": "Anguilla",
	"abbreviation": "AI"
}, {
	"name": "Antarctica",
	"abbreviation": "AQ"
}, {
	"name": "Antigua & Barbuda",
	"abbreviation": "AG"
}, {
	"name": "Argentina",
	"abbreviation": "AR"
}, {
	"name": "Armenia",
	"abbreviation": "AM"
}, {
	"name": "Aruba",
	"abbreviation": "AW"
}, {
	"name": "Ascension Island",
	"abbreviation": "AC"
}, {
	"name": "Australia",
	"abbreviation": "AU"
}, {
	"name": "Austria",
	"abbreviation": "AT"
}, {
	"name": "Azerbaijan",
	"abbreviation": "AZ"
}, {
	"name": "Bahamas",
	"abbreviation": "BS"
}, {
	"name": "Bahrain",
	"abbreviation": "BH"
}, {
	"name": "Bangladesh",
	"abbreviation": "BD"
}, {
	"name": "Barbados",
	"abbreviation": "BB"
}, {
	"name": "Belarus",
	"abbreviation": "BY"
}, {
	"name": "Belgium",
	"abbreviation": "BE"
}, {
	"name": "Belize",
	"abbreviation": "BZ"
}, {
	"name": "Benin",
	"abbreviation": "BJ"
}, {
	"name": "Bermuda",
	"abbreviation": "BM"
}, {
	"name": "Bhutan",
	"abbreviation": "BT"
}, {
	"name": "Bolivia",
	"abbreviation": "BO"
}, {
	"name": "Bosnia & Herzegovina",
	"abbreviation": "BA"
}, {
	"name": "Botswana",
	"abbreviation": "BW"
}, {
	"name": "Brazil",
	"abbreviation": "BR"
}, {
	"name": "British Indian Ocean Territory",
	"abbreviation": "IO"
}, {
	"name": "British Virgin Islands",
	"abbreviation": "VG"
}, {
	"name": "Brunei",
	"abbreviation": "BN"
}, {
	"name": "Bulgaria",
	"abbreviation": "BG"
}, {
	"name": "Burkina Faso",
	"abbreviation": "BF"
}, {
	"name": "Burundi",
	"abbreviation": "BI"
}, {
	"name": "Cambodia",
	"abbreviation": "KH"
}, {
	"name": "Cameroon",
	"abbreviation": "CM"
}, {
	"name": "Canada",
	"abbreviation": "CA"
}, {
	"name": "Canary Islands",
	"abbreviation": "IC"
}, {
	"name": "Cape Verde",
	"abbreviation": "CV"
}, {
	"name": "Caribbean Netherlands",
	"abbreviation": "BQ"
}, {
	"name": "Cayman Islands",
	"abbreviation": "KY"
}, {
	"name": "Central African Republic",
	"abbreviation": "CF"
}, {
	"name": "Ceuta & Melilla",
	"abbreviation": "EA"
}, {
	"name": "Chad",
	"abbreviation": "TD"
}, {
	"name": "Chile",
	"abbreviation": "CL"
}, {
	"name": "China",
	"abbreviation": "CN"
}, {
	"name": "Christmas Island",
	"abbreviation": "CX"
}, {
	"name": "Cocos (Keeling) Islands",
	"abbreviation": "CC"
}, {
	"name": "Colombia",
	"abbreviation": "CO"
}, {
	"name": "Comoros",
	"abbreviation": "KM"
}, {
	"name": "Congo - Brazzaville",
	"abbreviation": "CG"
}, {
	"name": "Congo - Kinshasa",
	"abbreviation": "CD"
}, {
	"name": "Cook Islands",
	"abbreviation": "CK"
}, {
	"name": "Costa Rica",
	"abbreviation": "CR"
}, {
	"name": "Côte d'Ivoire",
	"abbreviation": "CI"
}, {
	"name": "Croatia",
	"abbreviation": "HR"
}, {
	"name": "Cuba",
	"abbreviation": "CU"
}, {
	"name": "Curaçao",
	"abbreviation": "CW"
}, {
	"name": "Cyprus",
	"abbreviation": "CY"
}, {
	"name": "Czech Republic",
	"abbreviation": "CZ"
}, {
	"name": "Denmark",
	"abbreviation": "DK"
}, {
	"name": "Diego Garcia",
	"abbreviation": "DG"
}, {
	"name": "Djibouti",
	"abbreviation": "DJ"
}, {
	"name": "Dominica",
	"abbreviation": "DM"
}, {
	"name": "Dominican Republic",
	"abbreviation": "DO"
}, {
	"name": "Ecuador",
	"abbreviation": "EC"
}, {
	"name": "Egypt",
	"abbreviation": "EG"
}, {
	"name": "El Salvador",
	"abbreviation": "SV"
}, {
	"name": "Equatorial Guinea",
	"abbreviation": "GQ"
}, {
	"name": "Eritrea",
	"abbreviation": "ER"
}, {
	"name": "Estonia",
	"abbreviation": "EE"
}, {
	"name": "Ethiopia",
	"abbreviation": "ET"
}, {
	"name": "Falkland Islands",
	"abbreviation": "FK"
}, {
	"name": "Faroe Islands",
	"abbreviation": "FO"
}, {
	"name": "Fiji",
	"abbreviation": "FJ"
}, {
	"name": "Finland",
	"abbreviation": "FI"
}, {
	"name": "France",
	"abbreviation": "FR"
}, {
	"name": "French Guiana",
	"abbreviation": "GF"
}, {
	"name": "French Polynesia",
	"abbreviation": "PF"
}, {
	"name": "French Southern Territories",
	"abbreviation": "TF"
}, {
	"name": "Gabon",
	"abbreviation": "GA"
}, {
	"name": "Gambia",
	"abbreviation": "GM"
}, {
	"name": "Georgia",
	"abbreviation": "GE"
}, {
	"name": "Germany",
	"abbreviation": "DE"
}, {
	"name": "Ghana",
	"abbreviation": "GH"
}, {
	"name": "Gibraltar",
	"abbreviation": "GI"
}, {
	"name": "Greece",
	"abbreviation": "GR"
}, {
	"name": "Greenland",
	"abbreviation": "GL"
}, {
	"name": "Grenada",
	"abbreviation": "GD"
}, {
	"name": "Guadeloupe",
	"abbreviation": "GP"
}, {
	"name": "Guam",
	"abbreviation": "GU"
}, {
	"name": "Guatemala",
	"abbreviation": "GT"
}, {
	"name": "Guernsey",
	"abbreviation": "GG"
}, {
	"name": "Guinea",
	"abbreviation": "GN"
}, {
	"name": "Guinea-Bissau",
	"abbreviation": "GW"
}, {
	"name": "Guyana",
	"abbreviation": "GY"
}, {
	"name": "Haiti",
	"abbreviation": "HT"
}, {
	"name": "Honduras",
	"abbreviation": "HN"
}, {
	"name": "Hong Kong SAR China",
	"abbreviation": "HK"
}, {
	"name": "Hungary",
	"abbreviation": "HU"
}, {
	"name": "Iceland",
	"abbreviation": "IS"
}, {
	"name": "India",
	"abbreviation": "IN"
}, {
	"name": "Indonesia",
	"abbreviation": "ID"
}, {
	"name": "Iran",
	"abbreviation": "IR"
}, {
	"name": "Iraq",
	"abbreviation": "IQ"
}, {
	"name": "Ireland",
	"abbreviation": "IE"
}, {
	"name": "Isle of Man",
	"abbreviation": "IM"
}, {
	"name": "Israel",
	"abbreviation": "IL"
}, {
	"name": "Italy",
	"abbreviation": "IT"
}, {
	"name": "Jamaica",
	"abbreviation": "JM"
}, {
	"name": "Japan",
	"abbreviation": "JP"
}, {
	"name": "Jersey",
	"abbreviation": "JE"
}, {
	"name": "Jordan",
	"abbreviation": "JO"
}, {
	"name": "Kazakhstan",
	"abbreviation": "KZ"
}, {
	"name": "Kenya",
	"abbreviation": "KE"
}, {
	"name": "Kiribati",
	"abbreviation": "KI"
}, {
	"name": "Kosovo",
	"abbreviation": "XK"
}, {
	"name": "Kuwait",
	"abbreviation": "KW"
}, {
	"name": "Kyrgyzstan",
	"abbreviation": "KG"
}, {
	"name": "Laos",
	"abbreviation": "LA"
}, {
	"name": "Latvia",
	"abbreviation": "LV"
}, {
	"name": "Lebanon",
	"abbreviation": "LB"
}, {
	"name": "Lesotho",
	"abbreviation": "LS"
}, {
	"name": "Liberia",
	"abbreviation": "LR"
}, {
	"name": "Libya",
	"abbreviation": "LY"
}, {
	"name": "Liechtenstein",
	"abbreviation": "LI"
}, {
	"name": "Lithuania",
	"abbreviation": "LT"
}, {
	"name": "Luxembourg",
	"abbreviation": "LU"
}, {
	"name": "Macau SAR China",
	"abbreviation": "MO"
}, {
	"name": "Macedonia",
	"abbreviation": "MK"
}, {
	"name": "Madagascar",
	"abbreviation": "MG"
}, {
	"name": "Malawi",
	"abbreviation": "MW"
}, {
	"name": "Malaysia",
	"abbreviation": "MY"
}, {
	"name": "Maldives",
	"abbreviation": "MV"
}, {
	"name": "Mali",
	"abbreviation": "ML"
}, {
	"name": "Malta",
	"abbreviation": "MT"
}, {
	"name": "Marshall Islands",
	"abbreviation": "MH"
}, {
	"name": "Martinique",
	"abbreviation": "MQ"
}, {
	"name": "Mauritania",
	"abbreviation": "MR"
}, {
	"name": "Mauritius",
	"abbreviation": "MU"
}, {
	"name": "Mayotte",
	"abbreviation": "YT"
}, {
	"name": "Mexico",
	"abbreviation": "MX"
}, {
	"name": "Micronesia",
	"abbreviation": "FM"
}, {
	"name": "Moldova",
	"abbreviation": "MD"
}, {
	"name": "Monaco",
	"abbreviation": "MC"
}, {
	"name": "Mongolia",
	"abbreviation": "MN"
}, {
	"name": "Montenegro",
	"abbreviation": "ME"
}, {
	"name": "Montserrat",
	"abbreviation": "MS"
}, {
	"name": "Morocco",
	"abbreviation": "MA"
}, {
	"name": "Mozambique",
	"abbreviation": "MZ"
}, {
	"name": "Myanmar (Burma)",
	"abbreviation": "MM"
}, {
	"name": "Namibia",
	"abbreviation": "NA"
}, {
	"name": "Nauru",
	"abbreviation": "NR"
}, {
	"name": "Nepal",
	"abbreviation": "NP"
}, {
	"name": "Netherlands",
	"abbreviation": "NL"
}, {
	"name": "New Caledonia",
	"abbreviation": "NC"
}, {
	"name": "New Zealand",
	"abbreviation": "NZ"
}, {
	"name": "Nicaragua",
	"abbreviation": "NI"
}, {
	"name": "Niger",
	"abbreviation": "NE"
}, {
	"name": "Nigeria",
	"abbreviation": "NG"
}, {
	"name": "Niue",
	"abbreviation": "NU"
}, {
	"name": "Norfolk Island",
	"abbreviation": "NF"
}, {
	"name": "North Korea",
	"abbreviation": "KP"
}, {
	"name": "Northern Mariana Islands",
	"abbreviation": "MP"
}, {
	"name": "Norway",
	"abbreviation": "NO"
}, {
	"name": "Oman",
	"abbreviation": "OM"
}, {
	"name": "Pakistan",
	"abbreviation": "PK"
}, {
	"name": "Palau",
	"abbreviation": "PW"
}, {
	"name": "Palestinian Territories",
	"abbreviation": "PS"
}, {
	"name": "Panama",
	"abbreviation": "PA"
}, {
	"name": "Papua New Guinea",
	"abbreviation": "PG"
}, {
	"name": "Paraguay",
	"abbreviation": "PY"
}, {
	"name": "Peru",
	"abbreviation": "PE"
}, {
	"name": "Philippines",
	"abbreviation": "PH"
}, {
	"name": "Pitcairn Islands",
	"abbreviation": "PN"
}, {
	"name": "Poland",
	"abbreviation": "PL"
}, {
	"name": "Portugal",
	"abbreviation": "PT"
}, {
	"name": "Puerto Rico",
	"abbreviation": "PR"
}, {
	"name": "Qatar",
	"abbreviation": "QA"
}, {
	"name": "Réunion",
	"abbreviation": "RE"
}, {
	"name": "Romania",
	"abbreviation": "RO"
}, {
	"name": "Russia",
	"abbreviation": "RU"
}, {
	"name": "Rwanda",
	"abbreviation": "RW"
}, {
	"name": "Samoa",
	"abbreviation": "WS"
}, {
	"name": "San Marino",
	"abbreviation": "SM"
}, {
	"name": "São Tomé and Príncipe",
	"abbreviation": "ST"
}, {
	"name": "Saudi Arabia",
	"abbreviation": "SA"
}, {
	"name": "Senegal",
	"abbreviation": "SN"
}, {
	"name": "Serbia",
	"abbreviation": "RS"
}, {
	"name": "Seychelles",
	"abbreviation": "SC"
}, {
	"name": "Sierra Leone",
	"abbreviation": "SL"
}, {
	"name": "Singapore",
	"abbreviation": "SG"
}, {
	"name": "Sint Maarten",
	"abbreviation": "SX"
}, {
	"name": "Slovakia",
	"abbreviation": "SK"
}, {
	"name": "Slovenia",
	"abbreviation": "SI"
}, {
	"name": "Solomon Islands",
	"abbreviation": "SB"
}, {
	"name": "Somalia",
	"abbreviation": "SO"
}, {
	"name": "South Africa",
	"abbreviation": "ZA"
}, {
	"name": "South Georgia & South Sandwich Islands",
	"abbreviation": "GS"
}, {
	"name": "South Korea",
	"abbreviation": "KR"
}, {
	"name": "South Sudan",
	"abbreviation": "SS"
}, {
	"name": "Spain",
	"abbreviation": "ES"
}, {
	"name": "Sri Lanka",
	"abbreviation": "LK"
}, {
	"name": "St. Barthélemy",
	"abbreviation": "BL"
}, {
	"name": "St. Helena",
	"abbreviation": "SH"
}, {
	"name": "St. Kitts & Nevis",
	"abbreviation": "KN"
}, {
	"name": "St. Lucia",
	"abbreviation": "LC"
}, {
	"name": "St. Martin",
	"abbreviation": "MF"
}, {
	"name": "St. Pierre & Miquelon",
	"abbreviation": "PM"
}, {
	"name": "St. Vincent & Grenadines",
	"abbreviation": "VC"
}, {
	"name": "Sudan",
	"abbreviation": "SD"
}, {
	"name": "Suriname",
	"abbreviation": "SR"
}, {
	"name": "Svalbard & Jan Mayen",
	"abbreviation": "SJ"
}, {
	"name": "Swaziland",
	"abbreviation": "SZ"
}, {
	"name": "Sweden",
	"abbreviation": "SE"
}, {
	"name": "Switzerland",
	"abbreviation": "CH"
}, {
	"name": "Syria",
	"abbreviation": "SY"
}, {
	"name": "Taiwan",
	"abbreviation": "TW"
}, {
	"name": "Tajikistan",
	"abbreviation": "TJ"
}, {
	"name": "Tanzania",
	"abbreviation": "TZ"
}, {
	"name": "Thailand",
	"abbreviation": "TH"
}, {
	"name": "Timor-Leste",
	"abbreviation": "TL"
}, {
	"name": "Togo",
	"abbreviation": "TG"
}, {
	"name": "Tokelau",
	"abbreviation": "TK"
}, {
	"name": "Tonga",
	"abbreviation": "TO"
}, {
	"name": "Trinidad & Tobago",
	"abbreviation": "TT"
}, {
	"name": "Tristan da Cunha",
	"abbreviation": "TA"
}, {
	"name": "Tunisia",
	"abbreviation": "TN"
}, {
	"name": "Turkey",
	"abbreviation": "TR"
}, {
	"name": "Turkmenistan",
	"abbreviation": "TM"
}, {
	"name": "Turks & Caicos Islands",
	"abbreviation": "TC"
}, {
	"name": "Tuvalu",
	"abbreviation": "TV"
}, {
	"name": "U.S. Outlying Islands",
	"abbreviation": "UM"
}, {
	"name": "U.S. Virgin Islands",
	"abbreviation": "VI"
}, {
	"name": "Uganda",
	"abbreviation": "UG"
}, {
	"name": "Ukraine",
	"abbreviation": "UA"
}, {
	"name": "United Arab Emirates",
	"abbreviation": "AE"
}, {
	"name": "United Kingdom",
	"abbreviation": "GB"
}, {
	"name": "United States",
	"abbreviation": "US"
}, {
	"name": "Uruguay",
	"abbreviation": "UY"
}, {
	"name": "Uzbekistan",
	"abbreviation": "UZ"
}, {
	"name": "Vanuatu",
	"abbreviation": "VU"
}, {
	"name": "Vatican City",
	"abbreviation": "VA"
}, {
	"name": "Venezuela",
	"abbreviation": "VE"
}, {
	"name": "Vietnam",
	"abbreviation": "VN"
}, {
	"name": "Wallis & Futuna",
	"abbreviation": "WF"
}, {
	"name": "Western Sahara",
	"abbreviation": "EH"
}, {
	"name": "Yemen",
	"abbreviation": "YE"
}, {
	"name": "Zambia",
	"abbreviation": "ZM"
}, {
	"name": "Zimbabwe",
	"abbreviation": "ZW"
}];

module.exports.counties = {
	// Data taken from http://www.downloadexcelfiles.com/gb_en/download-excel-file-list-counties-uk
	"uk": [{
		name: 'Bath and North East Somerset'
	}, {
		name: 'Bedford'
	}, {
		name: 'Blackburn with Darwen'
	}, {
		name: 'Blackpool'
	}, {
		name: 'Bournemouth'
	}, {
		name: 'Bracknell Forest'
	}, {
		name: 'Brighton & Hove'
	}, {
		name: 'Bristol'
	}, {
		name: 'Buckinghamshire'
	}, {
		name: 'Cambridgeshire'
	}, {
		name: 'Central Bedfordshire'
	}, {
		name: 'Cheshire East'
	}, {
		name: 'Cheshire West and Chester'
	}, {
		name: 'Cornwall'
	}, {
		name: 'County Durham'
	}, {
		name: 'Cumbria'
	}, {
		name: 'Darlington'
	}, {
		name: 'Derby'
	}, {
		name: 'Derbyshire'
	}, {
		name: 'Devon'
	}, {
		name: 'Dorset'
	}, {
		name: 'East Riding of Yorkshire'
	}, {
		name: 'East Sussex'
	}, {
		name: 'Essex'
	}, {
		name: 'Gloucestershire'
	}, {
		name: 'Greater London'
	}, {
		name: 'Greater Manchester'
	}, {
		name: 'Halton'
	}, {
		name: 'Hampshire'
	}, {
		name: 'Hartlepool'
	}, {
		name: 'Herefordshire'
	}, {
		name: 'Hertfordshire'
	}, {
		name: 'Hull'
	}, {
		name: 'Isle of Wight'
	}, {
		name: 'Isles of Scilly'
	}, {
		name: 'Kent'
	}, {
		name: 'Lancashire'
	}, {
		name: 'Leicester'
	}, {
		name: 'Leicestershire'
	}, {
		name: 'Lincolnshire'
	}, {
		name: 'Luton'
	}, {
		name: 'Medway'
	}, {
		name: 'Merseyside'
	}, {
		name: 'Middlesbrough'
	}, {
		name: 'Milton Keynes'
	}, {
		name: 'Norfolk'
	}, {
		name: 'North East Lincolnshire'
	}, {
		name: 'North Lincolnshire'
	}, {
		name: 'North Somerset'
	}, {
		name: 'North Yorkshire'
	}, {
		name: 'Northamptonshire'
	}, {
		name: 'Northumberland'
	}, {
		name: 'Nottingham'
	}, {
		name: 'Nottinghamshire'
	}, {
		name: 'Oxfordshire'
	}, {
		name: 'Peterborough'
	}, {
		name: 'Plymouth'
	}, {
		name: 'Poole'
	}, {
		name: 'Portsmouth'
	}, {
		name: 'Reading'
	}, {
		name: 'Redcar and Cleveland'
	}, {
		name: 'Rutland'
	}, {
		name: 'Shropshire'
	}, {
		name: 'Slough'
	}, {
		name: 'Somerset'
	}, {
		name: 'South Gloucestershire'
	}, {
		name: 'South Yorkshire'
	}, {
		name: 'Southampton'
	}, {
		name: 'Southend-on-Sea'
	}, {
		name: 'Staffordshire'
	}, {
		name: 'Stockton-on-Tees'
	}, {
		name: 'Stoke-on-Trent'
	}, {
		name: 'Suffolk'
	}, {
		name: 'Surrey'
	}, {
		name: 'Swindon'
	}, {
		name: 'Telford and Wrekin'
	}, {
		name: 'Thurrock'
	}, {
		name: 'Torbay'
	}, {
		name: 'Tyne and Wear'
	}, {
		name: 'Warrington'
	}, {
		name: 'Warwickshire'
	}, {
		name: 'West Berkshire'
	}, {
		name: 'West Midlands'
	}, {
		name: 'West Sussex'
	}, {
		name: 'West Yorkshire'
	}, {
		name: 'Wiltshire'
	}, {
		name: 'Windsor and Maidenhead'
	}, {
		name: 'Wokingham'
	}, {
		name: 'Worcestershire'
	}, {
		name: 'York'
	}]
};

module.exports.provinces = {
	"ca": [{
		name: 'Alberta',
		abbreviation: 'AB'
	}, {
		name: 'British Columbia',
		abbreviation: 'BC'
	}, {
		name: 'Manitoba',
		abbreviation: 'MB'
	}, {
		name: 'New Brunswick',
		abbreviation: 'NB'
	}, {
		name: 'Newfoundland and Labrador',
		abbreviation: 'NL'
	}, {
		name: 'Nova Scotia',
		abbreviation: 'NS'
	}, {
		name: 'Ontario',
		abbreviation: 'ON'
	}, {
		name: 'Prince Edward Island',
		abbreviation: 'PE'
	}, {
		name: 'Quebec',
		abbreviation: 'QC'
	}, {
		name: 'Saskatchewan',
		abbreviation: 'SK'
	},

		// The case could be made that the following are not actually provinces
		// since they are technically considered "territories" however they all
		// look the same on an envelope!
		{
			name: 'Northwest Territories',
			abbreviation: 'NT'
		}, {
			name: 'Nunavut',
			abbreviation: 'NU'
		}, {
			name: 'Yukon',
			abbreviation: 'YT'
		}
		],
		"it": [{
			name: "Agrigento",
			abbreviation: "AG",
			code: 84
		}, {
			name: "Alessandria",
			abbreviation: "AL",
			code: 6
		}, {
			name: "Ancona",
			abbreviation: "AN",
			code: 42
		}, {
			name: "Aosta",
			abbreviation: "AO",
			code: 7
		}, {
			name: "L'Aquila",
			abbreviation: "AQ",
			code: 66
		}, {
			name: "Arezzo",
			abbreviation: "AR",
			code: 51
		}, {
			name: "Ascoli-Piceno",
			abbreviation: "AP",
			code: 44
		}, {
			name: "Asti",
			abbreviation: "AT",
			code: 5
		}, {
			name: "Avellino",
			abbreviation: "AV",
			code: 64
		}, {
			name: "Bari",
			abbreviation: "BA",
			code: 72
		}, {
			name: "Barletta-Andria-Trani",
			abbreviation: "BT",
			code: 72
		}, {
			name: "Belluno",
			abbreviation: "BL",
			code: 25
		}, {
			name: "Benevento",
			abbreviation: "BN",
			code: 62
		}, {
			name: "Bergamo",
			abbreviation: "BG",
			code: 16
		}, {
			name: "Biella",
			abbreviation: "BI",
			code: 96
		}, {
			name: "Bologna",
			abbreviation: "BO",
			code: 37
		}, {
			name: "Bolzano",
			abbreviation: "BZ",
			code: 21
		}, {
			name: "Brescia",
			abbreviation: "BS",
			code: 17
		}, {
			name: "Brindisi",
			abbreviation: "BR",
			code: 74
		}, {
			name: "Cagliari",
			abbreviation: "CA",
			code: 92
		}, {
			name: "Caltanissetta",
			abbreviation: "CL",
			code: 85
		}, {
			name: "Campobasso",
			abbreviation: "CB",
			code: 70
		}, {
			name: "Carbonia Iglesias",
			abbreviation: "CI",
			code: 70
		}, {
			name: "Caserta",
			abbreviation: "CE",
			code: 61
		}, {
			name: "Catania",
			abbreviation: "CT",
			code: 87
		}, {
			name: "Catanzaro",
			abbreviation: "CZ",
			code: 79
		}, {
			name: "Chieti",
			abbreviation: "CH",
			code: 69
		}, {
			name: "Como",
			abbreviation: "CO",
			code: 13
		}, {
			name: "Cosenza",
			abbreviation: "CS",
			code: 78
		}, {
			name: "Cremona",
			abbreviation: "CR",
			code: 19
		}, {
			name: "Crotone",
			abbreviation: "KR",
			code: 101
		}, {
			name: "Cuneo",
			abbreviation: "CN",
			code: 4
		}, {
			name: "Enna",
			abbreviation: "EN",
			code: 86
		}, {
			name: "Fermo",
			abbreviation: "FM",
			code: 86
		}, {
			name: "Ferrara",
			abbreviation: "FE",
			code: 38
		}, {
			name: "Firenze",
			abbreviation: "FI",
			code: 48
		}, {
			name: "Foggia",
			abbreviation: "FG",
			code: 71
		}, {
			name: "Forli-Cesena",
			abbreviation: "FC",
			code: 71
		}, {
			name: "Frosinone",
			abbreviation: "FR",
			code: 60
		}, {
			name: "Genova",
			abbreviation: "GE",
			code: 10
		}, {
			name: "Gorizia",
			abbreviation: "GO",
			code: 31
		}, {
			name: "Grosseto",
			abbreviation: "GR",
			code: 53
		}, {
			name: "Imperia",
			abbreviation: "IM",
			code: 8
		}, {
			name: "Isernia",
			abbreviation: "IS",
			code: 94
		}, {
			name: "La-Spezia",
			abbreviation: "SP",
			code: 66
		}, {
			name: "Latina",
			abbreviation: "LT",
			code: 59
		}, {
			name: "Lecce",
			abbreviation: "LE",
			code: 75
		}, {
			name: "Lecco",
			abbreviation: "LC",
			code: 97
		}, {
			name: "Livorno",
			abbreviation: "LI",
			code: 49
		}, {
			name: "Lodi",
			abbreviation: "LO",
			code: 98
		}, {
			name: "Lucca",
			abbreviation: "LU",
			code: 46
		}, {
			name: "Macerata",
			abbreviation: "MC",
			code: 43
		}, {
			name: "Mantova",
			abbreviation: "MN",
			code: 20
		}, {
			name: "Massa-Carrara",
			abbreviation: "MS",
			code: 45
		}, {
			name: "Matera",
			abbreviation: "MT",
			code: 77
		}, {
			name: "Medio Campidano",
			abbreviation: "VS",
			code: 77
		}, {
			name: "Messina",
			abbreviation: "ME",
			code: 83
		}, {
			name: "Milano",
			abbreviation: "MI",
			code: 15
		}, {
			name: "Modena",
			abbreviation: "MO",
			code: 36
		}, {
			name: "Monza-Brianza",
			abbreviation: "MB",
			code: 36
		}, {
			name: "Napoli",
			abbreviation: "NA",
			code: 63
		}, {
			name: "Novara",
			abbreviation: "NO",
			code: 3
		}, {
			name: "Nuoro",
			abbreviation: "NU",
			code: 91
		}, {
			name: "Ogliastra",
			abbreviation: "OG",
			code: 91
		}, {
			name: "Olbia Tempio",
			abbreviation: "OT",
			code: 91
		}, {
			name: "Oristano",
			abbreviation: "OR",
			code: 95
		}, {
			name: "Padova",
			abbreviation: "PD",
			code: 28
		}, {
			name: "Palermo",
			abbreviation: "PA",
			code: 82
		}, {
			name: "Parma",
			abbreviation: "PR",
			code: 34
		}, {
			name: "Pavia",
			abbreviation: "PV",
			code: 18
		}, {
			name: "Perugia",
			abbreviation: "PG",
			code: 54
		}, {
			name: "Pesaro-Urbino",
			abbreviation: "PU",
			code: 41
		}, {
			name: "Pescara",
			abbreviation: "PE",
			code: 68
		}, {
			name: "Piacenza",
			abbreviation: "PC",
			code: 33
		}, {
			name: "Pisa",
			abbreviation: "PI",
			code: 50
		}, {
			name: "Pistoia",
			abbreviation: "PT",
			code: 47
		}, {
			name: "Pordenone",
			abbreviation: "PN",
			code: 93
		}, {
			name: "Potenza",
			abbreviation: "PZ",
			code: 76
		}, {
			name: "Prato",
			abbreviation: "PO",
			code: 100
		}, {
			name: "Ragusa",
			abbreviation: "RG",
			code: 88
		}, {
			name: "Ravenna",
			abbreviation: "RA",
			code: 39
		}, {
			name: "Reggio-Calabria",
			abbreviation: "RC",
			code: 35
		}, {
			name: "Reggio-Emilia",
			abbreviation: "RE",
			code: 35
		}, {
			name: "Rieti",
			abbreviation: "RI",
			code: 57
		}, {
			name: "Rimini",
			abbreviation: "RN",
			code: 99
		}, {
			name: "Roma",
			abbreviation: "Roma",
			code: 58
		}, {
			name: "Rovigo",
			abbreviation: "RO",
			code: 29
		}, {
			name: "Salerno",
			abbreviation: "SA",
			code: 65
		}, {
			name: "Sassari",
			abbreviation: "SS",
			code: 90
		}, {
			name: "Savona",
			abbreviation: "SV",
			code: 9
		}, {
			name: "Siena",
			abbreviation: "SI",
			code: 52
		}, {
			name: "Siracusa",
			abbreviation: "SR",
			code: 89
		}, {
			name: "Sondrio",
			abbreviation: "SO",
			code: 14
		}, {
			name: "Taranto",
			abbreviation: "TA",
			code: 73
		}, {
			name: "Teramo",
			abbreviation: "TE",
			code: 67
		}, {
			name: "Terni",
			abbreviation: "TR",
			code: 55
		}, {
			name: "Torino",
			abbreviation: "TO",
			code: 1
		}, {
			name: "Trapani",
			abbreviation: "TP",
			code: 81
		}, {
			name: "Trento",
			abbreviation: "TN",
			code: 22
		}, {
			name: "Treviso",
			abbreviation: "TV",
			code: 26
		}, {
			name: "Trieste",
			abbreviation: "TS",
			code: 32
		}, {
			name: "Udine",
			abbreviation: "UD",
			code: 30
		}, {
			name: "Varese",
			abbreviation: "VA",
			code: 12
		}, {
			name: "Venezia",
			abbreviation: "VE",
			code: 27
		}, {
			name: "Verbania",
			abbreviation: "VB",
			code: 27
		}, {
			name: "Vercelli",
			abbreviation: "VC",
			code: 2
		}, {
			name: "Verona",
			abbreviation: "VR",
			code: 23
		}, {
			name: "Vibo-Valentia",
			abbreviation: "VV",
			code: 102
		}, {
			name: "Vicenza",
			abbreviation: "VI",
			code: 24
		}, {
			name: "Viterbo",
			abbreviation: "VT",
			code: 56
		}]
	};

// from: https://github.com/samsargent/Useful-Autocomplete-Data/blob/master/data/nationalities.json
module.exports.nationalities = [{
	name: 'Afghan'
}, {
	name: 'Albanian'
}, {
	name: 'Algerian'
}, {
	name: 'American'
}, {
	name: 'Andorran'
}, {
	name: 'Angolan'
}, {
	name: 'Antiguans'
}, {
	name: 'Argentinean'
}, {
	name: 'Armenian'
}, {
	name: 'Australian'
}, {
	name: 'Austrian'
}, {
	name: 'Azerbaijani'
}, {
	name: 'Bahami'
}, {
	name: 'Bahraini'
}, {
	name: 'Bangladeshi'
}, {
	name: 'Barbadian'
}, {
	name: 'Barbudans'
}, {
	name: 'Batswana'
}, {
	name: 'Belarusian'
}, {
	name: 'Belgian'
}, {
	name: 'Belizean'
}, {
	name: 'Beninese'
}, {
	name: 'Bhutanese'
}, {
	name: 'Bolivian'
}, {
	name: 'Bosnian'
}, {
	name: 'Brazilian'
}, {
	name: 'British'
}, {
	name: 'Bruneian'
}, {
	name: 'Bulgarian'
}, {
	name: 'Burkinabe'
}, {
	name: 'Burmese'
}, {
	name: 'Burundian'
}, {
	name: 'Cambodian'
}, {
	name: 'Cameroonian'
}, {
	name: 'Canadian'
}, {
	name: 'Cape Verdean'
}, {
	name: 'Central African'
}, {
	name: 'Chadian'
}, {
	name: 'Chilean'
}, {
	name: 'Chinese'
}, {
	name: 'Colombian'
}, {
	name: 'Comoran'
}, {
	name: 'Congolese'
}, {
	name: 'Costa Rican'
}, {
	name: 'Croatian'
}, {
	name: 'Cuban'
}, {
	name: 'Cypriot'
}, {
	name: 'Czech'
}, {
	name: 'Danish'
}, {
	name: 'Djibouti'
}, {
	name: 'Dominican'
}, {
	name: 'Dutch'
}, {
	name: 'East Timorese'
}, {
	name: 'Ecuadorean'
}, {
	name: 'Egyptian'
}, {
	name: 'Emirian'
}, {
	name: 'Equatorial Guinean'
}, {
	name: 'Eritrean'
}, {
	name: 'Estonian'
}, {
	name: 'Ethiopian'
}, {
	name: 'Fijian'
}, {
	name: 'Filipino'
}, {
	name: 'Finnish'
}, {
	name: 'French'
}, {
	name: 'Gabonese'
}, {
	name: 'Gambian'
}, {
	name: 'Georgian'
}, {
	name: 'German'
}, {
	name: 'Ghanaian'
}, {
	name: 'Greek'
}, {
	name: 'Grenadian'
}, {
	name: 'Guatemalan'
}, {
	name: 'Guinea-Bissauan'
}, {
	name: 'Guinean'
}, {
	name: 'Guyanese'
}, {
	name: 'Haitian'
}, {
	name: 'Herzegovinian'
}, {
	name: 'Honduran'
}, {
	name: 'Hungarian'
}, {
	name: 'I-Kiribati'
}, {
	name: 'Icelander'
}, {
	name: 'Indian'
}, {
	name: 'Indonesian'
}, {
	name: 'Iranian'
}, {
	name: 'Iraqi'
}, {
	name: 'Irish'
}, {
	name: 'Israeli'
}, {
	name: 'Italian'
}, {
	name: 'Ivorian'
}, {
	name: 'Jamaican'
}, {
	name: 'Japanese'
}, {
	name: 'Jordanian'
}, {
	name: 'Kazakhstani'
}, {
	name: 'Kenyan'
}, {
	name: 'Kittian and Nevisian'
}, {
	name: 'Kuwaiti'
}, {
	name: 'Kyrgyz'
}, {
	name: 'Laotian'
}, {
	name: 'Latvian'
}, {
	name: 'Lebanese'
}, {
	name: 'Liberian'
}, {
	name: 'Libyan'
}, {
	name: 'Liechtensteiner'
}, {
	name: 'Lithuanian'
}, {
	name: 'Luxembourger'
}, {
	name: 'Macedonian'
}, {
	name: 'Malagasy'
}, {
	name: 'Malawian'
}, {
	name: 'Malaysian'
}, {
	name: 'Maldivan'
}, {
	name: 'Malian'
}, {
	name: 'Maltese'
}, {
	name: 'Marshallese'
}, {
	name: 'Mauritanian'
}, {
	name: 'Mauritian'
}, {
	name: 'Mexican'
}, {
	name: 'Micronesian'
}, {
	name: 'Moldovan'
}, {
	name: 'Monacan'
}, {
	name: 'Mongolian'
}, {
	name: 'Moroccan'
}, {
	name: 'Mosotho'
}, {
	name: 'Motswana'
}, {
	name: 'Mozambican'
}, {
	name: 'Namibian'
}, {
	name: 'Nauruan'
}, {
	name: 'Nepalese'
}, {
	name: 'New Zealander'
}, {
	name: 'Nicaraguan'
}, {
	name: 'Nigerian'
}, {
	name: 'Nigerien'
}, {
	name: 'North Korean'
}, {
	name: 'Northern Irish'
}, {
	name: 'Norwegian'
}, {
	name: 'Omani'
}, {
	name: 'Pakistani'
}, {
	name: 'Palauan'
}, {
	name: 'Panamanian'
}, {
	name: 'Papua New Guinean'
}, {
	name: 'Paraguayan'
}, {
	name: 'Peruvian'
}, {
	name: 'Polish'
}, {
	name: 'Portuguese'
}, {
	name: 'Qatari'
}, {
	name: 'Romani'
}, {
	name: 'Russian'
}, {
	name: 'Rwandan'
}, {
	name: 'Saint Lucian'
}, {
	name: 'Salvadoran'
}, {
	name: 'Samoan'
}, {
	name: 'San Marinese'
}, {
	name: 'Sao Tomean'
}, {
	name: 'Saudi'
}, {
	name: 'Scottish'
}, {
	name: 'Senegalese'
}, {
	name: 'Serbian'
}, {
	name: 'Seychellois'
}, {
	name: 'Sierra Leonean'
}, {
	name: 'Singaporean'
}, {
	name: 'Slovakian'
}, {
	name: 'Slovenian'
}, {
	name: 'Solomon Islander'
}, {
	name: 'Somali'
}, {
	name: 'South African'
}, {
	name: 'South Korean'
}, {
	name: 'Spanish'
}, {
	name: 'Sri Lankan'
}, {
	name: 'Sudanese'
}, {
	name: 'Surinamer'
}, {
	name: 'Swazi'
}, {
	name: 'Swedish'
}, {
	name: 'Swiss'
}, {
	name: 'Syrian'
}, {
	name: 'Taiwanese'
}, {
	name: 'Tajik'
}, {
	name: 'Tanzanian'
}, {
	name: 'Thai'
}, {
	name: 'Togolese'
}, {
	name: 'Tongan'
}, {
	name: 'Trinidadian or Tobagonian'
}, {
	name: 'Tunisian'
}, {
	name: 'Turkish'
}, {
	name: 'Tuvaluan'
}, {
	name: 'Ugandan'
}, {
	name: 'Ukrainian'
}, {
	name: 'Uruguaya'
}, {
	name: 'Uzbekistani'
}, {
	name: 'Venezuela'
}, {
	name: 'Vietnamese'
}, {
	name: 'Wels'
}, {
	name: 'Yemenit'
}, {
	name: 'Zambia'
}, {
	name: 'Zimbabwe'
}];

module.exports.us_states_and_dc = [{
	name: 'Alabama',
	abbreviation: 'AL'
}, {
	name: 'Alaska',
	abbreviation: 'AK'
}, {
	name: 'Arizona',
	abbreviation: 'AZ'
}, {
	name: 'Arkansas',
	abbreviation: 'AR'
}, {
	name: 'California',
	abbreviation: 'CA'
}, {
	name: 'Colorado',
	abbreviation: 'CO'
}, {
	name: 'Connecticut',
	abbreviation: 'CT'
}, {
	name: 'Delaware',
	abbreviation: 'DE'
}, {
	name: 'District of Columbia',
	abbreviation: 'DC'
}, {
	name: 'Florida',
	abbreviation: 'FL'
}, {
	name: 'Georgia',
	abbreviation: 'GA'
}, {
	name: 'Hawaii',
	abbreviation: 'HI'
}, {
	name: 'Idaho',
	abbreviation: 'ID'
}, {
	name: 'Illinois',
	abbreviation: 'IL'
}, {
	name: 'Indiana',
	abbreviation: 'IN'
}, {
	name: 'Iowa',
	abbreviation: 'IA'
}, {
	name: 'Kansas',
	abbreviation: 'KS'
}, {
	name: 'Kentucky',
	abbreviation: 'KY'
}, {
	name: 'Louisiana',
	abbreviation: 'LA'
}, {
	name: 'Maine',
	abbreviation: 'ME'
}, {
	name: 'Maryland',
	abbreviation: 'MD'
}, {
	name: 'Massachusetts',
	abbreviation: 'MA'
}, {
	name: 'Michigan',
	abbreviation: 'MI'
}, {
	name: 'Minnesota',
	abbreviation: 'MN'
}, {
	name: 'Mississippi',
	abbreviation: 'MS'
}, {
	name: 'Missouri',
	abbreviation: 'MO'
}, {
	name: 'Montana',
	abbreviation: 'MT'
}, {
	name: 'Nebraska',
	abbreviation: 'NE'
}, {
	name: 'Nevada',
	abbreviation: 'NV'
}, {
	name: 'New Hampshire',
	abbreviation: 'NH'
}, {
	name: 'New Jersey',
	abbreviation: 'NJ'
}, {
	name: 'New Mexico',
	abbreviation: 'NM'
}, {
	name: 'New York',
	abbreviation: 'NY'
}, {
	name: 'North Carolina',
	abbreviation: 'NC'
}, {
	name: 'North Dakota',
	abbreviation: 'ND'
}, {
	name: 'Ohio',
	abbreviation: 'OH'
}, {
	name: 'Oklahoma',
	abbreviation: 'OK'
}, {
	name: 'Oregon',
	abbreviation: 'OR'
}, {
	name: 'Pennsylvania',
	abbreviation: 'PA'
}, {
	name: 'Rhode Island',
	abbreviation: 'RI'
}, {
	name: 'South Carolina',
	abbreviation: 'SC'
}, {
	name: 'South Dakota',
	abbreviation: 'SD'
}, {
	name: 'Tennessee',
	abbreviation: 'TN'
}, {
	name: 'Texas',
	abbreviation: 'TX'
}, {
	name: 'Utah',
	abbreviation: 'UT'
}, {
	name: 'Vermont',
	abbreviation: 'VT'
}, {
	name: 'Virginia',
	abbreviation: 'VA'
}, {
	name: 'Washington',
	abbreviation: 'WA'
}, {
	name: 'West Virginia',
	abbreviation: 'WV'
}, {
	name: 'Wisconsin',
	abbreviation: 'WI'
}, {
	name: 'Wyoming',
	abbreviation: 'WY'
}];

module.exports.territories = [{
	name: 'American Samoa',
	abbreviation: 'AS'
}, {
	name: 'Federated States of Micronesia',
	abbreviation: 'FM'
}, {
	name: 'Guam',
	abbreviation: 'GU'
}, {
	name: 'Marshall Islands',
	abbreviation: 'MH'
}, {
	name: 'Northern Mariana Islands',
	abbreviation: 'MP'
}, {
	name: 'Puerto Rico',
	abbreviation: 'PR'
}, {
	name: 'Virgin Islands, U.S.',
	abbreviation: 'VI'
}];

module.exports.armed_forces = [{
	name: 'Armed Forces Europe',
	abbreviation: 'AE'
}, {
	name: 'Armed Forces Pacific',
	abbreviation: 'AP'
}, {
	name: 'Armed Forces the Americas',
	abbreviation: 'AA'
}];

module.exports.country_regions = {
	it: [{
		name: "Valle d'Aosta",
		abbreviation: "VDA"
	}, {
		name: "Piemonte",
		abbreviation: "PIE"
	}, {
		name: "Lombardia",
		abbreviation: "LOM"
	}, {
		name: "Veneto",
		abbreviation: "VEN"
	}, {
		name: "Trentino Alto Adige",
		abbreviation: "TAA"
	}, {
		name: "Friuli Venezia Giulia",
		abbreviation: "FVG"
	}, {
		name: "Liguria",
		abbreviation: "LIG"
	}, {
		name: "Emilia Romagna",
		abbreviation: "EMR"
	}, {
		name: "Toscana",
		abbreviation: "TOS"
	}, {
		name: "Umbria",
		abbreviation: "UMB"
	}, {
		name: "Marche",
		abbreviation: "MAR"
	}, {
		name: "Abruzzo",
		abbreviation: "ABR"
	}, {
		name: "Lazio",
		abbreviation: "LAZ"
	}, {
		name: "Campania",
		abbreviation: "CAM"
	}, {
		name: "Puglia",
		abbreviation: "PUG"
	}, {
		name: "Basilicata",
		abbreviation: "BAS"
	}, {
		name: "Molise",
		abbreviation: "MOL"
	}, {
		name: "Calabria",
		abbreviation: "CAL"
	}, {
		name: "Sicilia",
		abbreviation: "SIC"
	}, {
		name: "Sardegna",
		abbreviation: "SAR"
	}]
};

module.exports.street_suffixes = {
	'us': [{
		name: 'Avenue',
		abbreviation: 'Ave'
	}, {
		name: 'Boulevard',
		abbreviation: 'Blvd'
	}, {
		name: 'Center',
		abbreviation: 'Ctr'
	}, {
		name: 'Circle',
		abbreviation: 'Cir'
	}, {
		name: 'Court',
		abbreviation: 'Ct'
	}, {
		name: 'Drive',
		abbreviation: 'Dr'
	}, {
		name: 'Extension',
		abbreviation: 'Ext'
	}, {
		name: 'Glen',
		abbreviation: 'Gln'
	}, {
		name: 'Grove',
		abbreviation: 'Grv'
	}, {
		name: 'Heights',
		abbreviation: 'Hts'
	}, {
		name: 'Highway',
		abbreviation: 'Hwy'
	}, {
		name: 'Junction',
		abbreviation: 'Jct'
	}, {
		name: 'Key',
		abbreviation: 'Key'
	}, {
		name: 'Lane',
		abbreviation: 'Ln'
	}, {
		name: 'Loop',
		abbreviation: 'Loop'
	}, {
		name: 'Manor',
		abbreviation: 'Mnr'
	}, {
		name: 'Mill',
		abbreviation: 'Mill'
	}, {
		name: 'Park',
		abbreviation: 'Park'
	}, {
		name: 'Parkway',
		abbreviation: 'Pkwy'
	}, {
		name: 'Pass',
		abbreviation: 'Pass'
	}, {
		name: 'Path',
		abbreviation: 'Path'
	}, {
		name: 'Pike',
		abbreviation: 'Pike'
	}, {
		name: 'Place',
		abbreviation: 'Pl'
	}, {
		name: 'Plaza',
		abbreviation: 'Plz'
	}, {
		name: 'Point',
		abbreviation: 'Pt'
	}, {
		name: 'Ridge',
		abbreviation: 'Rdg'
	}, {
		name: 'River',
		abbreviation: 'Riv'
	}, {
		name: 'Road',
		abbreviation: 'Rd'
	}, {
		name: 'Square',
		abbreviation: 'Sq'
	}, {
		name: 'Street',
		abbreviation: 'St'
	}, {
		name: 'Terrace',
		abbreviation: 'Ter'
	}, {
		name: 'Trail',
		abbreviation: 'Trl'
	}, {
		name: 'Turnpike',
		abbreviation: 'Tpke'
	}, {
		name: 'View',
		abbreviation: 'Vw'
	}, {
		name: 'Way',
		abbreviation: 'Way'
	}],
	'it': [{
		name: 'Accesso',
		abbreviation: 'Acc.'
	}, {
		name: 'Alzaia',
		abbreviation: 'Alz.'
	}, {
		name: 'Arco',
		abbreviation: 'Arco'
	}, {
		name: 'Archivolto',
		abbreviation: 'Acv.'
	}, {
		name: 'Arena',
		abbreviation: 'Arena'
	}, {
		name: 'Argine',
		abbreviation: 'Argine'
	}, {
		name: 'Bacino',
		abbreviation: 'Bacino'
	}, {
		name: 'Banchi',
		abbreviation: 'Banchi'
	}, {
		name: 'Banchina',
		abbreviation: 'Ban.'
	}, {
		name: 'Bastioni',
		abbreviation: 'Bas.'
	}, {
		name: 'Belvedere',
		abbreviation: 'Belv.'
	}, {
		name: 'Borgata',
		abbreviation: 'B.ta'
	}, {
		name: 'Borgo',
		abbreviation: 'B.go'
	}, {
		name: 'Calata',
		abbreviation: 'Cal.'
	}, {
		name: 'Calle',
		abbreviation: 'Calle'
	}, {
		name: 'Campiello',
		abbreviation: 'Cam.'
	}, {
		name: 'Campo',
		abbreviation: 'Cam.'
	}, {
		name: 'Canale',
		abbreviation: 'Can.'
	}, {
		name: 'Carraia',
		abbreviation: 'Carr.'
	}, {
		name: 'Cascina',
		abbreviation: 'Cascina'
	}, {
		name: 'Case sparse',
		abbreviation: 'c.s.'
	}, {
		name: 'Cavalcavia',
		abbreviation: 'Cv.'
	}, {
		name: 'Circonvallazione',
		abbreviation: 'Cv.'
	}, {
		name: 'Complanare',
		abbreviation: 'C.re'
	}, {
		name: 'Contrada',
		abbreviation: 'C.da'
	}, {
		name: 'Corso',
		abbreviation: 'C.so'
	}, {
		name: 'Corte',
		abbreviation: 'C.te'
	}, {
		name: 'Cortile',
		abbreviation: 'C.le'
	}, {
		name: 'Diramazione',
		abbreviation: 'Dir.'
	}, {
		name: 'Fondaco',
		abbreviation: 'F.co'
	}, {
		name: 'Fondamenta',
		abbreviation: 'F.ta'
	}, {
		name: 'Fondo',
		abbreviation: 'F.do'
	}, {
		name: 'Frazione',
		abbreviation: 'Fr.'
	}, {
		name: 'Isola',
		abbreviation: 'Is.'
	}, {
		name: 'Largo',
		abbreviation: 'L.go'
	}, {
		name: 'Litoranea',
		abbreviation: 'Lit.'
	}, {
		name: 'Lungolago',
		abbreviation: 'L.go lago'
	}, {
		name: 'Lungo Po',
		abbreviation: 'l.go Po'
	}, {
		name: 'Molo',
		abbreviation: 'Molo'
	}, {
		name: 'Mura',
		abbreviation: 'Mura'
	}, {
		name: 'Passaggio privato',
		abbreviation: 'pass. priv.'
	}, {
		name: 'Passeggiata',
		abbreviation: 'Pass.'
	}, {
		name: 'Piazza',
		abbreviation: 'P.zza'
	}, {
		name: 'Piazzale',
		abbreviation: 'P.le'
	}, {
		name: 'Ponte',
		abbreviation: 'P.te'
	}, {
		name: 'Portico',
		abbreviation: 'P.co'
	}, {
		name: 'Rampa',
		abbreviation: 'Rampa'
	}, {
		name: 'Regione',
		abbreviation: 'Reg.'
	}, {
		name: 'Rione',
		abbreviation: 'R.ne'
	}, {
		name: 'Rio',
		abbreviation: 'Rio'
	}, {
		name: 'Ripa',
		abbreviation: 'Ripa'
	}, {
		name: 'Riva',
		abbreviation: 'Riva'
	}, {
		name: 'Rondò',
		abbreviation: 'Rondò'
	}, {
		name: 'Rotonda',
		abbreviation: 'Rot.'
	}, {
		name: 'Sagrato',
		abbreviation: 'Sagr.'
	}, {
		name: 'Salita',
		abbreviation: 'Sal.'
	}, {
		name: 'Scalinata',
		abbreviation: 'Scal.'
	}, {
		name: 'Scalone',
		abbreviation: 'Scal.'
	}, {
		name: 'Slargo',
		abbreviation: 'Sl.'
	}, {
		name: 'Sottoportico',
		abbreviation: 'Sott.'
	}, {
		name: 'Strada',
		abbreviation: 'Str.'
	}, {
		name: 'Stradale',
		abbreviation: 'Str.le'
	}, {
		name: 'Strettoia',
		abbreviation: 'Strett.'
	}, {
		name: 'Traversa',
		abbreviation: 'Trav.'
	}, {
		name: 'Via',
		abbreviation: 'V.'
	}, {
		name: 'Viale',
		abbreviation: 'V.le'
	}, {
		name: 'Vicinale',
		abbreviation: 'Vic.le'
	}, {
		name: 'Vicolo',
		abbreviation: 'Vic.'
	}]
};

module.exports.months = [{
	name: 'January',
	short_name: 'Jan',
	numeric: '01',
	days: 31
},
	// Not messing with leap years...
	{
		name: 'February',
		short_name: 'Feb',
		numeric: '02',
		days: 28
	}, {
		name: 'March',
		short_name: 'Mar',
		numeric: '03',
		days: 31
	}, {
		name: 'April',
		short_name: 'Apr',
		numeric: '04',
		days: 30
	}, {
		name: 'May',
		short_name: 'May',
		numeric: '05',
		days: 31
	}, {
		name: 'June',
		short_name: 'Jun',
		numeric: '06',
		days: 30
	}, {
		name: 'July',
		short_name: 'Jul',
		numeric: '07',
		days: 31
	}, {
		name: 'August',
		short_name: 'Aug',
		numeric: '08',
		days: 31
	}, {
		name: 'September',
		short_name: 'Sep',
		numeric: '09',
		days: 30
	}, {
		name: 'October',
		short_name: 'Oct',
		numeric: '10',
		days: 31
	}, {
		name: 'November',
		short_name: 'Nov',
		numeric: '11',
		days: 30
	}, {
		name: 'December',
		short_name: 'Dec',
		numeric: '12',
		days: 31
	}
	];

// http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
module.exports.cc_types = [{
	name: "American Express",
	short_name: 'amex',
	prefix: '34',
	length: 15
}, {
	name: "Bankcard",
	short_name: 'bankcard',
	prefix: '5610',
	length: 16
}, {
	name: "China UnionPay",
	short_name: 'chinaunion',
	prefix: '62',
	length: 16
}, {
	name: "Diners Club Carte Blanche",
	short_name: 'dccarte',
	prefix: '300',
	length: 14
}, {
	name: "Diners Club enRoute",
	short_name: 'dcenroute',
	prefix: '2014',
	length: 15
}, {
	name: "Diners Club International",
	short_name: 'dcintl',
	prefix: '36',
	length: 14
}, {
	name: "Diners Club United States & Canada",
	short_name: 'dcusc',
	prefix: '54',
	length: 16
}, {
	name: "Discover Card",
	short_name: 'discover',
	prefix: '6011',
	length: 16
}, {
	name: "InstaPayment",
	short_name: 'instapay',
	prefix: '637',
	length: 16
}, {
	name: "JCB",
	short_name: 'jcb',
	prefix: '3528',
	length: 16
}, {
	name: "Laser",
	short_name: 'laser',
	prefix: '6304',
	length: 16
}, {
	name: "Maestro",
	short_name: 'maestro',
	prefix: '5018',
	length: 16
}, {
	name: "Mastercard",
	short_name: 'mc',
	prefix: '51',
	length: 16
}, {
	name: "Solo",
	short_name: 'solo',
	prefix: '6334',
	length: 16
}, {
	name: "Switch",
	short_name: 'switch',
	prefix: '4903',
	length: 16
}, {
	name: "Visa",
	short_name: 'visa',
	prefix: '4',
	length: 16
}, {
	name: "Visa Electron",
	short_name: 'electron',
	prefix: '4026',
	length: 16
}];

//return all world currency by ISO 4217
module.exports.currency_types = [{
	'code': 'AED',
	'name': 'United Arab Emirates Dirham'
}, {
	'code': 'AFN',
	'name': 'Afghanistan Afghani'
}, {
	'code': 'ALL',
	'name': 'Albania Lek'
}, {
	'code': 'AMD',
	'name': 'Armenia Dram'
}, {
	'code': 'ANG',
	'name': 'Netherlands Antilles Guilder'
}, {
	'code': 'AOA',
	'name': 'Angola Kwanza'
}, {
	'code': 'ARS',
	'name': 'Argentina Peso'
}, {
	'code': 'AUD',
	'name': 'Australia Dollar'
}, {
	'code': 'AWG',
	'name': 'Aruba Guilder'
}, {
	'code': 'AZN',
	'name': 'Azerbaijan New Manat'
}, {
	'code': 'BAM',
	'name': 'Bosnia and Herzegovina Convertible Marka'
}, {
	'code': 'BBD',
	'name': 'Barbados Dollar'
}, {
	'code': 'BDT',
	'name': 'Bangladesh Taka'
}, {
	'code': 'BGN',
	'name': 'Bulgaria Lev'
}, {
	'code': 'BHD',
	'name': 'Bahrain Dinar'
}, {
	'code': 'BIF',
	'name': 'Burundi Franc'
}, {
	'code': 'BMD',
	'name': 'Bermuda Dollar'
}, {
	'code': 'BND',
	'name': 'Brunei Darussalam Dollar'
}, {
	'code': 'BOB',
	'name': 'Bolivia Boliviano'
}, {
	'code': 'BRL',
	'name': 'Brazil Real'
}, {
	'code': 'BSD',
	'name': 'Bahamas Dollar'
}, {
	'code': 'BTN',
	'name': 'Bhutan Ngultrum'
}, {
	'code': 'BWP',
	'name': 'Botswana Pula'
}, {
	'code': 'BYR',
	'name': 'Belarus Ruble'
}, {
	'code': 'BZD',
	'name': 'Belize Dollar'
}, {
	'code': 'CAD',
	'name': 'Canada Dollar'
}, {
	'code': 'CDF',
	'name': 'Congo/Kinshasa Franc'
}, {
	'code': 'CHF',
	'name': 'Switzerland Franc'
}, {
	'code': 'CLP',
	'name': 'Chile Peso'
}, {
	'code': 'CNY',
	'name': 'China Yuan Renminbi'
}, {
	'code': 'COP',
	'name': 'Colombia Peso'
}, {
	'code': 'CRC',
	'name': 'Costa Rica Colon'
}, {
	'code': 'CUC',
	'name': 'Cuba Convertible Peso'
}, {
	'code': 'CUP',
	'name': 'Cuba Peso'
}, {
	'code': 'CVE',
	'name': 'Cape Verde Escudo'
}, {
	'code': 'CZK',
	'name': 'Czech Republic Koruna'
}, {
	'code': 'DJF',
	'name': 'Djibouti Franc'
}, {
	'code': 'DKK',
	'name': 'Denmark Krone'
}, {
	'code': 'DOP',
	'name': 'Dominican Republic Peso'
}, {
	'code': 'DZD',
	'name': 'Algeria Dinar'
}, {
	'code': 'EGP',
	'name': 'Egypt Pound'
}, {
	'code': 'ERN',
	'name': 'Eritrea Nakfa'
}, {
	'code': 'ETB',
	'name': 'Ethiopia Birr'
}, {
	'code': 'EUR',
	'name': 'Euro Member Countries'
}, {
	'code': 'FJD',
	'name': 'Fiji Dollar'
}, {
	'code': 'FKP',
	'name': 'Falkland Islands (Malvinas) Pound'
}, {
	'code': 'GBP',
	'name': 'United Kingdom Pound'
}, {
	'code': 'GEL',
	'name': 'Georgia Lari'
}, {
	'code': 'GGP',
	'name': 'Guernsey Pound'
}, {
	'code': 'GHS',
	'name': 'Ghana Cedi'
}, {
	'code': 'GIP',
	'name': 'Gibraltar Pound'
}, {
	'code': 'GMD',
	'name': 'Gambia Dalasi'
}, {
	'code': 'GNF',
	'name': 'Guinea Franc'
}, {
	'code': 'GTQ',
	'name': 'Guatemala Quetzal'
}, {
	'code': 'GYD',
	'name': 'Guyana Dollar'
}, {
	'code': 'HKD',
	'name': 'Hong Kong Dollar'
}, {
	'code': 'HNL',
	'name': 'Honduras Lempira'
}, {
	'code': 'HRK',
	'name': 'Croatia Kuna'
}, {
	'code': 'HTG',
	'name': 'Haiti Gourde'
}, {
	'code': 'HUF',
	'name': 'Hungary Forint'
}, {
	'code': 'IDR',
	'name': 'Indonesia Rupiah'
}, {
	'code': 'ILS',
	'name': 'Israel Shekel'
}, {
	'code': 'IMP',
	'name': 'Isle of Man Pound'
}, {
	'code': 'INR',
	'name': 'India Rupee'
}, {
	'code': 'IQD',
	'name': 'Iraq Dinar'
}, {
	'code': 'IRR',
	'name': 'Iran Rial'
}, {
	'code': 'ISK',
	'name': 'Iceland Krona'
}, {
	'code': 'JEP',
	'name': 'Jersey Pound'
}, {
	'code': 'JMD',
	'name': 'Jamaica Dollar'
}, {
	'code': 'JOD',
	'name': 'Jordan Dinar'
}, {
	'code': 'JPY',
	'name': 'Japan Yen'
}, {
	'code': 'KES',
	'name': 'Kenya Shilling'
}, {
	'code': 'KGS',
	'name': 'Kyrgyzstan Som'
}, {
	'code': 'KHR',
	'name': 'Cambodia Riel'
}, {
	'code': 'KMF',
	'name': 'Comoros Franc'
}, {
	'code': 'KPW',
	'name': 'Korea (North) Won'
}, {
	'code': 'KRW',
	'name': 'Korea (South) Won'
}, {
	'code': 'KWD',
	'name': 'Kuwait Dinar'
}, {
	'code': 'KYD',
	'name': 'Cayman Islands Dollar'
}, {
	'code': 'KZT',
	'name': 'Kazakhstan Tenge'
}, {
	'code': 'LAK',
	'name': 'Laos Kip'
}, {
	'code': 'LBP',
	'name': 'Lebanon Pound'
}, {
	'code': 'LKR',
	'name': 'Sri Lanka Rupee'
}, {
	'code': 'LRD',
	'name': 'Liberia Dollar'
}, {
	'code': 'LSL',
	'name': 'Lesotho Loti'
}, {
	'code': 'LTL',
	'name': 'Lithuania Litas'
}, {
	'code': 'LYD',
	'name': 'Libya Dinar'
}, {
	'code': 'MAD',
	'name': 'Morocco Dirham'
}, {
	'code': 'MDL',
	'name': 'Moldova Leu'
}, {
	'code': 'MGA',
	'name': 'Madagascar Ariary'
}, {
	'code': 'MKD',
	'name': 'Macedonia Denar'
}, {
	'code': 'MMK',
	'name': 'Myanmar (Burma) Kyat'
}, {
	'code': 'MNT',
	'name': 'Mongolia Tughrik'
}, {
	'code': 'MOP',
	'name': 'Macau Pataca'
}, {
	'code': 'MRO',
	'name': 'Mauritania Ouguiya'
}, {
	'code': 'MUR',
	'name': 'Mauritius Rupee'
}, {
	'code': 'MVR',
	'name': 'Maldives (Maldive Islands) Rufiyaa'
}, {
	'code': 'MWK',
	'name': 'Malawi Kwacha'
}, {
	'code': 'MXN',
	'name': 'Mexico Peso'
}, {
	'code': 'MYR',
	'name': 'Malaysia Ringgit'
}, {
	'code': 'MZN',
	'name': 'Mozambique Metical'
}, {
	'code': 'NAD',
	'name': 'Namibia Dollar'
}, {
	'code': 'NGN',
	'name': 'Nigeria Naira'
}, {
	'code': 'NIO',
	'name': 'Nicaragua Cordoba'
}, {
	'code': 'NOK',
	'name': 'Norway Krone'
}, {
	'code': 'NPR',
	'name': 'Nepal Rupee'
}, {
	'code': 'NZD',
	'name': 'New Zealand Dollar'
}, {
	'code': 'OMR',
	'name': 'Oman Rial'
}, {
	'code': 'PAB',
	'name': 'Panama Balboa'
}, {
	'code': 'PEN',
	'name': 'Peru Nuevo Sol'
}, {
	'code': 'PGK',
	'name': 'Papua New Guinea Kina'
}, {
	'code': 'PHP',
	'name': 'Philippines Peso'
}, {
	'code': 'PKR',
	'name': 'Pakistan Rupee'
}, {
	'code': 'PLN',
	'name': 'Poland Zloty'
}, {
	'code': 'PYG',
	'name': 'Paraguay Guarani'
}, {
	'code': 'QAR',
	'name': 'Qatar Riyal'
}, {
	'code': 'RON',
	'name': 'Romania New Leu'
}, {
	'code': 'RSD',
	'name': 'Serbia Dinar'
}, {
	'code': 'RUB',
	'name': 'Russia Ruble'
}, {
	'code': 'RWF',
	'name': 'Rwanda Franc'
}, {
	'code': 'SAR',
	'name': 'Saudi Arabia Riyal'
}, {
	'code': 'SBD',
	'name': 'Solomon Islands Dollar'
}, {
	'code': 'SCR',
	'name': 'Seychelles Rupee'
}, {
	'code': 'SDG',
	'name': 'Sudan Pound'
}, {
	'code': 'SEK',
	'name': 'Sweden Krona'
}, {
	'code': 'SGD',
	'name': 'Singapore Dollar'
}, {
	'code': 'SHP',
	'name': 'Saint Helena Pound'
}, {
	'code': 'SLL',
	'name': 'Sierra Leone Leone'
}, {
	'code': 'SOS',
	'name': 'Somalia Shilling'
}, {
	'code': 'SPL',
	'name': 'Seborga Luigino'
}, {
	'code': 'SRD',
	'name': 'Suriname Dollar'
}, {
	'code': 'STD',
	'name': 'São Tomé and Príncipe Dobra'
}, {
	'code': 'SVC',
	'name': 'El Salvador Colon'
}, {
	'code': 'SYP',
	'name': 'Syria Pound'
}, {
	'code': 'SZL',
	'name': 'Swaziland Lilangeni'
}, {
	'code': 'THB',
	'name': 'Thailand Baht'
}, {
	'code': 'TJS',
	'name': 'Tajikistan Somoni'
}, {
	'code': 'TMT',
	'name': 'Turkmenistan Manat'
}, {
	'code': 'TND',
	'name': 'Tunisia Dinar'
}, {
	'code': 'TOP',
	'name': 'Tonga Pa\'anga'
}, {
	'code': 'TRY',
	'name': 'Turkey Lira'
}, {
	'code': 'TTD',
	'name': 'Trinidad and Tobago Dollar'
}, {
	'code': 'TVD',
	'name': 'Tuvalu Dollar'
}, {
	'code': 'TWD',
	'name': 'Taiwan New Dollar'
}, {
	'code': 'TZS',
	'name': 'Tanzania Shilling'
}, {
	'code': 'UAH',
	'name': 'Ukraine Hryvnia'
}, {
	'code': 'UGX',
	'name': 'Uganda Shilling'
}, {
	'code': 'USD',
	'name': 'United States Dollar'
}, {
	'code': 'UYU',
	'name': 'Uruguay Peso'
}, {
	'code': 'UZS',
	'name': 'Uzbekistan Som'
}, {
	'code': 'VEF',
	'name': 'Venezuela Bolivar'
}, {
	'code': 'VND',
	'name': 'Viet Nam Dong'
}, {
	'code': 'VUV',
	'name': 'Vanuatu Vatu'
}, {
	'code': 'WST',
	'name': 'Samoa Tala'
}, {
	'code': 'XAF',
	'name': 'Communauté Financière Africaine (BEAC) CFA Franc BEAC'
}, {
	'code': 'XCD',
	'name': 'East Caribbean Dollar'
}, {
	'code': 'XDR',
	'name': 'International Monetary Fund (IMF) Special Drawing Rights'
}, {
	'code': 'XOF',
	'name': 'Communauté Financière Africaine (BCEAO) Franc'
}, {
	'code': 'XPF',
	'name': 'Comptoirs Français du Pacifique (CFP) Franc'
}, {
	'code': 'YER',
	'name': 'Yemen Rial'
}, {
	'code': 'ZAR',
	'name': 'South Africa Rand'
}, {
	'code': 'ZMW',
	'name': 'Zambia Kwacha'
}, {
	'code': 'ZWD',
	'name': 'Zimbabwe Dollar'
}];

// return the names of all valide colors
module.exports.colorNames = ["AliceBlue", "Black", "Navy", "DarkBlue", "MediumBlue", "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen",
"Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise",
"Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "RebeccaPurple", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", "MediumSlateBlue", "LawnGreen", "Chartreuse",
"Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "Ivory", "White",
"DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue",
"FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed",
"Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke",
"MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", "DarkOrange", "LightSalmon", "Orange",
"LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow"
];

module.exports.fileExtension = {
	"raster": ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
	"vector": ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
	"3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
	"document": ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
};

// Data taken from https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
module.exports.timezones = [{
	"name": "Dateline Standard Time",
	"abbr": "DST",
	"offset": -12,
	"isdst": false,
	"text": "(UTC-12:00) International Date Line West",
	"utc": [
	"Etc/GMT+12"
	]
}, {
	"name": "UTC-11",
	"abbr": "U",
	"offset": -11,
	"isdst": false,
	"text": "(UTC-11:00) Coordinated Universal Time-11",
	"utc": [
	"Etc/GMT+11",
	"Pacific/Midway",
	"Pacific/Niue",
	"Pacific/Pago_Pago"
	]
}, {
	"name": "Hawaiian Standard Time",
	"abbr": "HST",
	"offset": -10,
	"isdst": false,
	"text": "(UTC-10:00) Hawaii",
	"utc": [
	"Etc/GMT+10",
	"Pacific/Honolulu",
	"Pacific/Johnston",
	"Pacific/Rarotonga",
	"Pacific/Tahiti"
	]
}, {
	"name": "Alaskan Standard Time",
	"abbr": "AKDT",
	"offset": -8,
	"isdst": true,
	"text": "(UTC-09:00) Alaska",
	"utc": [
	"America/Anchorage",
	"America/Juneau",
	"America/Nome",
	"America/Sitka",
	"America/Yakutat"
	]
}, {
	"name": "Pacific Standard Time (Mexico)",
	"abbr": "PDT",
	"offset": -7,
	"isdst": true,
	"text": "(UTC-08:00) Baja California",
	"utc": [
	"America/Santa_Isabel"
	]
}, {
	"name": "Pacific Standard Time",
	"abbr": "PDT",
	"offset": -7,
	"isdst": true,
	"text": "(UTC-08:00) Pacific Time (US & Canada)",
	"utc": [
	"America/Dawson",
	"America/Los_Angeles",
	"America/Tijuana",
	"America/Vancouver",
	"America/Whitehorse",
	"PST8PDT"
	]
}, {
	"name": "US Mountain Standard Time",
	"abbr": "UMST",
	"offset": -7,
	"isdst": false,
	"text": "(UTC-07:00) Arizona",
	"utc": [
	"America/Creston",
	"America/Dawson_Creek",
	"America/Hermosillo",
	"America/Phoenix",
	"Etc/GMT+7"
	]
}, {
	"name": "Mountain Standard Time (Mexico)",
	"abbr": "MDT",
	"offset": -6,
	"isdst": true,
	"text": "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
	"utc": [
	"America/Chihuahua",
	"America/Mazatlan"
	]
}, {
	"name": "Mountain Standard Time",
	"abbr": "MDT",
	"offset": -6,
	"isdst": true,
	"text": "(UTC-07:00) Mountain Time (US & Canada)",
	"utc": [
	"America/Boise",
	"America/Cambridge_Bay",
	"America/Denver",
	"America/Edmonton",
	"America/Inuvik",
	"America/Ojinaga",
	"America/Yellowknife",
	"MST7MDT"
	]
}, {
	"name": "Central America Standard Time",
	"abbr": "CAST",
	"offset": -6,
	"isdst": false,
	"text": "(UTC-06:00) Central America",
	"utc": [
	"America/Belize",
	"America/Costa_Rica",
	"America/El_Salvador",
	"America/Guatemala",
	"America/Managua",
	"America/Tegucigalpa",
	"Etc/GMT+6",
	"Pacific/Galapagos"
	]
}, {
	"name": "Central Standard Time",
	"abbr": "CDT",
	"offset": -5,
	"isdst": true,
	"text": "(UTC-06:00) Central Time (US & Canada)",
	"utc": [
	"America/Chicago",
	"America/Indiana/Knox",
	"America/Indiana/Tell_City",
	"America/Matamoros",
	"America/Menominee",
	"America/North_Dakota/Beulah",
	"America/North_Dakota/Center",
	"America/North_Dakota/New_Salem",
	"America/Rainy_River",
	"America/Rankin_Inlet",
	"America/Resolute",
	"America/Winnipeg",
	"CST6CDT"
	]
}, {
	"name": "Central Standard Time (Mexico)",
	"abbr": "CDT",
	"offset": -5,
	"isdst": true,
	"text": "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
	"utc": [
	"America/Bahia_Banderas",
	"America/Cancun",
	"America/Merida",
	"America/Mexico_City",
	"America/Monterrey"
	]
}, {
	"name": "Canada Central Standard Time",
	"abbr": "CCST",
	"offset": -6,
	"isdst": false,
	"text": "(UTC-06:00) Saskatchewan",
	"utc": [
	"America/Regina",
	"America/Swift_Current"
	]
}, {
	"name": "SA Pacific Standard Time",
	"abbr": "SPST",
	"offset": -5,
	"isdst": false,
	"text": "(UTC-05:00) Bogota, Lima, Quito",
	"utc": [
	"America/Bogota",
	"America/Cayman",
	"America/Coral_Harbour",
	"America/Eirunepe",
	"America/Guayaquil",
	"America/Jamaica",
	"America/Lima",
	"America/Panama",
	"America/Rio_Branco",
	"Etc/GMT+5"
	]
}, {
	"name": "Eastern Standard Time",
	"abbr": "EDT",
	"offset": -4,
	"isdst": true,
	"text": "(UTC-05:00) Eastern Time (US & Canada)",
	"utc": [
	"America/Detroit",
	"America/Havana",
	"America/Indiana/Petersburg",
	"America/Indiana/Vincennes",
	"America/Indiana/Winamac",
	"America/Iqaluit",
	"America/Kentucky/Monticello",
	"America/Louisville",
	"America/Montreal",
	"America/Nassau",
	"America/New_York",
	"America/Nipigon",
	"America/Pangnirtung",
	"America/Port-au-Prince",
	"America/Thunder_Bay",
	"America/Toronto",
	"EST5EDT"
	]
}, {
	"name": "US Eastern Standard Time",
	"abbr": "UEDT",
	"offset": -4,
	"isdst": true,
	"text": "(UTC-05:00) Indiana (East)",
	"utc": [
	"America/Indiana/Marengo",
	"America/Indiana/Vevay",
	"America/Indianapolis"
	]
}, {
	"name": "Venezuela Standard Time",
	"abbr": "VST",
	"offset": -4.5,
	"isdst": false,
	"text": "(UTC-04:30) Caracas",
	"utc": [
	"America/Caracas"
	]
}, {
	"name": "Paraguay Standard Time",
	"abbr": "PST",
	"offset": -4,
	"isdst": false,
	"text": "(UTC-04:00) Asuncion",
	"utc": [
	"America/Asuncion"
	]
}, {
	"name": "Atlantic Standard Time",
	"abbr": "ADT",
	"offset": -3,
	"isdst": true,
	"text": "(UTC-04:00) Atlantic Time (Canada)",
	"utc": [
	"America/Glace_Bay",
	"America/Goose_Bay",
	"America/Halifax",
	"America/Moncton",
	"America/Thule",
	"Atlantic/Bermuda"
	]
}, {
	"name": "Central Brazilian Standard Time",
	"abbr": "CBST",
	"offset": -4,
	"isdst": false,
	"text": "(UTC-04:00) Cuiaba",
	"utc": [
	"America/Campo_Grande",
	"America/Cuiaba"
	]
}, {
	"name": "SA Western Standard Time",
	"abbr": "SWST",
	"offset": -4,
	"isdst": false,
	"text": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
	"utc": [
	"America/Anguilla",
	"America/Antigua",
	"America/Aruba",
	"America/Barbados",
	"America/Blanc-Sablon",
	"America/Boa_Vista",
	"America/Curacao",
	"America/Dominica",
	"America/Grand_Turk",
	"America/Grenada",
	"America/Guadeloupe",
	"America/Guyana",
	"America/Kralendijk",
	"America/La_Paz",
	"America/Lower_Princes",
	"America/Manaus",
	"America/Marigot",
	"America/Martinique",
	"America/Montserrat",
	"America/Port_of_Spain",
	"America/Porto_Velho",
	"America/Puerto_Rico",
	"America/Santo_Domingo",
	"America/St_Barthelemy",
	"America/St_Kitts",
	"America/St_Lucia",
	"America/St_Thomas",
	"America/St_Vincent",
	"America/Tortola",
	"Etc/GMT+4"
	]
}, {
	"name": "Pacific SA Standard Time",
	"abbr": "PSST",
	"offset": -4,
	"isdst": false,
	"text": "(UTC-04:00) Santiago",
	"utc": [
	"America/Santiago",
	"Antarctica/Palmer"
	]
}, {
	"name": "Newfoundland Standard Time",
	"abbr": "NDT",
	"offset": -2.5,
	"isdst": true,
	"text": "(UTC-03:30) Newfoundland",
	"utc": [
	"America/St_Johns"
	]
}, {
	"name": "E. South America Standard Time",
	"abbr": "ESAST",
	"offset": -3,
	"isdst": false,
	"text": "(UTC-03:00) Brasilia",
	"utc": [
	"America/Sao_Paulo"
	]
}, {
	"name": "Argentina Standard Time",
	"abbr": "AST",
	"offset": -3,
	"isdst": false,
	"text": "(UTC-03:00) Buenos Aires",
	"utc": [
	"America/Argentina/La_Rioja",
	"America/Argentina/Rio_Gallegos",
	"America/Argentina/Salta",
	"America/Argentina/San_Juan",
	"America/Argentina/San_Luis",
	"America/Argentina/Tucuman",
	"America/Argentina/Ushuaia",
	"America/Buenos_Aires",
	"America/Catamarca",
	"America/Cordoba",
	"America/Jujuy",
	"America/Mendoza"
	]
}, {
	"name": "SA Eastern Standard Time",
	"abbr": "SEST",
	"offset": -3,
	"isdst": false,
	"text": "(UTC-03:00) Cayenne, Fortaleza",
	"utc": [
	"America/Araguaina",
	"America/Belem",
	"America/Cayenne",
	"America/Fortaleza",
	"America/Maceio",
	"America/Paramaribo",
	"America/Recife",
	"America/Santarem",
	"Antarctica/Rothera",
	"Atlantic/Stanley",
	"Etc/GMT+3"
	]
}, {
	"name": "Greenland Standard Time",
	"abbr": "GDT",
	"offset": -2,
	"isdst": true,
	"text": "(UTC-03:00) Greenland",
	"utc": [
	"America/Godthab"
	]
}, {
	"name": "Montevideo Standard Time",
	"abbr": "MST",
	"offset": -3,
	"isdst": false,
	"text": "(UTC-03:00) Montevideo",
	"utc": [
	"America/Montevideo"
	]
}, {
	"name": "Bahia Standard Time",
	"abbr": "BST",
	"offset": -3,
	"isdst": false,
	"text": "(UTC-03:00) Salvador",
	"utc": [
	"America/Bahia"
	]
}, {
	"name": "UTC-02",
	"abbr": "U",
	"offset": -2,
	"isdst": false,
	"text": "(UTC-02:00) Coordinated Universal Time-02",
	"utc": [
	"America/Noronha",
	"Atlantic/South_Georgia",
	"Etc/GMT+2"
	]
}, {
	"name": "Mid-Atlantic Standard Time",
	"abbr": "MDT",
	"offset": -1,
	"isdst": true,
	"text": "(UTC-02:00) Mid-Atlantic - Old"
}, {
	"name": "Azores Standard Time",
	"abbr": "ADT",
	"offset": 0,
	"isdst": true,
	"text": "(UTC-01:00) Azores",
	"utc": [
	"America/Scoresbysund",
	"Atlantic/Azores"
	]
}, {
	"name": "Cape Verde Standard Time",
	"abbr": "CVST",
	"offset": -1,
	"isdst": false,
	"text": "(UTC-01:00) Cape Verde Is.",
	"utc": [
	"Atlantic/Cape_Verde",
	"Etc/GMT+1"
	]
}, {
	"name": "Morocco Standard Time",
	"abbr": "MDT",
	"offset": 1,
	"isdst": true,
	"text": "(UTC) Casablanca",
	"utc": [
	"Africa/Casablanca",
	"Africa/El_Aaiun"
	]
}, {
	"name": "UTC",
	"abbr": "CUT",
	"offset": 0,
	"isdst": false,
	"text": "(UTC) Coordinated Universal Time",
	"utc": [
	"America/Danmarkshavn",
	"Etc/GMT"
	]
}, {
	"name": "GMT Standard Time",
	"abbr": "GDT",
	"offset": 1,
	"isdst": true,
	"text": "(UTC) Dublin, Edinburgh, Lisbon, London",
	"utc": [
	"Atlantic/Canary",
	"Atlantic/Faeroe",
	"Atlantic/Madeira",
	"Europe/Dublin",
	"Europe/Guernsey",
	"Europe/Isle_of_Man",
	"Europe/Jersey",
	"Europe/Lisbon",
	"Europe/London"
	]
}, {
	"name": "Greenwich Standard Time",
	"abbr": "GST",
	"offset": 0,
	"isdst": false,
	"text": "(UTC) Monrovia, Reykjavik",
	"utc": [
	"Africa/Abidjan",
	"Africa/Accra",
	"Africa/Bamako",
	"Africa/Banjul",
	"Africa/Bissau",
	"Africa/Conakry",
	"Africa/Dakar",
	"Africa/Freetown",
	"Africa/Lome",
	"Africa/Monrovia",
	"Africa/Nouakchott",
	"Africa/Ouagadougou",
	"Africa/Sao_Tome",
	"Atlantic/Reykjavik",
	"Atlantic/St_Helena"
	]
}, {
	"name": "W. Europe Standard Time",
	"abbr": "WEDT",
	"offset": 2,
	"isdst": true,
	"text": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
	"utc": [
	"Arctic/Longyearbyen",
	"Europe/Amsterdam",
	"Europe/Andorra",
	"Europe/Berlin",
	"Europe/Busingen",
	"Europe/Gibraltar",
	"Europe/Luxembourg",
	"Europe/Malta",
	"Europe/Monaco",
	"Europe/Oslo",
	"Europe/Rome",
	"Europe/San_Marino",
	"Europe/Stockholm",
	"Europe/Vaduz",
	"Europe/Vatican",
	"Europe/Vienna",
	"Europe/Zurich"
	]
}, {
	"name": "Central Europe Standard Time",
	"abbr": "CEDT",
	"offset": 2,
	"isdst": true,
	"text": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
	"utc": [
	"Europe/Belgrade",
	"Europe/Bratislava",
	"Europe/Budapest",
	"Europe/Ljubljana",
	"Europe/Podgorica",
	"Europe/Prague",
	"Europe/Tirane"
	]
}, {
	"name": "Romance Standard Time",
	"abbr": "RDT",
	"offset": 2,
	"isdst": true,
	"text": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
	"utc": [
	"Africa/Ceuta",
	"Europe/Brussels",
	"Europe/Copenhagen",
	"Europe/Madrid",
	"Europe/Paris"
	]
}, {
	"name": "Central European Standard Time",
	"abbr": "CEDT",
	"offset": 2,
	"isdst": true,
	"text": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
	"utc": [
	"Europe/Sarajevo",
	"Europe/Skopje",
	"Europe/Warsaw",
	"Europe/Zagreb"
	]
}, {
	"name": "W. Central Africa Standard Time",
	"abbr": "WCAST",
	"offset": 1,
	"isdst": false,
	"text": "(UTC+01:00) West Central Africa",
	"utc": [
	"Africa/Algiers",
	"Africa/Bangui",
	"Africa/Brazzaville",
	"Africa/Douala",
	"Africa/Kinshasa",
	"Africa/Lagos",
	"Africa/Libreville",
	"Africa/Luanda",
	"Africa/Malabo",
	"Africa/Ndjamena",
	"Africa/Niamey",
	"Africa/Porto-Novo",
	"Africa/Tunis",
	"Etc/GMT-1"
	]
}, {
	"name": "Namibia Standard Time",
	"abbr": "NST",
	"offset": 1,
	"isdst": false,
	"text": "(UTC+01:00) Windhoek",
	"utc": [
	"Africa/Windhoek"
	]
}, {
	"name": "GTB Standard Time",
	"abbr": "GDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) Athens, Bucharest",
	"utc": [
	"Asia/Nicosia",
	"Europe/Athens",
	"Europe/Bucharest",
	"Europe/Chisinau"
	]
}, {
	"name": "Middle East Standard Time",
	"abbr": "MEDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) Beirut",
	"utc": [
	"Asia/Beirut"
	]
}, {
	"name": "Egypt Standard Time",
	"abbr": "EST",
	"offset": 2,
	"isdst": false,
	"text": "(UTC+02:00) Cairo",
	"utc": [
	"Africa/Cairo"
	]
}, {
	"name": "Syria Standard Time",
	"abbr": "SDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) Damascus",
	"utc": [
	"Asia/Damascus"
	]
}, {
	"name": "E. Europe Standard Time",
	"abbr": "EEDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) E. Europe"
}, {
	"name": "South Africa Standard Time",
	"abbr": "SAST",
	"offset": 2,
	"isdst": false,
	"text": "(UTC+02:00) Harare, Pretoria",
	"utc": [
	"Africa/Blantyre",
	"Africa/Bujumbura",
	"Africa/Gaborone",
	"Africa/Harare",
	"Africa/Johannesburg",
	"Africa/Kigali",
	"Africa/Lubumbashi",
	"Africa/Lusaka",
	"Africa/Maputo",
	"Africa/Maseru",
	"Africa/Mbabane",
	"Etc/GMT-2"
	]
}, {
	"name": "FLE Standard Time",
	"abbr": "FDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
	"utc": [
	"Europe/Helsinki",
	"Europe/Kiev",
	"Europe/Mariehamn",
	"Europe/Riga",
	"Europe/Sofia",
	"Europe/Tallinn",
	"Europe/Uzhgorod",
	"Europe/Vilnius",
	"Europe/Zaporozhye"
	]
}, {
	"name": "Turkey Standard Time",
	"abbr": "TDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) Istanbul",
	"utc": [
	"Europe/Istanbul"
	]
}, {
	"name": "Israel Standard Time",
	"abbr": "JDT",
	"offset": 3,
	"isdst": true,
	"text": "(UTC+02:00) Jerusalem",
	"utc": [
	"Asia/Jerusalem"
	]
}, {
	"name": "Libya Standard Time",
	"abbr": "LST",
	"offset": 2,
	"isdst": false,
	"text": "(UTC+02:00) Tripoli",
	"utc": [
	"Africa/Tripoli"
	]
}, {
	"name": "Jordan Standard Time",
	"abbr": "JST",
	"offset": 3,
	"isdst": false,
	"text": "(UTC+03:00) Amman",
	"utc": [
	"Asia/Amman"
	]
}, {
	"name": "Arabic Standard Time",
	"abbr": "AST",
	"offset": 3,
	"isdst": false,
	"text": "(UTC+03:00) Baghdad",
	"utc": [
	"Asia/Baghdad"
	]
}, {
	"name": "Kaliningrad Standard Time",
	"abbr": "KST",
	"offset": 3,
	"isdst": false,
	"text": "(UTC+03:00) Kaliningrad, Minsk",
	"utc": [
	"Europe/Kaliningrad",
	"Europe/Minsk"
	]
}, {
	"name": "Arab Standard Time",
	"abbr": "AST",
	"offset": 3,
	"isdst": false,
	"text": "(UTC+03:00) Kuwait, Riyadh",
	"utc": [
	"Asia/Aden",
	"Asia/Bahrain",
	"Asia/Kuwait",
	"Asia/Qatar",
	"Asia/Riyadh"
	]
}, {
	"name": "E. Africa Standard Time",
	"abbr": "EAST",
	"offset": 3,
	"isdst": false,
	"text": "(UTC+03:00) Nairobi",
	"utc": [
	"Africa/Addis_Ababa",
	"Africa/Asmera",
	"Africa/Dar_es_Salaam",
	"Africa/Djibouti",
	"Africa/Juba",
	"Africa/Kampala",
	"Africa/Khartoum",
	"Africa/Mogadishu",
	"Africa/Nairobi",
	"Antarctica/Syowa",
	"Etc/GMT-3",
	"Indian/Antananarivo",
	"Indian/Comoro",
	"Indian/Mayotte"
	]
}, {
	"name": "Iran Standard Time",
	"abbr": "IDT",
	"offset": 4.5,
	"isdst": true,
	"text": "(UTC+03:30) Tehran",
	"utc": [
	"Asia/Tehran"
	]
}, {
	"name": "Arabian Standard Time",
	"abbr": "AST",
	"offset": 4,
	"isdst": false,
	"text": "(UTC+04:00) Abu Dhabi, Muscat",
	"utc": [
	"Asia/Dubai",
	"Asia/Muscat",
	"Etc/GMT-4"
	]
}, {
	"name": "Azerbaijan Standard Time",
	"abbr": "ADT",
	"offset": 5,
	"isdst": true,
	"text": "(UTC+04:00) Baku",
	"utc": [
	"Asia/Baku"
	]
}, {
	"name": "Russian Standard Time",
	"abbr": "RST",
	"offset": 4,
	"isdst": false,
	"text": "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
	"utc": [
	"Europe/Moscow",
	"Europe/Samara",
	"Europe/Simferopol",
	"Europe/Volgograd"
	]
}, {
	"name": "Mauritius Standard Time",
	"abbr": "MST",
	"offset": 4,
	"isdst": false,
	"text": "(UTC+04:00) Port Louis",
	"utc": [
	"Indian/Mahe",
	"Indian/Mauritius",
	"Indian/Reunion"
	]
}, {
	"name": "Georgian Standard Time",
	"abbr": "GST",
	"offset": 4,
	"isdst": false,
	"text": "(UTC+04:00) Tbilisi",
	"utc": [
	"Asia/Tbilisi"
	]
}, {
	"name": "Caucasus Standard Time",
	"abbr": "CST",
	"offset": 4,
	"isdst": false,
	"text": "(UTC+04:00) Yerevan",
	"utc": [
	"Asia/Yerevan"
	]
}, {
	"name": "Afghanistan Standard Time",
	"abbr": "AST",
	"offset": 4.5,
	"isdst": false,
	"text": "(UTC+04:30) Kabul",
	"utc": [
	"Asia/Kabul"
	]
}, {
	"name": "West Asia Standard Time",
	"abbr": "WAST",
	"offset": 5,
	"isdst": false,
	"text": "(UTC+05:00) Ashgabat, Tashkent",
	"utc": [
	"Antarctica/Mawson",
	"Asia/Aqtau",
	"Asia/Aqtobe",
	"Asia/Ashgabat",
	"Asia/Dushanbe",
	"Asia/Oral",
	"Asia/Samarkand",
	"Asia/Tashkent",
	"Etc/GMT-5",
	"Indian/Kerguelen",
	"Indian/Maldives"
	]
}, {
	"name": "Pakistan Standard Time",
	"abbr": "PST",
	"offset": 5,
	"isdst": false,
	"text": "(UTC+05:00) Islamabad, Karachi",
	"utc": [
	"Asia/Karachi"
	]
}, {
	"name": "India Standard Time",
	"abbr": "IST",
	"offset": 5.5,
	"isdst": false,
	"text": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
	"utc": [
	"Asia/Calcutta"
	]
}, {
	"name": "Sri Lanka Standard Time",
	"abbr": "SLST",
	"offset": 5.5,
	"isdst": false,
	"text": "(UTC+05:30) Sri Jayawardenepura",
	"utc": [
	"Asia/Colombo"
	]
}, {
	"name": "Nepal Standard Time",
	"abbr": "NST",
	"offset": 5.75,
	"isdst": false,
	"text": "(UTC+05:45) Kathmandu",
	"utc": [
	"Asia/Katmandu"
	]
}, {
	"name": "Central Asia Standard Time",
	"abbr": "CAST",
	"offset": 6,
	"isdst": false,
	"text": "(UTC+06:00) Astana",
	"utc": [
	"Antarctica/Vostok",
	"Asia/Almaty",
	"Asia/Bishkek",
	"Asia/Qyzylorda",
	"Asia/Urumqi",
	"Etc/GMT-6",
	"Indian/Chagos"
	]
}, {
	"name": "Bangladesh Standard Time",
	"abbr": "BST",
	"offset": 6,
	"isdst": false,
	"text": "(UTC+06:00) Dhaka",
	"utc": [
	"Asia/Dhaka",
	"Asia/Thimphu"
	]
}, {
	"name": "Ekaterinburg Standard Time",
	"abbr": "EST",
	"offset": 6,
	"isdst": false,
	"text": "(UTC+06:00) Ekaterinburg",
	"utc": [
	"Asia/Yekaterinburg"
	]
}, {
	"name": "Myanmar Standard Time",
	"abbr": "MST",
	"offset": 6.5,
	"isdst": false,
	"text": "(UTC+06:30) Yangon (Rangoon)",
	"utc": [
	"Asia/Rangoon",
	"Indian/Cocos"
	]
}, {
	"name": "SE Asia Standard Time",
	"abbr": "SAST",
	"offset": 7,
	"isdst": false,
	"text": "(UTC+07:00) Bangkok, Hanoi, Jakarta",
	"utc": [
	"Antarctica/Davis",
	"Asia/Bangkok",
	"Asia/Hovd",
	"Asia/Jakarta",
	"Asia/Phnom_Penh",
	"Asia/Pontianak",
	"Asia/Saigon",
	"Asia/Vientiane",
	"Etc/GMT-7",
	"Indian/Christmas"
	]
}, {
	"name": "N. Central Asia Standard Time",
	"abbr": "NCAST",
	"offset": 7,
	"isdst": false,
	"text": "(UTC+07:00) Novosibirsk",
	"utc": [
	"Asia/Novokuznetsk",
	"Asia/Novosibirsk",
	"Asia/Omsk"
	]
}, {
	"name": "China Standard Time",
	"abbr": "CST",
	"offset": 8,
	"isdst": false,
	"text": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
	"utc": [
	"Asia/Hong_Kong",
	"Asia/Macau",
	"Asia/Shanghai"
	]
}, {
	"name": "North Asia Standard Time",
	"abbr": "NAST",
	"offset": 8,
	"isdst": false,
	"text": "(UTC+08:00) Krasnoyarsk",
	"utc": [
	"Asia/Krasnoyarsk"
	]
}, {
	"name": "Singapore Standard Time",
	"abbr": "MPST",
	"offset": 8,
	"isdst": false,
	"text": "(UTC+08:00) Kuala Lumpur, Singapore",
	"utc": [
	"Asia/Brunei",
	"Asia/Kuala_Lumpur",
	"Asia/Kuching",
	"Asia/Makassar",
	"Asia/Manila",
	"Asia/Singapore",
	"Etc/GMT-8"
	]
}, {
	"name": "W. Australia Standard Time",
	"abbr": "WAST",
	"offset": 8,
	"isdst": false,
	"text": "(UTC+08:00) Perth",
	"utc": [
	"Antarctica/Casey",
	"Australia/Perth"
	]
}, {
	"name": "Taipei Standard Time",
	"abbr": "TST",
	"offset": 8,
	"isdst": false,
	"text": "(UTC+08:00) Taipei",
	"utc": [
	"Asia/Taipei"
	]
}, {
	"name": "Ulaanbaatar Standard Time",
	"abbr": "UST",
	"offset": 8,
	"isdst": false,
	"text": "(UTC+08:00) Ulaanbaatar",
	"utc": [
	"Asia/Choibalsan",
	"Asia/Ulaanbaatar"
	]
}, {
	"name": "North Asia East Standard Time",
	"abbr": "NAEST",
	"offset": 9,
	"isdst": false,
	"text": "(UTC+09:00) Irkutsk",
	"utc": [
	"Asia/Irkutsk"
	]
}, {
	"name": "Tokyo Standard Time",
	"abbr": "TST",
	"offset": 9,
	"isdst": false,
	"text": "(UTC+09:00) Osaka, Sapporo, Tokyo",
	"utc": [
	"Asia/Dili",
	"Asia/Jayapura",
	"Asia/Tokyo",
	"Etc/GMT-9",
	"Pacific/Palau"
	]
}, {
	"name": "Korea Standard Time",
	"abbr": "KST",
	"offset": 9,
	"isdst": false,
	"text": "(UTC+09:00) Seoul",
	"utc": [
	"Asia/Pyongyang",
	"Asia/Seoul"
	]
}, {
	"name": "Cen. Australia Standard Time",
	"abbr": "CAST",
	"offset": 9.5,
	"isdst": false,
	"text": "(UTC+09:30) Adelaide",
	"utc": [
	"Australia/Adelaide",
	"Australia/Broken_Hill"
	]
}, {
	"name": "AUS Central Standard Time",
	"abbr": "ACST",
	"offset": 9.5,
	"isdst": false,
	"text": "(UTC+09:30) Darwin",
	"utc": [
	"Australia/Darwin"
	]
}, {
	"name": "E. Australia Standard Time",
	"abbr": "EAST",
	"offset": 10,
	"isdst": false,
	"text": "(UTC+10:00) Brisbane",
	"utc": [
	"Australia/Brisbane",
	"Australia/Lindeman"
	]
}, {
	"name": "AUS Eastern Standard Time",
	"abbr": "AEST",
	"offset": 10,
	"isdst": false,
	"text": "(UTC+10:00) Canberra, Melbourne, Sydney",
	"utc": [
	"Australia/Melbourne",
	"Australia/Sydney"
	]
}, {
	"name": "West Pacific Standard Time",
	"abbr": "WPST",
	"offset": 10,
	"isdst": false,
	"text": "(UTC+10:00) Guam, Port Moresby",
	"utc": [
	"Antarctica/DumontDUrville",
	"Etc/GMT-10",
	"Pacific/Guam",
	"Pacific/Port_Moresby",
	"Pacific/Saipan",
	"Pacific/Truk"
	]
}, {
	"name": "Tasmania Standard Time",
	"abbr": "TST",
	"offset": 10,
	"isdst": false,
	"text": "(UTC+10:00) Hobart",
	"utc": [
	"Australia/Currie",
	"Australia/Hobart"
	]
}, {
	"name": "Yakutsk Standard Time",
	"abbr": "YST",
	"offset": 10,
	"isdst": false,
	"text": "(UTC+10:00) Yakutsk",
	"utc": [
	"Asia/Chita",
	"Asia/Khandyga",
	"Asia/Yakutsk"
	]
}, {
	"name": "Central Pacific Standard Time",
	"abbr": "CPST",
	"offset": 11,
	"isdst": false,
	"text": "(UTC+11:00) Solomon Is., New Caledonia",
	"utc": [
	"Antarctica/Macquarie",
	"Etc/GMT-11",
	"Pacific/Efate",
	"Pacific/Guadalcanal",
	"Pacific/Kosrae",
	"Pacific/Noumea",
	"Pacific/Ponape"
	]
}, {
	"name": "Vladivostok Standard Time",
	"abbr": "VST",
	"offset": 11,
	"isdst": false,
	"text": "(UTC+11:00) Vladivostok",
	"utc": [
	"Asia/Sakhalin",
	"Asia/Ust-Nera",
	"Asia/Vladivostok"
	]
}, {
	"name": "New Zealand Standard Time",
	"abbr": "NZST",
	"offset": 12,
	"isdst": false,
	"text": "(UTC+12:00) Auckland, Wellington",
	"utc": [
	"Antarctica/McMurdo",
	"Pacific/Auckland"
	]
}, {
	"name": "UTC+12",
	"abbr": "U",
	"offset": 12,
	"isdst": false,
	"text": "(UTC+12:00) Coordinated Universal Time+12",
	"utc": [
	"Etc/GMT-12",
	"Pacific/Funafuti",
	"Pacific/Kwajalein",
	"Pacific/Majuro",
	"Pacific/Nauru",
	"Pacific/Tarawa",
	"Pacific/Wake",
	"Pacific/Wallis"
	]
}, {
	"name": "Fiji Standard Time",
	"abbr": "FST",
	"offset": 12,
	"isdst": false,
	"text": "(UTC+12:00) Fiji",
	"utc": [
	"Pacific/Fiji"
	]
}, {
	"name": "Magadan Standard Time",
	"abbr": "MST",
	"offset": 12,
	"isdst": false,
	"text": "(UTC+12:00) Magadan",
	"utc": [
	"Asia/Anadyr",
	"Asia/Kamchatka",
	"Asia/Magadan",
	"Asia/Srednekolymsk"
	]
}, {
	"name": "Kamchatka Standard Time",
	"abbr": "KDT",
	"offset": 13,
	"isdst": true,
	"text": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
}, {
	"name": "Tonga Standard Time",
	"abbr": "TST",
	"offset": 13,
	"isdst": false,
	"text": "(UTC+13:00) Nuku'alofa",
	"utc": [
	"Etc/GMT-13",
	"Pacific/Enderbury",
	"Pacific/Fakaofo",
	"Pacific/Tongatapu"
	]
}, {
	"name": "Samoa Standard Time",
	"abbr": "SST",
	"offset": 13,
	"isdst": false,
	"text": "(UTC+13:00) Samoa",
	"utc": [
	"Pacific/Apia"
	]
}];