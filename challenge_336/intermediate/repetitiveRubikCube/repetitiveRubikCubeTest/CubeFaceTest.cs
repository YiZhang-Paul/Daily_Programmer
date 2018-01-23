using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RepetitiveRubikCubeClassLibrary;

namespace repetitiveRubikCubeTest {
    [TestClass]
    public class CubeFaceTest {

        CubeFace cubeFace;

        [TestInitialize]
        public void Setup() {

            cubeFace = new CubeFace('r');
        }

        [TestMethod]
        public void OnDefaultState() {

            Assert.IsTrue(cubeFace.OnDefault);
        }

        [TestMethod]
        public void TotalGridsOnCubeFace() {

            int rows = cubeFace.Content.Length;
            int columns = cubeFace.Content[0].Length;

            Assert.AreEqual(9, rows * columns);
        }

        [TestMethod]
        public void FillColor() {

            bool result = cubeFace.Content.All(row => {

                return row.All(column => {

                    return column == cubeFace.Color;
                });
            });

            Assert.IsTrue(result);
        }

        [ExpectedException(typeof(IndexOutOfRangeException), 
         "Row Does not Exist.")]
        [TestMethod]
        public void GetInvalidRow() {

            cubeFace.GetRow(5);
        }

        [TestMethod]
        public void GetValidRow() {

            string row = string.Join("", cubeFace.GetRow(2));

            Assert.AreEqual("".PadLeft(3, cubeFace.Color), row);
        }

        [ExpectedException(typeof(IndexOutOfRangeException),
         "Column Does not Exist.")]
        [TestMethod]
        public void GetInvalidColumn() {

            cubeFace.GetColumn(5);
        }

        [TestMethod]
        public void GetValidColumn() {

            string column = string.Join("", cubeFace.GetColumn(2));

            Assert.AreEqual("".PadLeft(3, cubeFace.Color), column);
        }

        [ExpectedException(typeof(IndexOutOfRangeException),
         "Row Does not Exist.")]
        [TestMethod]
        public void ChangeInvalidRow() {

            cubeFace.ChangeRow(5, new char[] { 'b', 'b', 'b' });
        }

        [ExpectedException(typeof(ArgumentException),
         "Row Length Cannot be Changed.")]
        [TestMethod]
        public void ChangeRowWithShorterRow() {

            cubeFace.ChangeRow(1, new char[] { 'b', 'b' });
        }

        [ExpectedException(typeof(ArgumentException),
         "Row Length Cannot be Changed.")]
        [TestMethod]
        public void ChangeRowWithLongerRow() {

            cubeFace.ChangeRow(1, new char[] { 'b', 'b', 'b', 'b' });
        }

        [TestMethod]
        public void ChangeValidRow() {

            cubeFace.ChangeRow(1, new char[] { 'b', 'b', 'b' });

            string firstRow = string.Join("", cubeFace.GetRow(0));
            string secondRow = string.Join("", cubeFace.GetRow(1));
            string thirdRow = string.Join("", cubeFace.GetRow(2));

            Assert.AreEqual("".PadLeft(3, cubeFace.Color), firstRow);
            Assert.AreEqual("bbb", secondRow);
            Assert.AreEqual("".PadLeft(3, cubeFace.Color), thirdRow);
        }

        [ExpectedException(typeof(IndexOutOfRangeException),
         "Column Does not Exist.")]
        [TestMethod]
        public void ChangeInvalidColumn() {

            cubeFace.ChangeColumn(5, new char[] { 'b', 'b', 'b' });
        }

        [ExpectedException(typeof(ArgumentException),
         "Column Length Cannot be Changed.")]
        [TestMethod]
        public void ChangeColumnWithShorterColumn() {

            cubeFace.ChangeColumn(1, new char[] { 'b', 'b' });
        }

        [ExpectedException(typeof(ArgumentException),
         "Column Length Cannot be Changed.")]
        [TestMethod]
        public void ChangeColumnWithLongerColumn() {

            cubeFace.ChangeColumn(1, new char[] { 'b', 'b', 'b', 'b' });
        }

        [TestMethod]
        public void ChangeValidColumn() {

            cubeFace.ChangeColumn(1, new char[] { 'b', 'b', 'b' });

            string firstColumn = string.Join("", cubeFace.GetColumn(0));
            string secondColumn = string.Join("", cubeFace.GetColumn(1));
            string thirdColumn = string.Join("", cubeFace.GetColumn(2));

            Assert.AreEqual("".PadLeft(3, cubeFace.Color), firstColumn);
            Assert.AreEqual("bbb", secondColumn);
            Assert.AreEqual("".PadLeft(3, cubeFace.Color), thirdColumn);
        }

        [TestMethod]
        public void RotateClockwise() {

            char[][] content = {
            
                new char[] { 'r', 'b', 'r' },
                new char[] { 'r', 'b', 'r' },
                new char[] { 'r', 'b', 'r' }
            };

            cubeFace = new CubeFace(content);
            cubeFace.RotateClockwise();

            string firstRow = string.Join("", cubeFace.GetRow(0));
            string secondRow = string.Join("", cubeFace.GetRow(1));
            string thirdRow = string.Join("", cubeFace.GetRow(2));
            string firstColumn = string.Join("", cubeFace.GetColumn(0));
            string secondColumn = string.Join("", cubeFace.GetColumn(1));
            string thirdColumn = string.Join("", cubeFace.GetColumn(2));

            Assert.AreEqual("rrr", firstRow);
            Assert.AreEqual("bbb", secondRow);
            Assert.AreEqual("rrr", thirdRow);
            Assert.AreEqual("rbr", firstColumn);
            Assert.AreEqual("rbr", secondColumn);
            Assert.AreEqual("rbr", thirdColumn);
        }
    }
}