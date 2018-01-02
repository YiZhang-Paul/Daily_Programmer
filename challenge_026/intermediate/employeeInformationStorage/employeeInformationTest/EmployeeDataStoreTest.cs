using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using employeeInformationClassLibrary;
using Moq;

namespace employeeInformationTest {
    [TestClass]
    public class EmployeeDataStoreTest {

        EmployeeDataStore store;

        private void SetupStoreWithData(string[] names) {

            var data = new Dictionary<string, IEmployee>();

            foreach(string name in names) {

                var employee = new Mock<IEmployee>();
                employee.Setup(mock => mock.Name).Returns(name);
                data[name] = employee.Object;
            }

            store = new EmployeeDataStore(data);
        }

        [TestInitialize]
        public void Setup() {

            store = new EmployeeDataStore();
        }

        [TestMethod]
        public void GetEmployeeList() {

            SetupStoreWithData(new string[] { "Bob", "Jane", "Doe" });
            var employees = store.Employees;

            Assert.AreEqual(3, store.TotalEmployee);
            Assert.IsTrue(employees.Any(employee => employee.Name == "Bob"));
            Assert.IsTrue(employees.Any(employee => employee.Name == "Jane"));
            Assert.IsTrue(employees.Any(employee => employee.Name == "Doe"));
        }

        [TestMethod]
        public void EmployeeExists() {

            SetupStoreWithData(new string[] { "Bob" });
            var employee = new Mock<IEmployee>();
            employee.Setup(mock => mock.Name).Returns("Bob");

            Assert.IsTrue(store.HasEmployee(employee.Object));
        }

        [TestMethod]
        public void EmployeeNotExists() {

            SetupStoreWithData(new string[] { "Bob" });
            var employee = new Mock<IEmployee>();
            employee.Setup(mock => mock.Name).Returns("Jane");

            Assert.IsFalse(store.HasEmployee(employee.Object));
        }

        [TestMethod]
        public void AddEmployee() {

            var employee = new Mock<IEmployee>();
            employee.Setup(mock => mock.Name).Returns("Bob");
            store.Add(employee.Object);

            Assert.AreEqual(1, store.TotalEmployee);
        }

        [TestMethod]
        public void UpdateEmployeeFailed() {

            SetupStoreWithData(new string[] { "Bob" });
            var employee = new Mock<IEmployee>();
            employee.Setup(mock => mock.Name).Returns("Jane");

            Assert.IsFalse(store.Update(employee.Object));
        }

        [TestMethod]
        public void UpdateEmployeeSucceed() {

            string name = "Bob";
            SetupStoreWithData(new string[] { name });
            var employee = new Mock<IEmployee>();
            employee.Setup(mock => mock.Name).Returns(name);

            Assert.AreEqual(1, store.TotalEmployee);
            Assert.IsTrue(store.Update(employee.Object));
            Assert.AreEqual(1, store.TotalEmployee);
        }
    }
}