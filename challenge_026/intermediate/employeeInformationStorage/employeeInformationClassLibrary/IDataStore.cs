using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace employeeInformationClassLibrary {
    public interface IDataStore {

        IEnumerable<IEmployee> Employees { get; }
        int TotalEmployee { get; }

        bool HasEmployee(IEmployee employee);
        void Add(IEmployee employee);
        bool Update(IEmployee employee);
    }
}