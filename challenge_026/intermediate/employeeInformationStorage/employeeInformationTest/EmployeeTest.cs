using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using employeeInformationClassLibrary;

namespace employeeInformationTest {
    [TestClass]
    public class EmployeeTest {

        [TestMethod]
        public void OutputData() {

            var employee = new Employee("Doe", 20, 34.5m);

            Assert.AreEqual("Doe, 20, $34.50 per hour", employee.ToString());
        }
    }
}