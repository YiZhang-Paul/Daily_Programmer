using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepetitiveRubikCubeClassLibrary {
    public interface ICubeFace {

        char Color { get; }
        char[][] Content { get; }
        bool OnDefault { get; }

        char[] GetRow(int row);
        char[] GetColumn(int column);
        void ChangeRow(int row, char[] changes);
        void ChangeColumn(int column, char[] changes);
        void RotateClockwise();
    }
}