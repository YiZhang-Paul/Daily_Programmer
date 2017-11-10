using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace simpleCalculator {
    public partial class Calculator : Form {

        private Point _mousePosition;
        private SimpleCalculator _calculator = new SimpleCalculator();

        public Calculator() {
            
            InitializeComponent();
            DisplayNumber();
        }
        /// <summary>
        /// display current number on calculator
        /// </summary>
        private void DisplayNumber() {

            numberDisplay.Text = _calculator.InputBuffer.ToString();
        }
        /// <summary>
        /// enter user input to calculator
        /// </summary>
        public void EnterInput(string input) {

            _calculator.AppendBuffer(input);
            DisplayNumber();
        }
        /// <summary>
        /// retrieve current mouse position
        /// </summary>
        private void GetMousePosition(object sender, MouseEventArgs e) {

            _mousePosition = e.Location;
        }
        /// <summary>
        /// press mouse button and drag mouse
        /// </summary>
        private void DragMouse(object sender, MouseEventArgs e) { 
        
            if(e.Button == MouseButtons.Left) {

                this.Left += e.X - _mousePosition.X;
                this.Top += e.Y - _mousePosition.Y;
            }
        }

        private void btnMinimize_Click(object sender, EventArgs e) {

            this.WindowState = FormWindowState.Minimized;
        }

        private void btnMaxNormal_Click(object sender, EventArgs e) {

            this.WindowState = this.WindowState == FormWindowState.Maximized ? FormWindowState.Normal : FormWindowState.Maximized; 
        }

        private void btnExit_Click(object sender, EventArgs e) {

            Application.Exit();
        }

        private void btnDot_Click(object sender, EventArgs e) {

            EnterInput(".");
        }

        private void btnZero_Click(object sender, EventArgs e) {

            EnterInput("0");
        }

        private void btnOne_Click(object sender, EventArgs e) {

            EnterInput("1");
        }

        private void btnTwo_Click(object sender, EventArgs e) {

            EnterInput("2");
        }

        private void btnThree_Click(object sender, EventArgs e) {

            EnterInput("3");
        }

        private void btnFour_Click(object sender, EventArgs e) {

            EnterInput("4");
        }

        private void btnFive_Click(object sender, EventArgs e) {

            EnterInput("5");
        }

        private void btnSix_Click(object sender, EventArgs e) {

            EnterInput("6");
        }

        private void btnSeven_Click(object sender, EventArgs e) {

            EnterInput("7");
        }

        private void btnEight_Click(object sender, EventArgs e) {

            EnterInput("8");
        }

        private void btnNine_Click(object sender, EventArgs e) {

            EnterInput("9");
        }
    }
}