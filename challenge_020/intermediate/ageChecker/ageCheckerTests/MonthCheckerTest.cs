using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;
using Moq;

namespace ageCheckerTests {
    [TestClass]
    public class MonthCheckerTest {

        Mock<IYearChecker> yearChecker;
        MonthChecker monthChecker;

        [TestInitialize]
        public void Setup() {

            yearChecker = new Mock<IYearChecker>();
            monthChecker = new MonthChecker(yearChecker.Object);
        }

        [TestMethod]
        public void FebruaryDaysInLeapYear() {

            yearChecker.Setup(mock => mock.IsLeapYear(It.IsAny<int>()))
                       .Returns(true);
            Assert.AreEqual(29, monthChecker.GetDaysInMonth(2, 2016));
        }

        [TestMethod]
        public void FebruaryDaysInNonLeapYear() {

            yearChecker.Setup(mock => mock.IsLeapYear(It.IsAny<int>()))
                       .Returns(false);
            Assert.AreEqual(28, monthChecker.GetDaysInMonth(2, 2017));
        }

        [TestMethod]
        public void DaysInMonthOtherThanFebruary() {

            Assert.AreEqual(31, monthChecker.GetDaysInMonth(1, 2010));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Start Date Should Precede End Date")]
        public void GetElapsedMonthsWithInvalidDates() {

            var start = new DateTime(2015, 10, 5);
            var end = new DateTime(2015, 10, 4);
            monthChecker.GetElapsedMonths(start, end);
        }

        [TestMethod]
        public void GetElapsedMonthsBetweenDatesInSameYear() {

            var start = new DateTime(2016, 7, 5);
            var end = new DateTime(2016, 11, 4);
            int elapsedMonths = monthChecker.GetElapsedMonths(start, end);

            Assert.AreEqual(4, elapsedMonths);
        }

        [TestMethod]
        public void GetElapsedMonthsBetweenDatesInDifferentYear() {

            var start = new DateTime(2014, 10, 5);
            var end = new DateTime(2016, 7, 4);
            int elapsedMonths = monthChecker.GetElapsedMonths(start, end);

            Assert.AreEqual(20, elapsedMonths);
        }
    }
}