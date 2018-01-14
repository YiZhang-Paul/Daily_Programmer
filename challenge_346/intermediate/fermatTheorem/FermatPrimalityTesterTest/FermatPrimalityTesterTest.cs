using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FermatPrimalityTesterClassLibrary;
using System.Numerics;

namespace FermatPrimalityTesterTest {
    [TestClass]
    public class FermatPrimalityTesterTest {

        FermatPrimalityTester tester;

        [TestInitialize]
        public void Setup() {

            tester = new FermatPrimalityTester();
        }

        [TestMethod]
        public void IsNotPrime() {

            Assert.IsFalse(tester.IsPrime(4, 0.9));
            Assert.IsFalse(tester.IsPrime(4, 0.75));
            Assert.IsFalse(tester.IsPrime(15, 0.9));
            Assert.IsFalse(tester.IsPrime(15, 0.75));
            Assert.IsFalse(tester.IsPrime(99, 0.9));
            Assert.IsFalse(tester.IsPrime(99, 0.75));
        }

        [TestMethod]
        public void IsPrime() {

            Assert.IsTrue(tester.IsPrime(2, 0.9));
            Assert.IsTrue(tester.IsPrime(2, 0.75));
            Assert.IsTrue(tester.IsPrime(3, 0.9));
            Assert.IsTrue(tester.IsPrime(3, 0.75));
            Assert.IsTrue(tester.IsPrime(5, 0.9));
            Assert.IsTrue(tester.IsPrime(5, 0.75));
            var bigNumber = BigInteger.Parse("29497513910652490397");
            Assert.IsTrue(tester.IsPrime(bigNumber, 0.9));
            Assert.IsTrue(tester.IsPrime(bigNumber, 0.75));
        }
    }
}