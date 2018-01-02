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

            Assert.IsTrue(yearChecker.IsLeapYear(2016));
        }

        [TestMethod]
        public void IsNotLeapYearWhenNotDivisibleByFour() {

            Assert.IsFalse(yearChecker.IsLeapYear(1901));
        }

        [TestMethod]
        public void IsNotLeapYearWhenDivisibleByFour() {

            Assert.IsFalse(yearChecker.IsLeapYear(1900));
        }

        [TestMethod]
        public void DaysInLeapYear() {

            Assert.AreEqual(366, yearChecker.GetDaysInYear(2016));
        }

        [TestMethod]
        public void DaysInNonLeapYear() {

            Assert.AreEqual(365, yearChecker.GetDaysInYear(1900));
        }
    }
}