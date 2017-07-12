/* jslint esversion: 6 */
(() => {
  document.addEventListener("DOMContentLoaded", () => {
  	let elementTable = `Actinium 	Ac 	89 	(227) 	1.1
												Aluminum 	Al 	13 	26.9815 	1.5
												Americium 	Am 	95 	(243) 	1.3
												Antimony 	Sb 	51 	121.75 	1.9
												Argon 	Ar 	18 	39.948 	
												Arsenic 	As 	33 	74.9216 	2.0
												Astatine 	At 	85 	(210) 	2.2
												Barium 	Ba 	56 	137 	0.9
												Berkelium 	Bk 	97 	(247) 	1.3
												Beryllium 	Be 	4 	9.0122 	1.5
												Bismuth 	Bi 	83 	208.980 	1.9
												Boron 	B 	5 	10.81 	2.0
												Bromine 	Br 	35 	79.904 	2.8
												Cadmium 	Cd 	48 	112.40 	1.7
												Calcium 	Ca 	20 	40.08 	1.0
												Californium 	Cf 	98 	(251) 	1.3
												Carbon 	C 	6 	12.011 	2.5
												Cerium 	Ce 	58 	140.12 	1.1
												Cesium 	Cs 	55 	132.9054 	0.7
												Chlorine 	Cl 	17 	35.453 	3.0
												Chromium 	Cr 	24 	51.996 	1.6
												Cobalt 	Co 	27 	58.9332 	1.8
												Copper 	Cu 	29 	63.546 	1.9
												Curium 	Cm 	96 	(247) 	1.3
												Dysprosium 	Dy 	66 	162.50 	1.1
												Einsteinium 	Es 	99 	(254) 	1.3
												Erbium 	Er 	68 	167.26 	1.1
												Europium 	Eu 	63 	151.96 	1.1
												Fermium 	Fm 	100 	(257) 	1.3
												Fluorine 	F 	9 	18.9984 	4.0
												Francium 	Fr 	87 	(223) 	0.7
												Gadolinium 	Gd 	64 	157.25 	1.1
												Gallium 	Ga 	31 	69.72 	1.6
												Germanium 	Ge 	32 	72.59 	1.8
												Gold 	Au 	79 	196.966 	2.4
												Hafnium 	Hf 	72 	178.49 	1.3
												Helium 	He 	2 	4.00260 	
												Holmium 	Ho 	67 	164.930 	1.1
												Hydrogen 	H 	1 	1.0079 	2.1
												Indium 	In 	49 	114.82 	1.7
												Iodine 	I 	53 	126.904 	2.5
												Iridium 	Ir 	77 	192.22 	2.2
												Iron 	Fe 	26 	55.847 	1.8
												Krypton 	Kr 	36 	83.80 	
												Lanthanum 	La 	57 	138.905 	1.1
												Lawrencium 	Lr 	103 	(256) 	
												Lead 	Pb 	82 	207.2 	1.8
												Lithium 	Li 	3 	6.941 	1.0
												Lutetium 	Lu 	71 	174.97 	1.2
												Magnesium 	Mg 	12 	24.305 	1.2
												Manganese 	Mn 	25 	54.9380 	1.5
												Mendelevium 	Md 	101 	(258) 	1.3
												Mercury 	Hg 	80 	200.59 	1.9
												Molybdenum 	Mo 	42 	95.94 	1.8
												Neodymium 	Nd 	60 	144.24 	1.1
												Neon 	Ne 	10 	20.179 	
												Neptunium 	Np 	93 	237.048 	1.3
												Nickel 	Ni 	28 	58.70 	1.8
												Niobium 	Nb 	41 	92.9064 	1.6
												Nitrogen 	N 	7 	14.0067 	3.0
												Nobelium 	No 	102 	(255) 	1.3
												Osmium 	Os 	76 	190.2 	2.2
												Oxygen 	O 	8 	15.9994 	3.5
												Palladium 	Pd 	46 	106.4 	2.2
												Phosphorus 	P 	15 	30.9738 	2.1
												Platinum 	Pt 	78 	195.09 	2.2
												Plutonium 	Pu 	94 	(244) 	1.3
												Polonium 	Po 	84 	(210) 	2.0
												Potassium 	K 	19 	39.098 	0.8
												Praseodymium 	Pr 	59 	140.908 	1.1
												Promethium 	Pm 	61 	(147) 	1.1
												Protactinium 	Pa 	91 	231.036 	1.4
												Radium 	Ra 	88 	226.025 	0.9
												Radon 	Rn 	86 	(222) 	
												Rhenium 	Re 	75 	186.207 	1.9
												Rhodium 	Rh 	45 	102.906 	2.2
												Rubidium 	Rb 	37 	85.4678 	0.8
												Ruthenium 	Ru 	44 	101.07 	2.2
												Rutherfordium 	Rf 	104 	(261) 	
												Samarium 	Sm 	62 	150.4 	1.1
												Scandium 	Sc 	21 	44.9559 	1.3
												Selenium 	Se 	34 	78.96 	2.4
												Silicon 	Si 	14 	28.086 	1.8
												Silver 	Ag 	47 	107.868 	1.9
												Sodium 	Na 	11 	22.9898 	0.9
												Strontium 	Sr 	38 	87.62 	1.0
												Sulfur 	S 	16 	32.06 	2.5
												Tantalum 	Ta 	73 	180.948 	1.5
												Technetium 	Tc 	43 	98.9062 	1.9
												Tellurium 	Te 	52 	127.60 	2.1
												Terbium 	Tb 	65 	158.925 	1.1
												Thallium 	Tl 	81 	204.37 	1.8
												Thorium 	Th 	90 	232.038 	1.2
												Thulium 	Tm 	69 	168.934 	1.1
												Tin 	Sn 	50 	118.69 	1.8
												Titanium 	Ti 	22 	47.90 	1.5
												Tungsten 	W 	74 	183.85 	1.7
												Uranium 	U 	92 	238.029 	1.5
												Vanadium 	V 	23 	50.9414 	1.6
												Xenon 	Xe 	54 	131.30 	
												Ytterbium 	Yb 	70 	173.04 	1.1
												Yttrium 	Y 	39 	88.9059 	1.2
												Zinc 	Zn 	30 	65.38 	1.6
												Zirconium 	Zr 	40 	91.22 	1.4`;
		/**
		 * element class
		 * @param String, String, float, float
		 *
		 * name   : element name
		 * symbol : element symbol
		 * number : atomic number
		 * weight : atomic weight
		 */		
		class Element {
			constructor(name, symbol, number, weight) {
				this.name = name.toLowerCase();
				this.symbol = symbol;
				this.number = number;
				this.weight = weight;
			}
		} 									
		/**
		 * construct element table
		 * @param String
		 *
		 * info : element table in string format
		 *
		 * returns obj {}
		 */
		function constructTable(info) {
			let table = new Map();
			info.split("\n")
			    .map(row => row.split(" ").map(item => item.trim()))
			    .forEach(row => {
			    	row[3] = Number(row[3].match(/\d+\.*\d*/g)[0]);
			    	table.set(row[1].toLowerCase(), new Element(...row.slice(0, -1)));
			    });
			return table;
		} 
		/**
		 * determine all possible ways to slice a word
		 * @param int, int, String
		 *
		 * length    : length of word
		 * curLength : current length of slices
		 * curSlices : current slice patterns
		 *
		 * returns array []
		 */
		function allSlices(length, curLength = 0, curSlices = "") {
			if(curLength >= length) {
				return length == curLength ? curSlices : null;
			}
			let slices = [];
			for(let i = 1; i <= 2; i++) {
				let result = allSlices(length, curLength + i, curSlices + i);
				if(Array.isArray(result)) {
					slices.push(...result);
				} else if(result) {
					slices.push(result);
				}
			}
			return slices;
		} 
		/**
		 * slice a word in all possible ways
		 * @param String
		 *
		 * word : word to be sliced
		 *
		 * returns array []
		 */ 
		function sliceWord(word) {
			return allSlices(word.length).map(slice => {
				let curIndex = 0;
				return slice.split("").map(length => {
					let segment = word.slice(curIndex, curIndex + Number(length));
					curIndex += Number(length);
					return segment;
				});
			});
		} 
		/**
		 * check if given word slices all 
		 * represent chemistry elements
		 * @param array [], obj {}
		 *
		 * slices : word slices 
		 * table  : element table
		 * 
		 * returns boolean
		 */
		function isElements(slices, table) {
			return slices.every(slice => table.has(slice));
		}
		/**
		 * find all valid spellings of word with
		 * chemistry elements and output elements matched
		 * @param String, obj {}
		 *
		 * word  : word to be sliced
		 * table : element table
		 *
		 * returns array []
		 */
		function spellWithChemistry(word, table) {
			let matches = [];
			sliceWord(word).filter(slice => isElements(slice, table))
			               .forEach(result => {
			               	 let wordMatch = result.map(segment => table.get(segment).symbol);
			               	 let elementMatch = result.map(segment => table.get(segment).name);
			               	 matches.push(`${wordMatch.join("")} (${elementMatch.join(", ")})`);
			               }); 
			return matches;
		} 
		/**
		 * find total atomic weight
		 * @param String, obj {}
		 *
		 * spelling : words spelling using chemistry elements
		 * table    : element table
		 *
		 * returns float  
		 */
		function totalWeight(spelling, table) {
			return spelling.match(/[A-Z][a-z]*/g)
			               .map(segment => segment.toLowerCase())
			               .reduce((acc, val) => acc + table.get(val).weight, 0);
		}
		/**
		 * find heaviest atomic weight 
		 * from all word slices
		 * @param array [], obj {}
		 *
		 * slices : all word slices 
		 * table  : element table
		 *
		 * returns obj {}
		 */
		function findHeaviest(slices, table) {
			return slices.reduce((acc, val) => {
				let segment = val.split("(")[0].trim();
				let curWeight = totalWeight(segment, table);
				return curWeight > (acc.weight || 0) ? {weight : curWeight, seg : segment} : acc;
			}, {});
		} 
		//element table
		let elements = constructTable(elementTable);
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		console.log(`%cgenius`, "color : yellow;");
		let spellings = spellWithChemistry("genius", elements);
		spellings.forEach(result => {
			console.log(result);
		});
		let heaviest = findHeaviest(spellings, elements);
		console.log(`Heaviest Atomic Weight: %c${heaviest.weight} (${heaviest.seg})`, "color : red;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		console.log(`%cfunctions`, "color : yellow;");
		spellings = spellWithChemistry("functions", elements);
		spellings.forEach(result => {
			console.log(result);
		});
		heaviest = findHeaviest(spellings, elements);
		console.log(`Heaviest Atomic Weight: %c${heaviest.weight} (${heaviest.seg})`, "color : red;");
		console.log(`%cbacon`, "color : yellow;");
		spellings = spellWithChemistry("bacon", elements);
		spellings.forEach(result => {
			console.log(result);
		});
		heaviest = findHeaviest(spellings, elements);
		console.log(`Heaviest Atomic Weight: %c${heaviest.weight} (${heaviest.seg})`, "color : red;");
		console.log(`%cpoison`, "color : yellow;");
		spellings = spellWithChemistry("poison", elements);
		spellings.forEach(result => {
			console.log(result);
		});
		heaviest = findHeaviest(spellings, elements);
		console.log(`Heaviest Atomic Weight: %c${heaviest.weight} (${heaviest.seg})`, "color : red;");
		console.log(`%csickness`, "color : yellow;");
		spellings = spellWithChemistry("sickness", elements);
		spellings.forEach(result => {
			console.log(result);
		});
		heaviest = findHeaviest(spellings, elements);
		console.log(`Heaviest Atomic Weight: %c${heaviest.weight} (${heaviest.seg})`, "color : red;");
		console.log(`%cticklish`, "color : yellow;");
		spellings = spellWithChemistry("ticklish", elements);
		spellings.forEach(result => {
			console.log(result);
		});
		heaviest = findHeaviest(spellings, elements);
		console.log(`Heaviest Atomic Weight: %c${heaviest.weight} (${heaviest.seg})`, "color : red;");
  });
})();  	