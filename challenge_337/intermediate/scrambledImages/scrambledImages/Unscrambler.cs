using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace scrambledImages {
    class Unscrambler {

        public List<Color[]> Pixels { get; private set; }
        /// <summary>
        /// unscramble an image and output result
        /// </summary>
        /// <param name="input">input image file name</param>
        /// <param name="output">output image file name</param>
        /// <param name="vertical">true when image is vertically scrambled as well</param>
        public void Unscramble(string input, string output, bool vertical = false) { 
        
            using(var image = new Bitmap(input)) {

                ReadPixels(image);
                AlignRows();

                if(vertical) {

                    AlignColumns();
                }
                //draw and save unscrambled image
                DrawImage(image);
                image.Save(output);
            }
        }
        /// <summary>
        /// read pixels on an image
        /// </summary>
        /// <param name="image"></param>
        public void ReadPixels(Bitmap image) { 
        
            Pixels = new List<Color[]>();

            for(int i = 0; i < image.Height; i++) {

                var row = new Color[image.Width];

                for(int j = 0; j < image.Width; j++) {

                    row[j] = image.GetPixel(j, i);
                }

                Pixels.Add(row);
            }
        }
        /// <summary>
        /// re-arrange a given row on image
        /// </summary>
        /// <param name="row">target row</param>
        /// <param name="markerIndex">index of marker pixel</param>
        /// <returns>re-arranged row</returns>
        public Color[] ArrangeRow(int row, int markerIndex) { 
        
            var arranged = new Color[Pixels[row].Length];
            //shift section after marker pixel to the front
            Array.Copy(Pixels[row], markerIndex + 1, arranged, 0, Pixels[row].Length - markerIndex - 1);
            Array.Copy(Pixels[row], 0, arranged, Pixels[row].Length - markerIndex - 1, markerIndex + 1);

            return arranged;
        }
        /// <summary>
        /// retrieve marker pixel index on given row
        /// </summary>
        /// <param name="row">target row</param>
        /// <returns>marker index</returns>
        public int GetMarkerIndex(int row) {

            for(int i = Pixels[row].Length - 1; i >= 0; i--) {

                if(Pixels[row][i].R + Pixels[row][i].G == 255) {

                    return i;
                }
            }

            return -1;
        }
        /// <summary>
        /// align each row on image using marker pixels
        /// </summary>
        public void AlignRows() {

            for(int i = 0; i < Pixels.Count; i++) {

                int markerIndex = GetMarkerIndex(i);
                Pixels[i] = ArrangeRow(i, markerIndex);
            }
        }
        /// <summary>
        /// align each column on image using gradient colors
        /// </summary>
        public void AlignColumns() {

            Pixels = Pixels.OrderByDescending(row => row.Last().G).ToList();
        }
        /// <summary>
        /// draw output on image
        /// </summary>
        /// <param name="image">image to draw on</param>
        public void DrawImage(Bitmap image) {

            for(int i = 0; i < Pixels.Count; i++) {

                for(int j = 0; j < Pixels[i].Length; j++) {

                    image.SetPixel(j, i, Pixels[i][j]);
                }
            }
        }
    }
}