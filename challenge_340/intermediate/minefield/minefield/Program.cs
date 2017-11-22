using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace minefield {
    class Program {
        static void Main(string[] args) {

            var field = new Minefield(5, 4);
            Console.WriteLine(field.Show()); ;
        }
    }
}