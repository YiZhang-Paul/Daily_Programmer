using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;

namespace qAndA {
    class QAGame {

        private Random _random = new Random();

        public Dictionary<string, string> QuestionSet { get; private set; }

        public QAGame(string fileName) {

            QuestionSet = GetQuestionSet(fileName);
        }
        /// <summary>
        /// retrieve question set
        /// </summary>
        public Dictionary<string, string> GetQuestionSet(string fileName) {

            var questions = new Dictionary<string, string>();

            try {

                foreach(string line in File.ReadAllLines(fileName)) {

                    string[] question = line.Split(',');
                    questions.Add(question[0], question[1]);
                }
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return questions;
        }
        /// <summary>
        /// pick random question
        /// </summary>
        public string PickQuestion() {

            var questions = QuestionSet.Keys.ToList();

            return questions[_random.Next(0, questions.Count)];
        }
        /// <summary>
        /// run questions and answers game
        /// </summary>
        public void Run() {

            while(true) {

                string question = PickQuestion();
                Console.WriteLine("> " + question);
                string input = Console.ReadLine().Trim();

                if(input == "exit") {

                    break;
                }

                Console.WriteLine(input == QuestionSet[question] ? "Correct!" : "Wrong!");
            }
        }
    }
}