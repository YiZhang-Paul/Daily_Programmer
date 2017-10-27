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
        /// show rectangle coordinates in string format
        /// </summary>
        /// <param name="rectangle">rectangle to display</param>
        /// <returns>rectangle coordinates in string format</returns>
        public static string ShowRectangle(Rectangle rectangle) {

            if(rectangle == null) {

                return "No Rectangle";
            }

            int[] coordinates = new int[] { 
                rectangle.Left, rectangle.Top, rectangle.Right, rectangle.Bottom 
            };

            return "Rect(" + string.Join(", ", coordinates) + ")";
        }
        /// <summary>
        /// check if a rectangle is contained by target rectangle
        /// </summary>
        /// <param name="rectangle">current rectangle</param>
        /// <param name="target">target rectangle</param>
        /// <returns>test result</returns>
        public bool IsContained(Rectangle rectangle, Rectangle target) { 
        
            if(rectangle.Left <= target.Left && rectangle.Top <= target.Top && 
               rectangle.Right >= target.Right && rectangle.Bottom >= target.Bottom) {

                return true;
            }

            return false;
        }
        /// <summary>
        /// check if current rectangle intersects with another rectangle
        /// </summary>
        /// <param name="target">target rectangle</param>
        /// <returns>test result</returns>
        public bool IsIntersect(Rectangle target) { 
        
            if(Right <= target.Left || Left >= target.Right || 
               Top >= target.Bottom || Bottom <= target.Top) {

                return false;
            }

            return !IsContained(this, target) && !IsContained(target, this);
        }
        /// <summary>
        /// retrieve overlapping rectangle with another rectangle
        /// </summary>
        /// <param name="target">target rectangle</param>
        /// <returns>overlapping rectangle</returns>
        public Rectangle GetOverlapRectangle(Rectangle target) {

            if(!IsIntersect(target)) {

                return null;
            }

            return new Rectangle(
                Math.Max(Left, target.Left),
                Math.Max(Top, target.Top),
                Math.Min(Right, target.Right),
                Math.Min(Bottom, target.Bottom)
            );
        }
    }
}