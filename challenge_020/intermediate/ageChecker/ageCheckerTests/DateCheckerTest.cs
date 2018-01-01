using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;
using Moq;

namespace ageCheckerTests {
    [TestClass]
    public class DateCheckerTest {

        IMonthChecker monthChecker;
        IYearCheckerMock yearChecker;
        DateChecker dateChecker;

        private IMonthChecker GetMonthCheckerMock() {

            var mock = new Mock<IMonthChecker>();
            //only simulates retrieving number of days in January and February
            mock.Setup(mocked => mocked.GetDaysInMonth(It.IsAny<int>(), It.IsAny<int>()))
                .Returns<int, int>((month, year) => { 
                
                    if(month == 1) {
                    
                        return 31;
                    }

                    return year == GetYearCheckerMock().LeapYear ? 29 : 28;
                });

            return mock.Object;
        }

        private IYearCheckerMock GetYearCheckerMock() {

            var mock = new Mock<IYearCheckerMock>();
            mock.SetupGet(mocked => mocked.LeapYear).Returns(2016);
            mock.SetupGet(mocked => mocked.NonLeapYear).Returns(2017);
            mock.Setup(mocked => mocked.IsLeapYear(It.IsAny<int>()))
                .Returns<int>(year => year == mock.Object.LeapYear);
            mock.Setup(mocked => mocked.GetDaysInYear(It.IsAny<int>()))
                .Returns<int>(year => year == mock.Object.LeapYear ? 366 : 365);

            return mock.Object;
        }

        [TestInitialize]
        public void Setup() {

            monthChecker = GetMonthCheckerMock();
            yearChecker = GetYearCheckerMock();
            dateChecker = new DateChecker(monthChecker, yearChecker);
        }

        [TestMethod]
        public void GetElapsedDaysInJanuary() {
            //year is irrelevant here
            var date = new DateTime(2018, 1, 24);
            int elapsedDays = dateChecker.GetElapsedDaysInCurrentYear(date);

            Assert.AreEqual(24, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysInLeapYear() {

            var date = new DateTime(yearChecker.LeapYear, 3, 5);
            int elapsedDays = dateChecker.GetElapsedDaysInCurrentYear(date);

            Assert.AreEqual(65, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysInNonLeapYear() {

            var date = new DateTime(yearChecker.NonLeapYear, 3, 5);
            int elapsedDays = dateChecker.GetElapsedDaysInCurrentYear(date);

            Assert.AreEqual(64, elapsedDays);
        }

        [TestMethod]
        public void GetRemainingDaysInLeapYear() {

            var date = new DateTime(yearChecker.LeapYear, 2, 1);
            int elapsedDays = dateChecker.GetRemainingDaysInCurrentYear(date);

            Assert.AreEqual(335, elapsedDays);
        }

        [TestMethod]
        public void GetRemainingDaysInNonLeapYear() {

            var date = new DateTime(yearChecker.NonLeapYear, 2, 1);
            int elapsedDays = dateChecker.GetRemainingDaysInCurrentYear(date);

            Assert.AreEqual(334, elapsedDays);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Start Date Should Precede End Date")]
        public void GetElapsedDaysWithInvalidDates() {

            var start = new DateTime(2015, 10, 5);
            var end = new DateTime(2015, 10, 4);
            dateChecker.GetElapsedDaysBetweenDates(start, end);
        }

        [TestMethod]
        public void GetElapsedDaysBetweenSameDates() {

            var start = new DateTime(2016, 2, 25);
            var end = new DateTime(2016, 2, 25);
            int elapsedDays = dateChecker.GetElapsedDaysBetweenDates(start, end);

            Assert.AreEqual(0, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysBetweenDatesInSameYear() {

            var start = new DateTime(2016, 1, 4);
            var end = new DateTime(2016, 2, 24);
            int elapsedDays = dateChecker.GetElapsedDaysBetweenDates(start, end);

            Assert.AreEqual(51, elapsedDays);
        }

        [TestMethod]
        public void GetElapsedDaysBetweenDatesInDifferentYear() {

            var start = new DateTime(2014, 1, 2);
            var end = new DateTime(2016, 3, 9);
            int elapsedDays = dateChecker.GetElapsedDaysBetweenDates(start, end);

            Assert.AreEqual(798, elapsedDays);
        }
    }
}