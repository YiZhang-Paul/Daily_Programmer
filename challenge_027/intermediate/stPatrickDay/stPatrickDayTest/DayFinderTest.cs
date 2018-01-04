using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using dayFinderClassLibrary;

namespace stPatrickDayTest {
    [TestClass]
    public class DayFinderTest {

        DayFinder finder;

        [TestInitialize]
        public void Setup() {

            finder = new DayFinder();
        }

        [TestMethod]
        public void GetDayOfWeekIndex() {

            Assert.AreEqual(finder.GetDayOfWeekIndex(3, 17, 2010), 4);
            Assert.AreEqual(finder.GetDayOfWeekIndex(3, 17, 2012), 0);
            Assert.AreEqual(finder.GetDayOfWeekIndex(3, 17, 2018), 0);
        }

        [TestMethod]
        public void GetDayOfWeek() {

            Assert.AreEqual(finder.GetDayOfWeek(3, 17, 2010), "Wednesday");
            Assert.AreEqual(finder.GetDayOfWeek(3, 17, 2012), "Saturday");
            Assert.AreEqual(finder.GetDayOfWeek(3, 17, 2018), "Saturday");
        }
    }
}