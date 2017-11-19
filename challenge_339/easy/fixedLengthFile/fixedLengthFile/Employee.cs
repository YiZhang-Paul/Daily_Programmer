using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fixedLengthFile {
    class Employee {

        public string Name { get; private set; }
        public byte Age { get; private set; }
        public DateTime Birth { get; private set; }
        public string Title { get; set; }
        public decimal Salary { get; set; }

        public Employee(string name, byte age, DateTime birth, string title, decimal salary) {

            Name = name;
            Age = age;
            Birth = birth;
            Title = title;
            Salary = salary;
        }
    }
}