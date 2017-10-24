using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace walkaroundRasterizer {
    class Rasterizer {

        public int CurrentRow { get; private set; }
        public int CurrentColumn { get; private set; }
        public int PixelWidth { get; private set; }

        public int XCord { get { return CurrentColumn * PixelWidth; } }
        public int YCord { get { return CurrentRow * PixelWidth; } }

        public Rasterizer() {

            Initialize();
        }
        /// <summary>
        /// initialize/reset properties
        /// </summary>
        public void Initialize() {

            CurrentRow = 0;
            CurrentColumn = 0;
            PixelWidth = 100;
        }
        /// <summary>
        /// move on grid
        /// </summary>
        /// <param name="direction">moving direction</param>
        public void Move(char direction) {

            switch(direction) {

                case 'n' : case 's' :

                    CurrentRow += direction == 'n' ? -1 : 1;
                    break;

                case 'w' : case 'e' :

                    CurrentColumn += direction == 'w' ? -1 : 1;
                    break;
            }
        }
        /// <summary>
        /// create black(gray) and white image base on walkaround rasterizer format
        /// </summary>
        /// <param name="row">total rows on grid</param>
        /// <param name="column">total columns on grid</param>
        /// <param name="instructions">walkaround rasterizer instructions</param>
        /// <param name="output">output file name</param>
        public void Rasterize(int row, int column, string instructions, string output = "testRasterizer.png") { 
        
            using(var image = new Bitmap(row * PixelWidth, column * PixelWidth)) {

                using(var drawer = Graphics.FromImage(image)) {
                    //fill entire background with white
                    drawer.Clear(Color.White);
                    var brush = new SolidBrush(Color.Gray);

                    foreach(char instruction in instructions.ToLower()) {

                        if(instruction == 'p') {
                            //draw on bitmap
                            drawer.FillRectangle(brush, XCord, YCord, PixelWidth, PixelWidth);
                            continue;
                        }
                        //move on grid
                        Move(instruction);
                    }
                }

                image.Save(output);
                Initialize();
            }                    
        }
    }
}