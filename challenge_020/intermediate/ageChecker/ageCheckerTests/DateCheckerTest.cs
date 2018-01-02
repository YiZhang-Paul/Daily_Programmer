using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;
using Moq;

namespace ageCheckerTests {
    [TestClass]
    public class DateCheckerTest {

        Mock<IMonthChecker> monthChecker;
        Mock<IYearChecker> yearChecker;
        DateChecker dateChecker;

        [TestInitialize]
        public void Setup() {

            monthChecker = new Mock<IMonthChecker>();
            yearChecker = new Mock<IYearChecker>();
            dateChecker = new DateChecker(monthChecker.Object, yearChecker.Object);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Invalid Date String.")]
        public void ParseInvalidDateWithoutNumber() {

            dateChecker.ParseDate("abcd/ab/cd");
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Invalid Date String.")]
        public void ParseInvalidDateWithNumber() {

            dateChecker.ParseDate("abcd/12/c3");
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException),
         "Date Value Out of Range.")]
        public void ParseOutOfRangeDate() {

            dateChecker.ParseDate("2016/12/34");
        }

        [TestMethod]
        public void ParseValidDate() {

            var expected = new DateTime(2016, 6, 20);

            Assert.AreEqual(expected, dateChecker.ParseDate("2016/06/20"));
        }

        [TestMethod]
        public void GetElapsedDaysInJanuary() {

            var date = new DateTime(2018, 1, 24);
            int elapsedDays = dateChecker.GetElapsedDaysInCurrentYear(date);

            Assert.AreEqual(24, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysInLeapYear() {

            monthChecker.SetupSequence(mock => mock.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                        .Returns(31)
                        .Returns(29);
            var date = new DateTime(2016, 3, 5);
            int elapsedDays = dateChecker.GetElapsedDaysInCurrentYear(date);

            Assert.AreEqual(65, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysInNonLeapYear() {

            monthChecker.SetupSequence(mock => mock.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                        .Returns(31)
                        .Returns(28);
            var date = new DateTime(2018, 3, 5);
            int elapsedDays = dateChecker.GetElapsedDaysInCurrentYear(date);

            Assert.AreEqual(64, elapsedDays);
        }

        [TestMethod]
        public void GetRemainingDaysInLeapYear() {
            monthChecker.Setup(mock => mock.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                        .Returns(31);
            yearChecker.Setup(mock => mock.GetDaysInYear(It.IsAny<int>()))
                       .Returns(366);
            var date = new DateTime(2016, 2, 1);
            int remainingDays = dateChecker.GetRemainingDaysInCurrentYear(date);

            Assert.AreEqual(335, remainingDays);
        }

        [TestMethod]
        public void GetRemainingDaysInNonLeapYear() {
            monthChecker.Setup(mock => mock.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                        .Returns(31);
            yearChecker.Setup(mock => mock.GetDaysInYear(It.IsAny<int>()))
                       .Returns(365);
            var date = new DateTime(2016, 2, 1);
            int remainingDays = dateChecker.GetRemainingDaysInCurrentYear(date);

            Assert.AreEqual(334, remainingDays);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Start Date Should Precede End Date")]
        public void GetElapsedDaysWithInvalidDates() {

            var start = new DateTime(2015, 10, 5);
            var end = new DateTime(2015, 10, 4);
            dateChecker.GetElapsedDays(start, end);
        }

        [TestMethod]
        public void GetElapsedDaysBetweenSameDates() {

            var start = new DateTime(2016, 2, 25);
            var end = new DateTime(2016, 2, 25);
            int elapsedDays = dateChecker.GetElapsedDays(start, end);

            Assert.AreEqual(0, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysBetweenDatesInSameYear() {

            monthChecker.Setup(mock => mock.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                        .Returns(31);
            var start = new DateTime(2016, 1, 4);
            var end = new DateTime(2016, 2, 24);
            int elapsedDays = dateChecker.GetElapsedDays(start, end);

            Assert.AreEqual(51, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysBetweenDatesInDifferentYear() {

            monthChecker.SetupSequence(mock => mock.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                        .Returns(31)
                        .Returns(29);
            yearChecker.Setup(mock => mock.GetDaysInYear(It.IsAny<int>()))
                       .Returns(365);
            var start = new DateTime(2014, 1, 2);
            var end = new DateTime(2016, 3, 9);
            int elapsedDays = dateChecker.GetElapsedDays(start, end);

            Assert.AreEqual(798, elapsedDays);
        }
    }
}