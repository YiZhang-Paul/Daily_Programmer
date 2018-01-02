using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;

namespace ageCheckerTests {
    [TestClass]
    public class TimeConverterTest {

        TimeConverter timeConverter;

        [TestInitialize]
        public void Setup() {

            timeConverter = new TimeConverter();
        }

        [TestMethod]
        public void DayToHour() {

            Assert.AreEqual(1344, timeConverter.DayToHour(56));
        }

        [TestMethod]
        public void HourToMinutes() {

            Assert.AreEqual(4680, timeConverter.HourToMinutes(78));
        }
    }
}