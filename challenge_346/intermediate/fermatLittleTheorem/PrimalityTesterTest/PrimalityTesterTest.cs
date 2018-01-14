using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrimalityTesterClassLibrary;

namespace PrimalityTesterTest {
    [TestClass]
    public class PrimalityTesterTest {

        PrimalityTester tester;

        [TestInitialize]
        public void Setup() {

            tester = new PrimalityTester();
        }

        [TestMethod]
        public void IsNotPrime() {

            Assert.IsFalse(tester.IsPrime(1));
            Assert.IsFalse(tester.IsPrime(4));
            Assert.IsFalse(tester.IsPrime(15));
            Assert.IsFalse(tester.IsPrime(99));
            Assert.IsFalse(tester.IsPrime(150));
            Assert.IsFalse(tester.IsPrime(212));
        }

        [TestMethod]
        public void IsPrime() {

            Assert.IsTrue(tester.IsPrime(2));
            Assert.IsTrue(tester.IsPrime(3));
            Assert.IsTrue(tester.IsPrime(5));
            Assert.IsTrue(tester.IsPrime(7));
            Assert.IsTrue(tester.IsPrime(97));
            Assert.IsTrue(tester.IsPrime(113));
        }
    }
}