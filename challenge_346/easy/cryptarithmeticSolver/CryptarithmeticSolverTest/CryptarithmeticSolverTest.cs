using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CryptarithmeticSolverClassLibrary;
using Moq;

namespace CryptarithmeticSolverTest {
    [TestClass]
    public class CryptarithmeticSolverTest {

        Mock<IUtility> utility;
        CryptarithmeticSolver solver;

        [TestInitialize]
        public void Setup() {

            utility = new Mock<IUtility>();
            solver = new CryptarithmeticSolver(utility.Object);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException), 
         "Number of Letters Does not Match Number of Digits.")]
        public void SolveWithUnmatchingLetterDigitPair() {

            string[] words = { "this", "is", "his", "claim" };
            //total of 6 letters
            char[] letters = { 'a', 'c', 'h', 'i', 'l', 'm' };
            //total of 5 letters only
            int[] digits = { 7, 1, 8, 5, 0 };

            solver.IsValidCryptarithm(words, letters, digits);
        }

        [TestMethod]
        public void SolveWithLeadingZeros() {

            string[] words = { "this", "is", "his", "claim" };
            char[] letters = { 'a', 'c', 'h', 'i', 'l', 'm', 's', 't' };
            //leading zero exists since 't' is initial letter and equals 0
            int[] digits = { 7, 1, 8, 5, 9, 6, 2, 0 };

            Assert.IsFalse(solver.IsValidCryptarithm(words, letters, digits));
        }

        [TestMethod]
        public void SolveWithTrailingDigitsNotHoldingEqual() {

            string[] words = { "this", "is", "his", "claim" };
            char[] letters = { 'a', 'c', 'h', 'i', 'l', 'm', 's', 't' };
            /**
             * trailing letter for first three words is 's', which equals 2;
             * trailing letter for last word is 'm', which equals 4;
             * therefore, (2 + 2 + 2) % 10 = 6, which does not equal 4.
             */
            int[] digits = { 7, 1, 8, 5, 0, 4, 2, 9 };

            Assert.IsFalse(solver.IsValidCryptarithm(words, letters, digits));
        }

        //[TestMethod]
        public void TestMethod1() {

            string[] words = { "this", "is", "his", "claim"};
            char[] letters = { 'a', 'c', 'h', 'i', 'l', 'm', 's', 't' };
            int[] digits = { 7, 1, 8, 5, 0, 6, 2, 9 };

            Assert.IsTrue(solver.IsValidCryptarithm(words, letters, digits));
        }
    }
}