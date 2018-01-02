using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace employeeInformationClassLibrary {
    public interface IEmployee {

        string Name { get; }
        uint Age { get; }
        decimal HourlyWage { get; }
    }
}