using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using LightTrackerClassLibrary;

namespace LightTrackerTest {
    [TestClass]
    public class IntervalTest {

        [TestMethod]
        [ExpectedException(typeof(ArgumentException),
         "Interval Start Time Must Precede End Time.")]
        public void InvalidInterval() {

            var interval = new Interval(5, 2);
        }

        [TestMethod]
        public void GetIntervalDuration() {

            var interval1 = new Interval(1, 7);
            var interval2 = new Interval(3, 9);

            Assert.AreEqual(6, interval1.Duration);
            Assert.AreEqual(6, interval2.Duration);
        }

        [TestMethod]
        public void CheckOverlappingInterval() {

            var interval1 = new Interval(1, 7);
            var interval2 = new Interval(3, 9);
            var interval3 = new Interval(8, 10);

            Assert.IsTrue(interval1.Overlap(interval2));
            Assert.IsTrue(interval2.Overlap(interval3));
            Assert.IsFalse(interval1.Overlap(interval3));
        }

        [TestMethod]
        public void JoinNonOverlappingInterval() {

            var interval1 = new Interval(1, 4);
            var interval2 = new Interval(5, 7);

            Assert.IsNull(interval1.Join(interval2));
        }

        [TestMethod]
        public void JoinOverlappingInterval() {

            var interval1 = new Interval(1, 4);
            var interval2 = new Interval(3, 7);
            var joined = interval1.Join(interval2);

            Assert.AreEqual(1, joined.Start);
            Assert.AreEqual(7, joined.End);
        }
    }
}