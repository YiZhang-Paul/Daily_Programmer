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

        [TestMethod]
        public void DaysInLeapYear() {

            Assert.AreEqual(366, yearChecker.GetDaysInYear(2016));
        }

        [TestMethod]
        public void DaysInNonLeapYear() {

            Assert.AreEqual(365, yearChecker.GetDaysInYear(2017));
        }
    }
}