using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace printSongs {
    class SongPrinter {

        private NumberReader _reader = new NumberReader();
        /// <summary>
        /// capitalize word
        /// </summary>
        public string Capitalize(string word) {

            return word[0].ToString().ToUpper() + word.Substring(1).ToLower();
        }
        /// <summary>
        /// print song "99 Bottles of Beer"
        /// </summary>
        public string PrintSong1() {

            var song = new StringBuilder();

            for(int i = 99; i >= 0; i--) {

                string current = i > 0 ? _reader.ReadNumber(i) + " bottle" + (i > 1 ? "s" : "") : "no more bottles";
                string next = i >= 1 ? (i > 1 ? _reader.ReadNumber(i - 1) + " bottle" + (i > 2 ? "s" : "") : "no more bottles") : "";
                song.Append(Capitalize(current) + " of beer on the wall, " + current + " of beer.\n")
                    .Append(next != "" ? "Take one down and pass it around, " + next + " of beer on the wall.\n\n" : "");
            }

            return song.Append("Go to the store and buy some more, " + _reader.ReadNumber(99) + " bottles of beer on the wall.").ToString();
        }
        /// <summary>
        /// print song "Old MacDonald Had A Farm"
        /// </summary>
        public string PrintSong2() {

            var song = new StringBuilder();
            string[] animals = new string[] { 
            
                "a cow", "a pig", "a turkey", "a kangaroo", "a T-Rex", "some chickens"   
            };
            string[] sounds = new string[] { 
            
                "moo", "oink", "gobble", "g'day mate", "GAAAAARGH", "cluck"
            };

            for(int i = 0; i < animals.Length; i++) {

                song.Append("Old MACDONALD had a farm\nE-I-E-I-O\nAnd on his farm he had " + animals[i] + "\nE-I-E-I-O\n")
                    .Append("With a " + sounds[i] + " " + sounds[i] + " here\nAnd a " + sounds[i] + " " + sounds[i] + " there\n")
                    .Append("Here a " + sounds[i] + ", there a " + sounds[i] + "\nEverywhere a " + sounds[i] + " " + sounds[i] + "\n")
                    .Append(i == animals.Length - 1 ? "" : "Old MacDonald had a farm\nE-I-E-I-O\n\n");
            }

            for(int i = animals.Length - 2; i >= 0; i--) {

                song.Append("With a " + sounds[i] + " " + sounds[i] + " here\nAnd a " + sounds[i] + " " + sounds[i] + " there\n")
                    .Append("Here a " + sounds[i] + ", there a " + sounds[i] + "\nEverywhere a " + sounds[i] + " " + sounds[i] + "\n");
            }

            return song.Append("\nOld MacDonald had a farm\nE-I-E-I-OOOOOOO.........").ToString();
        }
        /// <summary>
        /// print song "the Twelve Days of Christmas" 
        /// </summary>
        public string PrintSong3() {

            var song = new StringBuilder();
            string[] gifts = new string[] {
 
                "partridge in a pear tree", "turtle doves", "french hens", "colly birds", "gold rings", "geese laying", 
                "swans swimming", "maids milking", "drummers drumming", "pipers piping", "ladies dancing", "lords leaping"
            };

            for(int i = 1; i <= 12; i++) {

                song.Append("On the " + _reader.ReadOrder(i) + " day of christmas my true love sent to me\n");

                for(int j = i; j >= 1; j--) {

                    song.Append((j == 1 ? "A" : Capitalize(_reader.ReadNumber(j))) + " " + gifts[j - 1] + (j == 2 ? " and" : "") + (j == 1 ? "\n\n" : "\n"));
                }
            }

            return song.ToString();
        }
    }
}