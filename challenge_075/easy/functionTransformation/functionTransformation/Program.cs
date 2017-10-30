using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace functionTransformation {
    class Program {
        static void Main(string[] args) {

            var generator = new FunctionGenerator();

            //default input
            string input1 = "f(x)=x*x";
            string input2 = "big(x,y)=sqrt(x+y)*10";
            //challenge input
            string input3 = "L0(x,y)=abs(x)+abs(y)";
            //bonus input
            string input4 = "f(x)=x^2";

            Console.WriteLine(generator.GetFunction(input1));
            Console.WriteLine(generator.GetFunction(input2));
            Console.WriteLine(generator.GetFunction(input3));
            Console.WriteLine(generator.GetFunction(input4));
        }
    }
}