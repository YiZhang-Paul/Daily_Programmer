/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * generate other base for the pair
		 * @param {char} [base] - current base
		 *
		 * @return {char} [other base]
		 */
		function getOtherBase(base) {
			const curBase = base.toUpperCase();
			return new Set("AT").has(curBase) ? 
				(curBase == "A" ? "T" : "A") : (curBase == "C" ? "G" : "C");
		}
		/**
		 * generate DNA strands
		 * @param {String} [strand] - current strand
		 *
		 * @return {Array} [strand pair]
		 */
		function getStrands(strand) {
			return [strand, strand.replace(/\w/g, getOtherBase)];
		}
		/**
		 * construct codon table
		 *
		 * @return {Object} [codon table]
		 */
		function getCodonTable() {
			const codons = {
				Ala : ["GCT", "GCC", "GCA", "GCG"], Arg : ["CGT", "CGC", "CGA", "CGG", "AGA", "AGG"], Asn : ["AAT", "AAC"], Asp : ["GAT", "GAC"], 
				Cys : ["TGT", "TGC"], Gln : ["CAA", "CAG"], Glu : ["GAA", "GAG"], Gly : ["GGT", "GGC", "GGA", "GGG"], His : ["CAT", "CAC"], 
				Ile : ["ATT", "ATC", "ATA"], START : ["ATG"], Leu	: ["TTA", "TTG", "CTT", "CTC", "CTA", "CTG"], Lys	: ["AAA", "AAG"], Met	: ["ATG"], 
				Phe : ["TTT", "TTC"], Pro : ["CCT", "CCC", "CCA", "CCG"], Ser	: ["TCT", "TCC", "TCA", "TCG", "AGT", "AGC"], Thr	: ["ACT", "ACC", "ACA", "ACG"], 
				Trp	: ["TGG"], Tyr : ["TAT", "TAC"], Val : ["GTT", "GTC", "GTA", "GTG"], STOP : ["TAA", "TGA", "TAG"]  
			};
			let table = new Map();
			for(let key in codons) {
				for(let i = 0; i < codons[key].length; i++) {
					table.set(codons[key][i], key);
				}
			}
			return table;
		}
		/**
		 * translate DNA
		 * @param {String} [strand] - DNA strand to be translated
		 *
		 * @return {String} [translated DNA strand] 
		 */
		function translateDNA(strand) {
			const codonTable = getCodonTable();
			let translate = "";
			for(let i = 0; i < strand.length; i += 6) {
				translate += codonTable.get(strand.slice(i, i + 6).split(" ").join("")) + " ".repeat(3);
			}
			return translate;
		}
		//default input
		console.log(`%cDefault Input: `, "color : red;");
		let input = "A T A A G C ";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${getStrands(input).join("\n")}`, "color : orange;");
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		input = "A A T G C C T A T G G C";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${getStrands(input).join("\n")}`, "color : orange;");
		//bonus input
		console.log(`%cBonus Input: `, "color : red;");
		input = "A T G T T T C G A G G C T A A";
		console.log(`%c${input} ->`, "color : skyblue;");
		console.log(`%c${translateDNA(input)}`, "color : orange;");
	});
})();		