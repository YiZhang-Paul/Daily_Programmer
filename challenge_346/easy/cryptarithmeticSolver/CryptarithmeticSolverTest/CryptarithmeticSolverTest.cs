using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
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
        public void SolveWithLeadingZeros() {

            utility.Setup(mock => mock.GetWords(It.IsAny<string>()))
                   .Returns(new string[] { "this", "is", "his", "claim" });
            utility.Setup(mock => mock.GetLetters(It.IsAny<string>()))
                   .Returns(new char[] { 'a', 'c', 'h', 'i', 'l', 'm', 's', 't' });
            utility.Setup(mock => mock.GetCombinations(
                            It.IsAny<int[]>(),
                            It.IsAny<int>(),
                            It.IsAny<int[]>(),
                            It.IsAny<List<int[]>>()))
                   .Returns(new int[][] { new int[] { 7, 1, 8, 5, 9, 6, 2, 0 } });

            Assert.IsNull(solver.FindCryptarithm("THIS + IS + HIS == CLAIM"));
        }

        [TestMethod]
        public void SolveWithTrailingDigitsNotHoldingEqual() {

            utility.Setup(mock => mock.GetWords(It.IsAny<string>()))
                   .Returns(new string[] { "this", "is", "his", "claim" });
            /**
             * trailing letter for first three words is 's', which equals 2;
             * trailing letter for last word is 'm', which equals 4;
             * therefore, (2 + 2 + 2) % 10 = 6, which does not equal 4.
             */
            utility.Setup(mock => mock.GetLetters(It.IsAny<string>()))
                   .Returns(new char[] { 'a', 'c', 'h', 'i', 'l', 'm', 's', 't' });
            utility.Setup(mock => mock.GetCombinations(
                            It.IsAny<int[]>(),
                            It.IsAny<int>(),
                            It.IsAny<int[]>(),
                            It.IsAny<List<int[]>>()))
                   .Returns(new int[][] { new int[] { 7, 1, 8, 5, 0, 4, 2, 9 } });

            Assert.IsNull(solver.FindCryptarithm("THIS + IS + HIS == CLAIM"));
        }

        [TestMethod]
        public void FindCryptarithm() {

            utility.Setup(mock => mock.GetWords(It.IsAny<string>()))
                   .Returns(new string[] { "this", "is", "his", "claim" });
            utility.Setup(mock => mock.GetLetters(It.IsAny<string>()))
                   .Returns(new char[] { 'a', 'c', 'h', 'i', 'l', 'm', 's', 't' });
            utility.Setup(mock => mock.GetCombinations(
                            It.IsAny<int[]>(), 
                            It.IsAny<int>(), 
                            It.IsAny<int[]>(), 
                            It.IsAny<List<int[]>>()))
                   .Returns(new int[][] { new int[] { 7, 1, 8, 5, 0, 6, 2, 9 } });

            var result = solver.FindCryptarithm("THIS + IS + HIS == CLAIM");

            Assert.AreEqual(8, result.Count);
            Assert.AreEqual(7, result['a']);
            Assert.AreEqual(1, result['c']);
            Assert.AreEqual(8, result['h']);
            Assert.AreEqual(5, result['i']);
            Assert.AreEqual(0, result['l']);
            Assert.AreEqual(6, result['m']);
            Assert.AreEqual(2, result['s']);
            Assert.AreEqual(9, result['t']);
        }
    }
}