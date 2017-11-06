using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace voteCounter {
    class Program {
        static void Main(string[] args) {

            char[] candidates = new char[] { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' };

            //challenge input
            Console.WriteLine(GetVoteResult(candidates, 1000000));
        }
        /// <summary>
        /// vote for a candidate
        /// </summary>
        public static char Vote(char[] candidates, Random random) {
            
            if(random.Next(0, 100) < 2) {
                //abstention votes
                return '\0';
            }

            int start = random.Next(0, candidates.Length);
            int end = random.Next(start, candidates.Length);

            return candidates[random.Next(start, end)];
        }
        /// <summary>
        /// collect votes
        /// </summary>
        public static Dictionary<char, int> CollectVotes(char[] candidates, int voters) { 
        
            var votes = new Dictionary<char, int>();
            var random = new Random();

            for(int i = 0; i < voters; i++) {

                char vote = Vote(candidates, random);

                if(vote != '\0') {

                    votes[vote] = votes.ContainsKey(vote) ? votes[vote] + 1 : 1;
                }
            }

            return votes;
        }
        /// <summary>
        /// retrieve vote result
        /// </summary>
        public static string GetVoteResult(char[] candidates, int voters) {

            var votes = CollectVotes(candidates, voters).OrderByDescending(pair => pair.Value);
            var result = new StringBuilder();

            foreach(var pair in votes) {

                result.Append("Candidate " + pair.Key + ": " + pair.Value + " Votes, ")
                      .Append(((double)pair.Value / voters).ToString("P2") + "\n");
            }
            //count abstention votes
            int forfeit = voters - votes.Sum(pair => pair.Value);
            result.Append("Abstention Votes: " + forfeit + ", ")
                  .Append(((double)forfeit / voters).ToString("P2") + "\n");
            //decide winner
            bool hasWinner = votes.First().Value == votes.ElementAt(1).Value;
            result.Append(hasWinner ? "No Winner!" : "Winner: Candidate " + votes.First().Key);

            return result.ToString();
        }
    }
}