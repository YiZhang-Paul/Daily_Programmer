using System;
using System.Numerics;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrimalityTesterClassLibrary;
using Moq;

namespace PrimalityTesterTest {
    [TestClass]
    public class FermatPrimalityTesterTest {

        Mock<IPrimalityTester> basicTester;
        FermatPrimalityTester fermatTester;

        [TestInitialize]
        public void Setup() {

            basicTester = new Mock<IPrimalityTester>();
            fermatTester = new FermatPrimalityTester(basicTester.Object);
        }

        [TestMethod]
        public void IsNotPrime() {

            basicTester.Setup(mock => mock.IsPrime(It.IsAny<int>()))
                       .Returns(false);

            Assert.IsFalse(fermatTester.IsPrime(4, 0.75));
            Assert.IsFalse(fermatTester.IsPrime(4, 0.99));
            Assert.IsFalse(fermatTester.IsPrime(15, 0.75));
            Assert.IsFalse(fermatTester.IsPrime(15, 0.99));
            Assert.IsFalse(fermatTester.IsPrime(99, 0.75));
            Assert.IsFalse(fermatTester.IsPrime(99, 0.99));
            var bigInteger = BigInteger.Parse("95647806479275528135733781266203904794419584591201");
            Assert.IsFalse(fermatTester.IsPrime(bigInteger, 0.75));
            Assert.IsFalse(fermatTester.IsPrime(bigInteger, 0.99));
        }

        [TestMethod]
        public void IsPrime() {

            basicTester.Setup(mock => mock.IsPrime(It.IsAny<int>()))
                       .Returns(true);

            Assert.IsTrue(fermatTester.IsPrime(2, 0.75));
            Assert.IsTrue(fermatTester.IsPrime(2, 0.99));
            Assert.IsTrue(fermatTester.IsPrime(3, 0.75));
            Assert.IsTrue(fermatTester.IsPrime(3, 0.99));
            Assert.IsTrue(fermatTester.IsPrime(5, 0.75));
            Assert.IsTrue(fermatTester.IsPrime(5, 0.99));
            var bigInteger = BigInteger.Parse("95647806479275528135733781266203904794419563064407");
            Assert.IsTrue(fermatTester.IsPrime(bigInteger, 0.75));
            Assert.IsTrue(fermatTester.IsPrime(bigInteger, 0.99));
        }
    }
}