using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using employeeInformationClassLibrary;
using Moq;

namespace employeeInformationTest {
    [TestClass]
    public class EmployeeTrackerTest {

        EmployeeTracker tracker;
        Mock<IDataStore> store;

        [TestInitialize]
        public void Setup() {

            store = new Mock<IDataStore>();
            tracker = new EmployeeTracker(store.Object);
        }

        [TestMethod]
        public void InvalidNameThatIsEmpty() {

            Assert.IsFalse(tracker.IsValidInput("", 20, 12.2m));
        }

        [TestMethod]
        public void InvalidNameWithOverThirtyCharacters() {

            string name = "".PadLeft(31, 's');

            Assert.IsFalse(tracker.IsValidInput(name, 20, 12.2m));
        }

        [TestMethod]
        public void InvalidNameWithDigits() {

            Assert.IsFalse(tracker.IsValidInput("John123", 20, 12.2m));
        }

        [TestMethod]
        public void ValidName() {

            Assert.IsTrue(tracker.IsValidInput("John Doe", 20, 12.2m));
        }

        [TestMethod]
        public void InvalidAgeOver120() {

            Assert.IsFalse(tracker.IsValidInput("John Doe", 121, 12.2m));
        }

        [TestMethod]
        public void ValidAge() {

            Assert.IsTrue(tracker.IsValidInput("John Doe", 70, 12.2m));
        }

        [TestMethod]
        public void InvalidHourlyWage() {

            Assert.IsFalse(tracker.IsValidInput("John Doe", 70, -12.2m));
        }

        [TestMethod]
        public void ValidHourlyWage() {

            Assert.IsTrue(tracker.IsValidInput("John Doe", 70, 12.2m));
        }
    }
}