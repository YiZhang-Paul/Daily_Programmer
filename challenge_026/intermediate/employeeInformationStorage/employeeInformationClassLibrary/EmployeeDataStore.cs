using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace employeeInformationClassLibrary {
    public class EmployeeDataStore : IDataStore {

        private Dictionary<string, IEmployee> Data { get; set; }

        public IEnumerable<IEmployee> Employees {

            get {

                return Data.Select(pair => pair.Value);
            }
        }

        public int TotalEmployee {

            get {

                return Data.Count;
            }
        }

        public EmployeeDataStore() {

            Data = new Dictionary<string, IEmployee>();
        }

        public EmployeeDataStore(Dictionary<string, IEmployee> data) {

            Data = data;
        }

        public bool HasEmployee(IEmployee employee) {

            return Data.ContainsKey(employee.Name);
        }

        public void Add(IEmployee employee) {

            Data[employee.Name] = employee;
        }

        public bool Update(IEmployee employee) {

            if(!Data.ContainsKey(employee.Name)) {
            
                return false;
            }

            Data[employee.Name] = employee;

            return true;
        }
    }
}