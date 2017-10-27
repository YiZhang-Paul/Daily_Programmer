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

                AlignRows(image, color);
                image.Save(output);
            }
        }
        /// <summary>
        /// retrieve color marker index on given row
        /// </summary>
        /// <param name="image">bitmap representation of image</param>
        /// <param name="row">target row</param>
        /// <param name="color">marker color</param>
        /// <returns></returns>
        public int GetRowMarkerIndex(Bitmap image, int row, Color color) {

            int markerArgb = color.ToArgb();

            for(int i = 0; i < image.Width; i++) {

                if(image.GetPixel(i, row).ToArgb() == markerArgb) {

                    return i;
                }
            }

            return -1;
        }
        /// <summary>
        /// unscramble image by rows 
        /// </summary>
        /// <param name="image">image to draw on</param>
        /// <param name="color">marker color</param>
        public void AlignRows(Bitmap image, Color color) {

            for(int i = 0; i < image.Height; i++) {

                int markerIndex = GetRowMarkerIndex(image, i, color);
                var pixels = new List<int>();

                for(int j = markerIndex + 1; j < image.Width; j++) {

                    pixels.Add(image.GetPixel(j, i).ToArgb());
                }

                for(int j = 0; j <= markerIndex; j++) {

                    pixels.Add(image.GetPixel(j, i).ToArgb());
                }

                for(int j = 0; j < pixels.Count; j++) {

                    image.SetPixel(j, i, Color.FromArgb(pixels[j]));
                }
            }
        }
    }
}