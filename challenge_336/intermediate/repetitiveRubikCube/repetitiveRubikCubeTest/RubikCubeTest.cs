using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using RepetitiveRubikCubeClassLibrary;

namespace repetitiveRubikCubeTest {
    [TestClass]
    public class RubikCubeTest {

        RubikCube rubikCube;

        [TestInitialize]
        public void Setup() {

            rubikCube = new RubikCube();
        }

        [TestMethod]
        public void OnDefaultState() {

            Assert.IsTrue(rubikCube.OnDefault);
        }

        [TestMethod]
        public void CorrectFaces() {

            var faces = rubikCube.Faces.Select(pair => pair.Value);
            var colors = faces.Select(face => face.Color);

            Assert.AreEqual(6, faces.Count());
            Assert.AreEqual(6, new HashSet<char>(colors).Count);
        }

        [TestMethod]
        public void RotateLeftClockwise() {

            rubikCube.RotateLeftClockwise();

            char[] topColumn = rubikCube.Faces["top"].GetColumn(0);
            char[] frontColumn = rubikCube.Faces["front"].GetColumn(0);
            char[] bottomColumn = rubikCube.Faces["bottom"].GetColumn(0);
            char[] backColumn = rubikCube.Faces["back"].GetColumn(0);

            Assert.AreEqual("ggg", string.Join("", topColumn));
            Assert.AreEqual("bbb", string.Join("", frontColumn));
            Assert.AreEqual("rrr", string.Join("", bottomColumn));
            Assert.AreEqual("www", string.Join("", backColumn));
        }

        [TestMethod]
        public void RotateLeftCounterClockwise() {

            rubikCube.RotateLeftCounterClockwise();

            char[] topColumn = rubikCube.Faces["top"].GetColumn(0);
            char[] frontColumn = rubikCube.Faces["front"].GetColumn(0);
            char[] bottomColumn = rubikCube.Faces["bottom"].GetColumn(0);
            char[] backColumn = rubikCube.Faces["back"].GetColumn(0);

            Assert.AreEqual("rrr", string.Join("", topColumn));
            Assert.AreEqual("www", string.Join("", frontColumn));
            Assert.AreEqual("ggg", string.Join("", bottomColumn));
            Assert.AreEqual("bbb", string.Join("", backColumn));
        }

        [TestMethod]
        public void RotateRightClockwise() {

            rubikCube.RotateRightClockwise();

            char[] topColumn = rubikCube.Faces["top"].GetColumn(2);
            char[] frontColumn = rubikCube.Faces["front"].GetColumn(2);
            char[] bottomColumn = rubikCube.Faces["bottom"].GetColumn(2);
            char[] backColumn = rubikCube.Faces["back"].GetColumn(2);

            Assert.AreEqual("rrr", string.Join("", topColumn));
            Assert.AreEqual("www", string.Join("", frontColumn));
            Assert.AreEqual("ggg", string.Join("", bottomColumn));
            Assert.AreEqual("bbb", string.Join("", backColumn));
        }

        [TestMethod]
        public void RotateRightCounterClockwise() {

            rubikCube.RotateRightCounterClockwise();

            char[] topColumn = rubikCube.Faces["top"].GetColumn(2);
            char[] frontColumn = rubikCube.Faces["front"].GetColumn(2);
            char[] bottomColumn = rubikCube.Faces["bottom"].GetColumn(2);
            char[] backColumn = rubikCube.Faces["back"].GetColumn(2);

            Assert.AreEqual("ggg", string.Join("", topColumn));
            Assert.AreEqual("bbb", string.Join("", frontColumn));
            Assert.AreEqual("rrr", string.Join("", bottomColumn));
            Assert.AreEqual("www", string.Join("", backColumn));
        }

        [TestMethod]
        public void RotateFrontClockwise() {

            rubikCube.RotateFrontClockwise();

            char[] topRow = rubikCube.Faces["top"].GetRow(2);
            char[] rightColumn = rubikCube.Faces["right"].GetColumn(0);
            char[] bottomRow = rubikCube.Faces["bottom"].GetRow(0);
            char[] leftColumn = rubikCube.Faces["left"].GetColumn(2);

            Assert.AreEqual("ooo", string.Join("", topRow));
            Assert.AreEqual("bbb", string.Join("", rightColumn));
            Assert.AreEqual("yyy", string.Join("", bottomRow));
            Assert.AreEqual("www", string.Join("", leftColumn));
        }

        [TestMethod]
        public void RotateFrontCounterClockwise() {

            rubikCube.RotateFrontCounterClockwise();

            char[] topRow = rubikCube.Faces["top"].GetRow(2);
            char[] rightColumn = rubikCube.Faces["right"].GetColumn(0);
            char[] bottomRow = rubikCube.Faces["bottom"].GetRow(0);
            char[] leftColumn = rubikCube.Faces["left"].GetColumn(2);

            Assert.AreEqual("yyy", string.Join("", topRow));
            Assert.AreEqual("www", string.Join("", rightColumn));
            Assert.AreEqual("ooo", string.Join("", bottomRow));
            Assert.AreEqual("bbb", string.Join("", leftColumn));
        }

        [TestMethod]
        public void RotateBackClockwise() {

            rubikCube.RotateBackClockwise();

            char[] bottomRow = rubikCube.Faces["bottom"].GetRow(2);
            char[] rightColumn = rubikCube.Faces["right"].GetColumn(2);
            char[] topRow = rubikCube.Faces["top"].GetRow(0);
            char[] leftColumn = rubikCube.Faces["left"].GetColumn(0);

            Assert.AreEqual("ooo", string.Join("", bottomRow));
            Assert.AreEqual("www", string.Join("", rightColumn));
            Assert.AreEqual("yyy", string.Join("", topRow));
            Assert.AreEqual("bbb", string.Join("", leftColumn));
        }

        [TestMethod]
        public void RotateBackCounterClockwise() {

            rubikCube.RotateBackCounterClockwise();

            char[] bottomRow = rubikCube.Faces["bottom"].GetRow(2);
            char[] rightColumn = rubikCube.Faces["right"].GetColumn(2);
            char[] topRow = rubikCube.Faces["top"].GetRow(0);
            char[] leftColumn = rubikCube.Faces["left"].GetColumn(0);

            Assert.AreEqual("yyy", string.Join("", bottomRow));
            Assert.AreEqual("bbb", string.Join("", rightColumn));
            Assert.AreEqual("ooo", string.Join("", topRow));
            Assert.AreEqual("www", string.Join("", leftColumn));
        }

        [TestMethod]
        public void RotateTopClockwise() {

            rubikCube.RotateTopClockwise();

            char[] backRow = rubikCube.Faces["back"].GetRow(2);
            char[] rightRow = rubikCube.Faces["right"].GetRow(0);
            char[] frontRow = rubikCube.Faces["front"].GetRow(0);
            char[] leftRow = rubikCube.Faces["left"].GetRow(0);

            Assert.AreEqual("ooo", string.Join("", backRow));
            Assert.AreEqual("ggg", string.Join("", rightRow));
            Assert.AreEqual("yyy", string.Join("", frontRow));
            Assert.AreEqual("rrr", string.Join("", leftRow));
        }

        [TestMethod]
        public void RotateTopCounterClockwise() {

            rubikCube.RotateTopCounterClockwise();

            char[] backRow = rubikCube.Faces["back"].GetRow(2);
            char[] rightRow = rubikCube.Faces["right"].GetRow(0);
            char[] frontRow = rubikCube.Faces["front"].GetRow(0);
            char[] leftRow = rubikCube.Faces["left"].GetRow(0);

            Assert.AreEqual("yyy", string.Join("", backRow));
            Assert.AreEqual("rrr", string.Join("", rightRow));
            Assert.AreEqual("ooo", string.Join("", frontRow));
            Assert.AreEqual("ggg", string.Join("", leftRow));
        }

        [TestMethod]
        public void RotateBottomClockwise() {

            rubikCube.RotateBottomClockwise();

            char[] frontRow = rubikCube.Faces["front"].GetRow(2);
            char[] rightRow = rubikCube.Faces["right"].GetRow(2);
            char[] backRow = rubikCube.Faces["back"].GetRow(0);
            char[] leftRow = rubikCube.Faces["left"].GetRow(2);

            Assert.AreEqual("ooo", string.Join("", frontRow));
            Assert.AreEqual("rrr", string.Join("", rightRow));
            Assert.AreEqual("yyy", string.Join("", backRow));
            Assert.AreEqual("ggg", string.Join("", leftRow));
        }

        [TestMethod]
        public void RotateBottomCounterClockwise() {

            rubikCube.RotateBottomCounterClockwise();

            char[] frontRow = rubikCube.Faces["front"].GetRow(2);
            char[] rightRow = rubikCube.Faces["right"].GetRow(2);
            char[] backRow = rubikCube.Faces["back"].GetRow(0);
            char[] leftRow = rubikCube.Faces["left"].GetRow(2);

            Assert.AreEqual("yyy", string.Join("", frontRow));
            Assert.AreEqual("ggg", string.Join("", rightRow));
            Assert.AreEqual("ooo", string.Join("", backRow));
            Assert.AreEqual("rrr", string.Join("", leftRow));
        }
    }
}