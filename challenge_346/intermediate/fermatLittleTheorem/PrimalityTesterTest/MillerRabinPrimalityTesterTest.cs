using System;
using System.Numerics;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrimalityTesterClassLibrary;
using Moq;

namespace PrimalityTesterTest {
    [TestClass]
    public class MillerRabinPrimalityTesterTest {

        Mock<IPrimalityTester> basicTester;
        MillerRabinPrimalityTester millerRabinTester;

        [TestInitialize]
        public void Setup() {

            basicTester = new Mock<IPrimalityTester>();
            millerRabinTester = new MillerRabinPrimalityTester(basicTester.Object, "testBase.txt");
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException), 
         "File Does not Exist.")]
        public void TestBaseFileNotExist() {

            millerRabinTester = new MillerRabinPrimalityTester(basicTester.Object, "notexist");
        }

        [TestMethod]
        public void IsNotPrime() {

            basicTester.Setup(mock => mock.IsPrime(It.IsAny<int>()))
                       .Returns(false);

            Assert.IsFalse(millerRabinTester.IsPrime(1));
            Assert.IsFalse(millerRabinTester.IsPrime(4));
            Assert.IsFalse(millerRabinTester.IsPrime(15));
            Assert.IsFalse(millerRabinTester.IsPrime(99));
            Assert.IsFalse(millerRabinTester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419584591201")));
        }

        [TestMethod]
        public void IsPrime() {

            basicTester.Setup(mock => mock.IsPrime(It.IsAny<int>()))
                       .Returns(true);

            Assert.IsTrue(millerRabinTester.IsPrime(2));
            Assert.IsTrue(millerRabinTester.IsPrime(3));
            Assert.IsTrue(millerRabinTester.IsPrime(5));
            Assert.IsTrue(millerRabinTester.IsPrime(7));
            Assert.IsTrue(millerRabinTester.IsPrime(BigInteger.Parse("95647806479275528135733781266203904794419563064407")));
        }
    }
}