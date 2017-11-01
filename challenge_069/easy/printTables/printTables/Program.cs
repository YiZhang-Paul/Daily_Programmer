using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printTables {
    class Program {
        static void Main(string[] args) {

            var table = new Table();

            //challenge input
            string[] title = new string[] { "Necessities" };
            string[][] inputs = new string[][] {
            
                new string[] { "fairy", "cakes", "happy", "fish", "disgustipated", "melon-balls" }
            };
            Console.WriteLine(table.MakeTable(title, inputs));
            //bonus input
            title = new string[] { "Name", "Address", "Description" };
            inputs = new string[][] {

                new string[] { "Reddit", "www.reddit.com", "the frontpage of the internet" },
                new string[] { "Wikipedia", "en.wikipedia.net", "The Free Encyclopedia" },
                new string[] { "xkcd", "xkcd.com", "Sudo make me a sandwich." }
            };
            Console.WriteLine(table.MakeTable(title, inputs));
        }
    }
}