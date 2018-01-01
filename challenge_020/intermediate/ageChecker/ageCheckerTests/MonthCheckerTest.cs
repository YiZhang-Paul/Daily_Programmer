using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;

namespace ageCheckerTests {
    [TestClass]
    public class MonthCheckerTest {

        MonthChecker checker;

        [TestInitialize]
        public void Setup() {

            checker = new MonthChecker();
        }

        [TestMethod]
        public void FebruaryDaysInLeapYear() {

            int days = checker.GetDaysInMonth(2, 2016);

            Assert.AreEqual(29, days);
        }

        [TestMethod]
        public void FebruaryDaysInNonLeapYear() {

            int days = checker.GetDaysInMonth(2, 2017);

            Assert.AreEqual(28, days);
        }

        [TestMethod]
        public void DaysInMonthOtherThanFebruary() {

            int days = checker.GetDaysInMonth(1, 2017);

            Assert.AreEqual(31, days);
        }
    }
}