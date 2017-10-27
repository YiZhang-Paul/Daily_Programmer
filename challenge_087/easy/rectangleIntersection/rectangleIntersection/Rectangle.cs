using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace rectangleIntersection {
    class Rectangle {

        public int Left { get; private set; }
        public int Top { get; private set; }
        public int Right { get; private set; }
        public int Bottom { get; private set; }

        public Rectangle() {
        }
        /// <param name="left">X-Coordinate of top left corner</param>
        /// <param name="top">Y-Coordinate of top left corner</param>
        /// <param name="right">X-Coordinate of bottom right corner</param>
        /// <param name="bottom">Y-Coordinate of bottom right corner</param>
        public Rectangle(int left, int top, int right, int bottom) {

            Left = left;
            Top = top;
            Right = right;
            Bottom = bottom;
        }
        /// <summary>
        /// check if current rectangle intersects with another rectangle
        /// </summary>
        /// <param name="target">target rectangle</param>
        /// <returns>test result</returns>
        public bool HasIntersect(Rectangle target) { 
        
            if(Right <= target.Left || Left >= target.Right || Top >= target.Bottom || Bottom <= target.Top) {

                return false;
            }

            if(Left < target.Left && Top < target.Top && Right > target.Right && Bottom > target.Bottom) {

                return false;
            }

            if(Left > target.Left && Top > target.Top && Right < target.Right && Bottom < target.Bottom) {

                return false;
            }

            return true;
        }
    }
}