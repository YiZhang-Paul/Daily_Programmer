/* jslint esversion: 6 */
(() => {
	document.addEventListener("DOMContentLoaded", () => {
		/**
		 * decode character
		 * @param {char} [char] - character to be decoded
		 *
		 * @return {char} [decoded character]
		 */
		function decodeChar(char) {
			return String.fromCharCode(char.charCodeAt() - 4);
		}
		/**
		 * decode message
		 * @param {String} [message] - message to be decoded
		 *
		 * @return {String} [decoded message]
		 */
		function decode(message) {
			return message.split("\n")
			              .map(line => line.trim().split("").map(char => decodeChar(char)).join(""))
			              .join("\n");
		}
		//challenge input
		console.log(`%cChallenge Input: `, "color : red;");
		let input = `Etvmp$Jsspw%%%%
                 [e}$xs$ks%$]sy$lezi$wspzih$xli$lmhhir$qiwweki2$Rs{$mx$mw$}syv$xyvr$xs$nsmr
                 mr$sr$xlmw$tvero2$Hs$rsx$tswx$er}xlmrk$xlex$\{mpp$kmzi$e{e}$xlmw$qiwweki2$Pix
                 tistpi$higshi$xli$qiwweki$sr$xlimv$s{r$erh$vieh$xlmw$qiwweki2$]sy$ger$tpe}$epsrk
                 f}$RSX$tswxmrk$ls{$}sy$higshih$xlmw$qiwweki2$Mrwxieh$tswx$}syv$wspyxmsr$xs$fi$}syv
                 jezsvmxi$Lipps$\{svph$tvskveq$mr$sri$perkyeki$sj$}syv$glsmgi2$
                 Qeoi$wyvi$}syv$tvskveq$we}w$&Lipps$[svph%%%&$\{mxl$7$%$ex$xli$irh2$Xlmw$\{e}
                 tistpi$fvs{wmrk$xli$gleppirki$\{mpp$xlmro$\{i$lezi$epp$pswx$syv$qmrhw2$Xlswi$\{ls$tswx$lipps
                 {svph$wspyxmsrw$\{mxlsyx$xli$xlvii$%%%$\{mpp$lezi$rsx$higshih$xli$qiwweki$erh$ws$}sy$ger$
                 tspmxip}$tsmrx$syx$xlimv$wspyxmsr$mw$mr$ivvsv$,xli}$evi$nywx$jspps{mrk$epsrk$\{mxlsyx$ors{mrk-
                 Irns}$xlmw$jyr2$Xli$xvyxl$\{mpp$fi$liph$f}$xlswi$\{ls$ger$higshi$xli$qiwweki2$>-`;
		console.log(`${input.split("\n").map(line => line.trim()).join("\n")}`);
		console.log(`%cDecodes Into: `, "color : green;");
		console.log(`%c${decode(input)}`, "color : orange;");
	});
})();		