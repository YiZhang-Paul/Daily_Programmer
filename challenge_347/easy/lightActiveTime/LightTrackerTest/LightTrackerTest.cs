using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

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

            
        }

        [TestMethod]
        public void TrackLightActiveTime() {


        }
    }
}