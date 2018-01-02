using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace employeeInformationClassLibrary {
    public class Employee : IEmployee {

        public string Name { get; private set; }
        public uint Age { get; private set; }
        public decimal HourlyWage { get; private set; }

        public Employee(string name, uint age, decimal hourlyWage) {

            Name = name;
            Age = age;
            HourlyWage = hourlyWage;
        }

        public override string ToString() {
            
            return Name + ", " + Age + ", " + HourlyWage.ToString("C2") + " per hour";
        }
    }
}