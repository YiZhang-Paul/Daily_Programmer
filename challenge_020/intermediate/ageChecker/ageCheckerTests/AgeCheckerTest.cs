using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;
using mainProgram;
using Moq;

namespace ageCheckerTests {
    [TestClass]
    public class AgeCheckerTest {

        IDateChecker dateChecker;
        ITimeConverter timeConverter;
        AgeChecker ageChecker;

        private IDateChecker GetDateCheckerMock() {

            var mock = new Mock<IDateChecker>();
            mock.Setup(mocked => mocked.ParseDate(It.IsAny<string>()))
                .Returns<string>(date => {

                    if(date == "2016/0a/20") {

                        throw new ArgumentException("Invalid Date String.");
                    }

                    return new DateTime(2016, 6, 20);
                });
            mock.Setup(mocked => mocked.GetElapsedMonthsBetweenDates(It.IsAny<DateTime>(), It.IsAny<DateTime>()))
                .Returns<DateTime, DateTime>((start, end) => start == new DateTime(2016, 6, 20) ? 18 : 0);
            mock.Setup(mocked => mocked.GetElapsedDaysBetweenDates(It.IsAny<DateTime>(), It.IsAny<DateTime>()))
                .Returns<DateTime, DateTime>((start, end) => start == new DateTime(2016, 6, 20) ? 561 : 0);

            return mock.Object;
        }

        private ITimeConverter GetTimeConverterMock() { 
        
            var mock = new Mock<ITimeConverter>();
            mock.Setup(mocked => mocked.DayToHour(It.IsAny<int>()))
                .Returns<int>(days => days == 561 ? 13464 : 0);
            mock.Setup(mocked => mocked.HourToMinutes(It.IsAny<int>()))
                .Returns<int>(minutes => minutes == 13464 ? 807840 : 0);

            return mock.Object;
        }

        [TestInitialize]
        public void Setup() {

            dateChecker = GetDateCheckerMock();
            timeConverter = GetTimeConverterMock();
            ageChecker = new AgeChecker(dateChecker, timeConverter);
        }

        [TestMethod]
        public void ShowInvalidResult() {

            string result = ageChecker.GetResult("2016/0a/20");
            string expected = "Invalid Date String.";

            Assert.AreEqual(result, expected);
        }

        [TestMethod]
        public void ShowValidResult() {

            string result = ageChecker.GetResult("2016/06/20");
            string expected = "Months : 18, Days : 561, Hours : 13464, and Minutes : 807840.";

            Assert.AreEqual(expected, result);
        }
    }
}