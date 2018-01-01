using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;

namespace ageCheckerTests {
    [TestClass]
    public class YearCheckerTest {

        YearChecker yearChecker;

        [TestInitialize]
        public void Setup() {

            yearChecker = new YearChecker();
        }

        [TestMethod]
        public void IsLeapYear() {

            bool result = yearChecker.IsLeapYear(2016);

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void IsNotLeapYear() {

            bool result = yearChecker.IsLeapYear(1900);

            Assert.IsFalse(result);
        }
    }
}