using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using binaryConverterClassLibrary;

namespace binaryConverterTest {
    [TestClass]
    public class BinaryConverterTest {

        BinaryConverter converter;

        [TestInitialize]
        public void Setup() {

            converter = new BinaryConverter();
        }

        [TestMethod]
        public void PositiveNumberToBinary() {

            Assert.AreEqual("10011100", converter.ToBinary(156));
        }

        [TestMethod]
        public void NegativeNumberToBinary() {

            Assert.AreEqual("-10011100", converter.ToBinary(-156));
        }
    }
}