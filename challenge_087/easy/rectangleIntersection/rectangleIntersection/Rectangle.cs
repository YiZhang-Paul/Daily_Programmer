using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rectangleIntersection {
    class Rectangle {

        public struct Coordinate {

            private int _x;
            private int _y;

            public int X { get { return _x; } }
            public int Y { get { return _y; } }

            public Coordinate(int x, int y) {
            
                _x = x;
                _y = y;
            }
        }

        public int Top { get; private set; }
        public int Left { get; private set; }
        public int Right { get; private set; }
        public int Bottom { get; private set; }

        public Rectangle() {
        }
        /// <param name="left">X-Coordinate of top left corner</param>
        /// <param name="top">Y-Coordinate of top left corner</param>
        /// <param name="right">X-Coordinate of bottom right corner</param>
        /// <param name="bottom">Y-Coordinate of bottom right corner</param>
        public Rectangle(int left, int top, int right, int bottom) {

            Top = top;
            Left = left;
            Right = right;
            Bottom = bottom;
        }
        /// <summary>
        /// find intersection of top/bottom side with another rectangle
        /// </summary>
        /// <param name="yCord">Y-Coordinate of top/bottom side</param>
        /// <param name="rectangle">target rectangle to check</param>
        /// <returns>intersections</returns>
        public List<Coordinate> GetHorizontalIntersects(int yCord, Rectangle rectangle) { 
        
            var intersections = new List<Coordinate>();

            if(yCord >= rectangle.Top && yCord <= rectangle.Bottom) {
            
                if(Left <= rectangle.Left && Right >= rectangle.Left) {

                    intersections.Add(new Coordinate(rectangle.Left, yCord));
                }

                if(Left <= rectangle.Right && Right >= rectangle.Right) {

                    intersections.Add(new Coordinate(rectangle.Right, yCord));
                }
            }

            return intersections;
        }
        /// <summary>
        /// find intersection of left/right side with another rectangle
        /// </summary>
        /// <param name="xCord">X-Coordinate of left/right side</param>
        /// <param name="rectangle">target rectangle to check</param>
        /// <returns>intersections</returns>
        public List<Coordinate> GetVerticalIntersects(int xCord, Rectangle rectangle) {

            var intersections = new List<Coordinate>();

            if(xCord >= rectangle.Left && xCord <= rectangle.Right) {
            
                if(Top <= rectangle.Top && Bottom >= rectangle.Top) {

                    intersections.Add(new Coordinate(xCord, rectangle.Top));
                }

                if(Top <= rectangle.Bottom && Bottom >= rectangle.Bottom) {
                
                    intersections.Add(new Coordinate(xCord, rectangle.Bottom));
                }
            }

            return intersections;
        }
        /// <summary>
        /// find intersection with another rectangle
        /// </summary>
        /// <param name="rectangle">target rectangle to check</param>
        /// <returns>intersections</returns>
        public List<Coordinate> GetIntersects(Rectangle rectangle) {

            var intersections = new List<Coordinate>();
            //check top/bottom side
            intersections.AddRange(GetHorizontalIntersects(Top, rectangle));
            intersections.AddRange(GetHorizontalIntersects(Bottom, rectangle));
            //check left/right side
            intersections.AddRange(GetVerticalIntersects(Left, rectangle));
            intersections.AddRange(GetVerticalIntersects(Right, rectangle));

            return intersections;
        }
    }
}