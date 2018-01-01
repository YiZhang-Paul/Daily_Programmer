using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ageCheckerClassLibrary;

namespace ageCheckerTests {
    [TestClass]
    public class TimeConverterTest {

        TimeConverter converter;

        [TestInitialize]
        public void Setup() {

            converter = new TimeConverter();
        }

        [TestMethod]
        public void DayToHour() {

            int hours = converter.DayToHour(56);

            Assert.AreEqual(1344, hours);
        }

        [TestMethod]
        public void HourToMinutes() {

            int minutes = converter.HourToMinutes(78);

            Assert.AreEqual(4680, minutes);
        }
    }
}