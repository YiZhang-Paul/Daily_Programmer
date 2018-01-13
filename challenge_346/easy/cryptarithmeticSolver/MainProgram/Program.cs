using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CryptarithmeticSolverClassLibrary;
using System.Diagnostics;

namespace MainProgram {
    class Program {
        static void Main(string[] args) {

            var solver = new CryptarithmeticSolver(new Utility());
            var watch = new Stopwatch();

            //default input
            watch.Start();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("THIS + IS + HIS == CLAIM")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            //challenge input
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("WHAT + WAS + THY == CAUSE")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("HIS + HORSE + IS == SLAIN")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("HERE + SHE == COMES")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("FOR + LACK + OF == TREAD")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("I + WILL + PAY + THE == THEFT")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            //bonus input
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("TEN + HERONS + REST + NEAR + NORTH + SEA + SHORE + AS + TAN + TERNS + SOAR + TO + ENTER + THERE + AS + HERONS + NEST + ON + STONES + AT + SHORE + THREE + STARS + ARE + SEEN + TERN + SNORES + ARE + NEAR == SEVVOTH")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("SO + MANY + MORE + MEN + SEEM + TO + SAY + THAT + THEY + MAY + SOON + TRY + TO + STAY + AT + HOME +  SO + AS + TO + SEE + OR + HEAR + THE + SAME + ONE + MAN + TRY + TO + MEET + THE + TEAM + ON + THE + MOON + AS + HE + HAS + AT + THE + OTHER + TEN == TESTS")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
            watch.Restart();
            Console.WriteLine(ShowOutput(solver.FindCryptarithm("THIS + A + FIRE + THEREFORE + FOR + ALL + HISTORIES + I + TELL + A + TALE + THAT + FALSIFIES + ITS + TITLE + TIS + A + LIE + THE + TALE + OF + THE + LAST + FIRE + HORSES + LATE + AFTER + THE + FIRST + FATHERS + FORESEE + THE + HORRORS + THE + LAST + FREE + TROLL + TERRIFIES + THE + HORSES + OF + FIRE + THE + TROLL + RESTS + AT + THE + HOLE + OF + LOSSES + IT + IS + THERE + THAT + SHE + STORES + ROLES + OF + LEATHERS + AFTER + SHE + SATISFIES + HER + HATE + OFF + THOSE + FEARS + A + TASTE + RISES + AS + SHE + HEARS + THE + LEAST + FAR + HORSE + THOSE + FAST + HORSES + THAT + FIRST + HEAR + THE + TROLL + FLEE + OFF + TO + THE + FOREST + THE + HORSES + THAT + ALERTS + RAISE + THE + STARES + OF + THE + OTHERS + AS + THE + TROLL + ASSAILS + AT + THE + TOTAL + SHIFT + HER + TEETH + TEAR + HOOF + OFF + TORSO + AS + THE + LAST + HORSE + FORFEITS + ITS + LIFE + THE + FIRST + FATHERS + HEAR + OF + THE + HORRORS + THEIR + FEARS + THAT + THE + FIRES + FOR + THEIR + FEASTS + ARREST + AS + THE + FIRST + FATHERS + RESETTLE + THE + LAST + OF + THE + FIRE + HORSES + THE + LAST + TROLL + HARASSES + THE + FOREST + HEART + FREE + AT + LAST + OF + THE + LAST + TROLL + ALL + OFFER + THEIR + FIRE + HEAT + TO + THE + ASSISTERS + FAR + OFF + THE + TROLL + FASTS + ITS + LIFE + SHORTER + AS + STARS + RISE + THE + HORSES + REST + SAFE + AFTER + ALL + SHARE + HOT + FISH + AS + THEIR + AFFILIATES + TAILOR + A + ROOFS + FOR + THEIR + SAFE == FORTRESSES")));
            watch.Stop();
            Console.WriteLine(watch.ElapsedMilliseconds + "ms");
        }

        private static string ShowOutput(Dictionary<char, int> lookup) {

            var output = lookup.OrderBy(pair => pair.Key)
                               .Select(pair => "\"" + Char.ToUpper(pair.Key) + "\"=>" + pair.Value);

            return "{" + string.Join(", ", output) + "}";
        }
    }
}