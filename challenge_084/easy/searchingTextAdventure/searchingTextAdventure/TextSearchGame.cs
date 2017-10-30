using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace searchingTextAdventure {
    class TextSearchGame {

        private Random _random = new Random();
        private string _startMessage = @"You awaken to find yourself in a barren moor. 
                                         Grey foggy clouds float oppressively close to you, 
                                         reflected in the murky grey water which reaches up your shins.
                                         Some black plants barely poke out of the shallow water.
                                         You notice a small watch-like device in your left hand.  
                                         It has hands like a watch, but the hands don't seem to tell time.
                                         Try ""look"" or simply ""l"":";
        private string _endMessage = @"You see a box sitting on the plain.
                                       Its filled with treasure! 
                                       You win! The end.";
        private string _inputs = "^(look|l|north|n|south|s|west|w|east|e|quit|q)$";

        public Position ChestLocation { get; private set; }
        public Position PlayerLocation { get; private set; }
        public int TotalRow { get; private set; }
        public int TotalColumn { get; private set; }

        public TextSearchGame(int row, int column) {

            Initialize(row, column);
        }
        /// <summary>
        /// initialize game
        /// </summary>
        public void Initialize(int row, int column) {
        
            TotalRow = row;
            TotalColumn = column;
            
            do {

                ChestLocation = RandomLocation(TotalRow, TotalColumn);
                PlayerLocation = RandomLocation(TotalRow, TotalColumn);

            } while(PlayerLocation.IsSame(ChestLocation));
        }
        /// <summary>
        /// pick random location in game world
        /// </summary>
        public Position RandomLocation(int row, int column) {

            int locatedRow = _random.Next(1, row + 1);
            int locatedColumn = _random.Next(1, column + 1);

            return new Position(locatedRow, locatedColumn);
        }
        /// <summary>
        /// retrieve user input
        /// </summary>
        public string GetInput() {

            string input = Console.ReadLine().Trim();

            if(!Regex.IsMatch(input.ToLower(), _inputs)) {

                Console.WriteLine("Invalid input. Accepted inputs: " + Regex.Replace(_inputs, @"[^\w|]", ""));

                return GetInput();
            }

            Console.WriteLine("> " + input);

            return input;
        }
        /// <summary>
        /// calculate distance between two positions
        /// </summary>
        public float GetDistance(Position position1, Position position2) {

            int xDistance = position1.Column - position2.Column;
            int yDistance = position1.Row - position2.Row;

            return (float)Math.Sqrt(Math.Pow(xDistance, 2) + Math.Pow(yDistance, 2));
        }
        /// <summary>
        /// read dials to find out current position
        /// </summary>
        public void LookUpDials() {

            Console.WriteLine("The dial reads '" + GetDistance(PlayerLocation, ChestLocation) + "'");
        }
        /// <summary>
        /// move player
        /// </summary>
        public void Move(string direction) { 
        
            switch(direction[0]) {
            
                case 'n' :

                    PlayerLocation.Row = Math.Max(1, PlayerLocation.Row - 1);
                    break;

                case 's' :

                    PlayerLocation.Row = Math.Min(TotalRow, PlayerLocation.Row + 1);
                    break;

                case 'w' :

                    PlayerLocation.Column = Math.Max(1, PlayerLocation.Column - 1);
                    break;

                case 'e' :

                    PlayerLocation.Column = Math.Min(TotalColumn, PlayerLocation.Column + 1);
                    break;
            }
        }
        /// <summary>
        /// check current game status
        /// </summary>
        public int CheckGameStatus() { 
            //player found the chest
            if(PlayerLocation.IsSame(ChestLocation)) {
            
                return 0;
            }
            //inform current location
            LookUpDials();

            return 1;
        }
        /// <summary>
        /// run game
        /// </summary>
        public void Run() {

            Console.WriteLine(Regex.Replace(_startMessage, @"(?<=\n)\s+", ""));

            while(true) {
                //retrieve valid user input
                string input = GetInput();
                //check program termination request
                if(input == "q" || input == "quit") {

                    break;
                }
                //look up dials
                if(input == "look") {

                    LookUpDials();
                    continue;
                }
                //move player and check game status
                Move(input);
                
                if(CheckGameStatus() == 0) {

                    LookUpDials();
                    Console.WriteLine(Regex.Replace(_endMessage, @"(?<=\n)\s+", ""));
                    break;
                }
            }
        }
    }
}