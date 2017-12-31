using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using mcNuggetNumbers;

namespace McNuggetNumberFinderTest {
    [TestClass]
    public class McNuggetNumberFinderTest {

        McNuggetNumberFinder finder;

        [TestInitialize]
        public void Setup() {

            finder = new McNuggetNumberFinder();
        }

        [TestMethod]
        public void McNuggetNumbersAreInRange() {

            int limit = 100;
            int[] numbers = finder.FindMcNuggetNumbers(limit);

            Assert.IsNotNull(numbers);
            Assert.IsTrue(numbers.All(number => number <= limit));
        }

        [TestMethod]
        public void NonMcNuggetNumbersAreInRange() {

            int limit = 100;
            int[] numbers = finder.FindNonMcNuggetNumbers(limit);

            Assert.IsNotNull(numbers);
            Assert.IsTrue(numbers.All(number => number <= limit));
        }
    }
}