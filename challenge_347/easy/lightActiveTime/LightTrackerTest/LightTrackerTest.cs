using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using LightTrackerClassLibrary;

namespace LightTrackerTest {
    [TestClass]
    public class LightTrackerTest {

        LightTracker tracker;

        [TestInitialize]
        public void Setup() {

            tracker = new LightTracker();
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Input Contains One or More Invalid Intervals.")]
        public void TrackInvalidLightActiveTime() {

            string intervals = @"1 3
                                 7 2
                                 3 4";

            tracker.GetActiveTime(intervals);
        }

        [TestMethod]
        public void TrackLightActiveTime() {

            string intervals = @"1 3
                                 2 3
                                 4 5";

            Assert.AreEqual(3, tracker.GetActiveTime(intervals));
        }
    }
}