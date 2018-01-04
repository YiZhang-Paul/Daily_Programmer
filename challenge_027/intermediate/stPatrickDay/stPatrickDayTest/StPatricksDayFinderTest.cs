using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using dayFinderClassLibrary;
using Moq;

namespace stPatrickDayTest {
    [TestClass]
    public class StPatricksDayFinderTest {

        Mock<IDayFinder> dayFinder;
        StPatricksDayFinder patricksDayFinder;

        [TestInitialize]
        public void Setup() {

            dayFinder = new Mock<IDayFinder>();
            patricksDayFinder = new StPatricksDayFinder(dayFinder.Object);
        }

        [TestMethod]
        public void GetDayOfWeek() {

            dayFinder.SetupSequence(mock => mock.GetDayOfWeek(It.IsAny<int>(), It.IsAny<int>(), It.IsAny<int>()))
                     .Returns("Wednesday")
                     .Returns("Saturday")
                     .Returns("Saturday");

            Assert.AreEqual("Wednesday", patricksDayFinder.GetDayOfWeek(2010));
            Assert.AreEqual("Saturday", patricksDayFinder.GetDayOfWeek(2012));
            Assert.AreEqual("Saturday", patricksDayFinder.GetDayOfWeek(2018));
        }

        [TestMethod]
        public void PatricksDayFallsOnGivenDayInGivenYear() {

            dayFinder.SetupSequence(mock => mock.GetDayOfWeek(It.IsAny<int>(), It.IsAny<int>(), It.IsAny<int>()))
                     .Returns("Wednesday")
                     .Returns("Saturday")
                     .Returns("Saturday");

            Assert.IsTrue(patricksDayFinder.IsDayOfWeek("Wednesday", 2010));
            Assert.IsTrue(patricksDayFinder.IsDayOfWeek("Saturday", 2012));
            Assert.IsTrue(patricksDayFinder.IsDayOfWeek("Saturday", 2018));
        }

        [TestMethod]
        public void PatricksDayDoesNotFallOnGivenDayInGivenYear() {

            dayFinder.SetupSequence(mock => mock.GetDayOfWeek(It.IsAny<int>(), It.IsAny<int>(), It.IsAny<int>()))
                     .Returns("Wednesday")
                     .Returns("Saturday")
                     .Returns("Saturday");

            Assert.IsFalse(patricksDayFinder.IsDayOfWeek("Friday", 2010));
            Assert.IsFalse(patricksDayFinder.IsDayOfWeek("Sunday", 2012));
            Assert.IsFalse(patricksDayFinder.IsDayOfWeek("Monday", 2018));
        }

        [TestMethod]
        public void NumberOfPatricksDaysOnGivenDayInGivenCentury() {

            int yearChecked = 0;

            dayFinder.Setup(mock => mock.GetDayOfWeek(It.IsAny<int>(), It.IsAny<int>(), It.IsAny<int>()))
                     .Returns<int, int, int>((month, day, year) => { 
                     
                         return ++yearChecked > 50 ? "Saturday" : "Monday";
                     });

            Assert.AreEqual(50, patricksDayFinder.TotalDayOfWeeksInCentury("Saturday", 2011));
        }
    }
}