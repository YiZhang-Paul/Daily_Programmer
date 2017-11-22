using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.Text.RegularExpressions;

namespace minefield {
    class Robot {

        public Point Position { get; private set; }
        public bool Running { get; private set; }

        public void StartEngine() {

            Running = true;
        }

        public void ShutEngine() {

            Running = false;
        }

        public bool IsValidCommand(string command) {

            return Regex.IsMatch(command.ToLower(), "^[nseoi-]+$");
        }

        public bool IsValidDestination(Minefield field, Point destination) {

            return destination.Y >= 0 && destination.Y < field.Layout.Length &&
                   destination.X >= 0 && destination.X < field.Layout.Length;
        }
        /// <summary>
        /// retrieve starting position on minefield
        /// </summary>
        public Point GetStartPosition(Minefield field) {

            return new Point(0, field.Layout.Length - 2);
        }

        public Point GetDestination(char operation) {
        
            switch(operation) {
            
                case 'n' : case 's' :

                    return new Point(Position.X, Position.Y + (operation == 's' ? 1 : -1));

                case 'e' : case 'o' :

                    return new Point(Position.X + (operation == 'e' ? 1 : -1), Position.Y);
            }

            return Position;
        }

        public bool Move(Minefield field, char operation) {

            var destination = GetDestination(operation);
            //when going out of bounds
            if(!IsValidDestination(field, destination)) {

                return false;
            }

            char neighbor = field.GetSquare(destination);
            //move when neighbor is a mine or empty square
            if(Running && (neighbor == '*' || neighbor == '0')) {

                Position = destination;
                field.SetSquare(destination, neighbor == '0' ? 'M' : '!');

                return neighbor == '0';
            }
            //hold position when neighbor is wall or engine not started
            return true;
        }

        public bool ProcessOperation(Minefield field, char operation) {

            if(operation == 'i' || operation == '-') {

                if(operation == 'i') {

                    StartEngine();
                }
                else {

                    ShutEngine();
                }

                return true;
            }

            return Move(field, operation);
        }
        /// <summary>
        /// execute entire command sequence
        /// </summary>
        public void ExecuteAllCommand(Minefield field, string command) {

            Position = GetStartPosition(field);

            foreach(char operation in command.ToLower()) {

                if(!ProcessOperation(field, operation)) {

                    break;
                }
            }
        }

        public string GetResult(Minefield field, string command) { 
        
            if(!IsValidCommand(command)) {

                return "Invalid Command.";
            }

            ExecuteAllCommand(field, command);

            return field.Show();
        }
    }
}