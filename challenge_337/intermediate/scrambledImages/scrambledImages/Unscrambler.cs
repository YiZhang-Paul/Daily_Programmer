using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.Text.RegularExpressions;

namespace scrambledImages {
    class Unscrambler {

        public string FileName { get; private set; }
        public string[][] Pixels { get; private set; }
        /// <param name="name">image file name</param>
        public Unscrambler(string name) {

            SetFile(name);
        }
        /// <summary>
        /// set file name of image
        /// </summary>
        /// <param name="name">image file name</param>
        public void SetFile(string name) {

            FileName = name;
        }
        /// <summary>
        /// unscramble image and save output
        /// </summary>
        /// <param name="output">output file name</param>
        /// <param name="color">color used to align horizontally</param>
        public void Unscramble(string output, Color color) { 
        
            using(var image = new Bitmap(FileName)) {

                Pixels = ReadPixels(image);
                AlignRow(color);
                DrawImage(image);
                image.Save(output);
            }
        }
        /// <summary>
        /// read all pixels on image
        /// </summary>
        /// <param name="image">image to read</param>
        /// <returns>all pixels on image</returns>
        public string[][] ReadPixels(Bitmap image) {

            string[][] pixels = new string[image.Height][];

            for(int i = 0; i < image.Height; i++) {

                string[] row = new string[image.Width];

                for(int j = 0; j < image.Width; j++) {

                    row[j] = image.GetPixel(j, i).ToString();
                }

                pixels[i] = row;
            }

            return pixels;
        }
        /// <summary>
        /// align color mark on each row
        /// </summary>
        /// <param name="color">color mark</param>
        public void AlignRow(Color color) {

            string colorMark = "Color [A=" + color.A + ", R=" + color.R + ", G=" + color.G + ", B=" + color.B + "]";

            for(int i = 0; i < Pixels.Length; i++) {

                int colorIndex = new List<string>(Pixels[i]).FindIndex(pixel => pixel == colorMark);
                var newRow = new List<string>();
                newRow.AddRange(Pixels[i].Skip(colorIndex + 1));
                newRow.AddRange(Pixels[i].Take(colorIndex + 1));
                Pixels[i] = newRow.ToArray();
            }
        }
        /// <summary>
        /// draw on image
        /// </summary>
        /// <param name="image">image to draw on</param>
        public void DrawImage(Bitmap image) {

            for(int i = 0; i < Pixels.Length; i++) {

                for(int j = 0; j < Pixels[i].Length; j++) {
                    //ARGB values
                    int[] values = Regex.Matches(Pixels[i][j], @"\d+").Cast<Match>().Select(match => Int32.Parse(match.Value)).ToArray();
                    image.SetPixel(j, i, Color.FromArgb(values[0], values[1], values[2], values[3]));
                }
            }
        }
    }
}