using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace variableNotation {
    class Program {
        static void Main(string[] args) {
            //challenge input
            string[] inputs = new string[] { "hello world", "user id", "map controller delegate manager" };

            NotationBuilder builder = new NotationBuilder();
            for(int i = 0; i < inputs.Length; i++) {
                Console.WriteLine(inputs[i] + " -> " + builder.BuildNotation(i, inputs[i]));
            }
            //bonus input
            Console.WriteLine("user_id -> " + builder.ConvertNotation(1, 0, "user_id"));
            Console.WriteLine("userId -> " + builder.ConvertNotation(0, 1, "userId"));
        }
    }
}
