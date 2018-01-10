using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using CryptarithmeticSolverClassLibrary;

namespace CryptarithmeticSolverTest {
    [TestClass]
    public class UtilityTest {

        Utility utility;

        [TestInitialize]
        public void Setup() {

            utility = new Utility();
        }

        [TestMethod]
        public void GetWordsFromEmptyString() {

            Assert.AreEqual(0, utility.GetWords(string.Empty).Length);
            Assert.AreEqual(0, utility.GetWords("".PadLeft(10, " "[0])).Length);
        }

        [TestMethod]
        public void GetWordsFromNonEmptyString() {

            string[] words = utility.GetWords("THIS + IS + HIS == CLAIM");

            Assert.AreEqual(4, words.Length);
            Assert.IsTrue(words.Contains("this"));
            Assert.IsTrue(words.Contains("is"));
            Assert.IsTrue(words.Contains("his"));
            Assert.IsTrue(words.Contains("claim"));
        }

        [TestMethod]
        public void GetLettersFromEmptyString() {

            Assert.AreEqual(0, utility.GetLetters(string.Empty).Length);
            Assert.AreEqual(0, utility.GetLetters("".PadLeft(10, " "[0])).Length);
        }

        [TestMethod]
        public void GetLettersFromStringWithSameCasing() {

            char[] letters = utility.GetLetters("out of ruff");

            Assert.AreEqual(5, letters.Length);
            Assert.IsTrue(letters.Contains('o'));
            Assert.IsTrue(letters.Contains('u'));
            Assert.IsTrue(letters.Contains('t'));
            Assert.IsTrue(letters.Contains('r'));
            Assert.IsTrue(letters.Contains('f'));
        }

        [TestMethod]
        public void GetLettersFromStringWithDifferentCasing() {

            char[] letters = utility.GetLetters("oUt Of ruFf");

            Assert.AreEqual(5, letters.Length);
            Assert.IsTrue(letters.Contains('o'));
            Assert.IsTrue(letters.Contains('u'));
            Assert.IsTrue(letters.Contains('t'));
            Assert.IsTrue(letters.Contains('r'));
            Assert.IsTrue(letters.Contains('f'));
        }

        [TestMethod]
        public void GetCombinations() {

            int[] options = { 0, 1, 2 };
            var combinations = utility.GetCombinations(options, 2)
                                      .Select(combination => string.Join("", combination))
                                      .ToArray();

            Assert.AreEqual(6, combinations.Length);
            Assert.IsTrue(combinations.Contains("01"));
            Assert.IsTrue(combinations.Contains("02"));
            Assert.IsTrue(combinations.Contains("10"));
            Assert.IsTrue(combinations.Contains("12"));
            Assert.IsTrue(combinations.Contains("20"));
            Assert.IsTrue(combinations.Contains("21"));
        }
    }
}