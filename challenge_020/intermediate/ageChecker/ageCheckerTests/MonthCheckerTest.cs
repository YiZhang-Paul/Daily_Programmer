using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;
using Moq;

namespace ageCheckerTests {
    [TestClass]
    public class MonthCheckerTest {

        MonthChecker monthChecker;
        IYearCheckerMock yearChecker;

        private IYearCheckerMock GetYearCheckerMock() {

            var mock = new Mock<IYearCheckerMock>();
            mock.SetupGet(mocked => mocked.LeapYear).Returns(2016);
            mock.SetupGet(mocked => mocked.NonLeapYear).Returns(2017);
            mock.Setup(mocked => mocked.IsLeapYear(It.IsAny<int>()))
                .Returns<int>(year => year == mock.Object.LeapYear);

            return mock.Object;
        }

        [TestInitialize]
        public void Setup() {

            yearChecker = GetYearCheckerMock();
            monthChecker = new MonthChecker(yearChecker);
        }

        [TestMethod]
        public void FebruaryDaysInLeapYear() {

            int days = monthChecker.GetDaysInMonth(2, yearChecker.LeapYear);

            Assert.AreEqual(29, days);
        }

        [TestMethod]
        public void FebruaryDaysInNonLeapYear() {

            int days = monthChecker.GetDaysInMonth(2, yearChecker.NonLeapYear);

            Assert.AreEqual(28, days);
        }

        [TestMethod]
        public void DaysInMonthOtherThanFebruary() {

            int days = monthChecker.GetDaysInMonth(1, yearChecker.NonLeapYear);

            Assert.AreEqual(31, days);
        }
    }
}