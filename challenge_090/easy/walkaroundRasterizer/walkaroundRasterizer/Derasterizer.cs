using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;

namespace walkaroundRasterizer {
    class Derasterizer {
        /// <summary>
        /// check if color on a pixel is same as given color
        /// </summary>
        /// <param name="image">bitmap representation of image</param>
        /// <param name="xCord">X-Coordinate on image</param>
        /// <param name="yCord">Y-Coordinate on image</param>
        /// <param name="color">color to compare with</param>
        /// <returns>color on pixel is same as/different from given color</returns>
        public bool IsColor(Bitmap image, int xCord, int yCord, Color color) {

            return image.GetPixel(xCord, yCord).ToArgb() == color.ToArgb();
        }
        /// <summary>
        /// retrieve all colored grids on image
        /// </summary>
        /// <param name="image">bitmap representation of image</param>
        /// <param name="row">total rows on grid</param>
        /// <param name="column">total columns on grid</param>
        /// <returns>all colored grids</returns>
        public List<Grid> GetColorGrids(Bitmap image, int row, int column) {

            int gridWidth = image.Width / row;
            var colorGrids = new List<Grid>();

            for(int i = 0; i < row; i++) {

                for(int j = 0; j < column; j++) {

                    if(IsColor(image, i * gridWidth, j * gridWidth, Color.Gray)) {

                        colorGrids.Add(new Grid(i, j));
                    }
                }
            }

            return colorGrids;
        }
        /// <summary>
        /// get distance between two grids
        /// </summary>
        /// <param name="grid1">grid 1</param>
        /// <param name="grid2">grid 2</param>
        /// <returns>distance between two grids</returns>
        public int GetDistance(Grid grid1, Grid grid2) {

            return Math.Abs(grid1.Row - grid2.Row) + Math.Abs(grid1.Column - grid2.Column);
        }
        /// <summary>
        /// retrieve nearest grid from current grid
        /// </summary>
        /// <param name="curGrid">current grid</param>
        /// <param name="toVisit">all grids to visit</param>
        /// <returns>nearest grid</returns>
        public Grid NearestGrid(Grid curGrid, List<Grid> toVisit) {

            return toVisit.OrderBy(grid => GetDistance(curGrid, grid)).First();
        }
        /// <summary>
        /// get path from coordinate (0, 0) to visit all grids specified
        /// </summary>
        /// <param name="toVisit">all grids to visit</param>
        /// <returns>path to visit all grids</returns>
        public List<Grid> GetPath(List<Grid> toVisit) {

            var path = new List<Grid> { new Grid(0, 0) };

            while(toVisit.Count > 0) {

                var curGrid = NearestGrid(path.Last(), toVisit);
                toVisit.Remove(curGrid);
                path.Add(curGrid);
            }

            return path;
        }
        /// <summary>
        /// generate route instructions from start grid to end grid
        /// </summary>
        /// <param name="start">start grid</param>
        /// <param name="end">end grid</param>
        /// <returns>route instruction</returns>
        public string GetRouteInstruction(Grid start, Grid end) {

            var route = new StringBuilder();
            //move horizontally
            for(int i = 0; i < Math.Abs(start.Row - end.Row); i++) {

                route.Append(start.Row <= end.Row ? "E" : "W");
            }
            //move vertically
            for(int i = 0; i < Math.Abs(start.Column - end.Column); i++) {

                route.Append(start.Column <= end.Column ? "S" : "N");
            }

            return route.ToString();
        }
        /// <summary>
        /// derasterize an image into walkaround resterizer format
        /// </summary>
        /// <param name="name">name of image to derasterize</param>
        /// <param name="row">total rows on the grid</param>
        /// <param name="column">total columns on the grid</param>
        /// <returns>walkaround rasterizer format</returns>
        public string Derasterize(string name, int row, int column) {

            var instructions = new StringBuilder();

            using(var image = new Bitmap(name)) {

                var path = GetPath(GetColorGrids(image, row, column));

                for(int i = 1; i < path.Count; i++) {

                    instructions.Append(GetRouteInstruction(path[i - 1], path[i]) + "P");
                }
            }

            return instructions.ToString();
        }
    }
}