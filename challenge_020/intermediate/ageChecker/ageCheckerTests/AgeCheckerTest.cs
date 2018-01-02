using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;
using Moq;

namespace ageCheckerTests {
    [TestClass]
    public class AgeCheckerTest {

        Mock<IDateChecker> dateChecker;
        Mock<IMonthChecker> monthChecker;
        Mock<ITimeConverter> timeConverter;
        AgeChecker ageChecker;

        [TestInitialize]
        public void Setup() {

            dateChecker = new Mock<IDateChecker>();
            monthChecker = new Mock<IMonthChecker>();
            timeConverter = new Mock<ITimeConverter>();
            
            ageChecker = new AgeChecker(
                
                dateChecker.Object, 
                monthChecker.Object, 
                timeConverter.Object
            );
        }

        [TestMethod]
        public void ShowInvalidResult() {

            dateChecker.Setup(mock => mock.ParseDate(It.IsAny<string>()))
                       .Throws(new Exception());
            string result = ageChecker.GetResult("2016/0a/20");

            Assert.AreEqual("Invalid Date String.", result);
        }

        [TestMethod]
        public void ShowValidResult() {

            monthChecker.Setup(mock => mock.GetElapsedMonths(It.IsAny<DateTime>(), It.IsAny<DateTime>()))
                        .Returns(18);
            dateChecker.Setup(mock => mock.GetElapsedDays(It.IsAny<DateTime>(), It.IsAny<DateTime>()))
                       .Returns(561);
            timeConverter.Setup(mock => mock.DayToHour(It.IsAny<int>()))
                         .Returns(13464);
            timeConverter.Setup(mock => mock.HourToMinutes(It.IsAny<int>()))
                         .Returns(807840);
            string result = ageChecker.GetResult("2016/06/20");
            string expected = "Months : 18, Days : 561, Hours : 13464, and Minutes : 807840.";

            Assert.AreEqual(expected, result);
        }
    }
}