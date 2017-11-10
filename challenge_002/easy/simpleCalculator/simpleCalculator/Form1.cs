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
            ShowNumber();
        }
        /// <summary>
        /// display current number on calculator
        /// </summary>
        private void ShowNumber() {

            numberDisplay.Text = _calculator.NumberBuffer.Show();
        }
        /// <summary>
        /// display current equation
        /// </summary>
        public void ShowEquation() {

            expressionDisplay.Text = _calculator.Equation.Show();
        }
        /// <summary>
        /// display current calculation result
        /// </summary>
        public void ShowResult() {

            numberDisplay.Text = _calculator.Result;
        }
        /// <summary>
        /// enter number input to calculator
        /// </summary>
        public void EnterNumber(string input) {

            _calculator.AddBuffer(input);
            ShowNumber();
        }
        /// <summary>
        /// enter operation for execution to calculator
        /// </summary>
        public void EnterOperation(string operation) {

            _calculator.Process(operation);
            ShowResult();
            ShowEquation();
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

        private void btnClearAll_Click(object sender, EventArgs e) {

            _calculator.Reset();
            ShowNumber();
            ShowEquation();
        }

        private void btnDelete_Click(object sender, EventArgs e) {

            if(!_calculator.Locked && _calculator.NumberBuffer.Show() != "0") {
            
                _calculator.NumberBuffer.RemoveLast();
                ShowNumber();
            }
        }

        private void btnClearLast_Click(object sender, EventArgs e) {

            _calculator.NumberBuffer.Clear();
            ShowNumber();
        }

        private void btnDot_Click(object sender, EventArgs e) {

            EnterNumber(".");
        }

        private void btnZero_Click(object sender, EventArgs e) {

            EnterNumber("0");
        }

        private void btnOne_Click(object sender, EventArgs e) {

            EnterNumber("1");
        }

        private void btnTwo_Click(object sender, EventArgs e) {

            EnterNumber("2");
        }

        private void btnThree_Click(object sender, EventArgs e) {

            EnterNumber("3");
        }

        private void btnFour_Click(object sender, EventArgs e) {

            EnterNumber("4");
        }

        private void btnFive_Click(object sender, EventArgs e) {

            EnterNumber("5");
        }

        private void btnSix_Click(object sender, EventArgs e) {

            EnterNumber("6");
        }

        private void btnSeven_Click(object sender, EventArgs e) {

            EnterNumber("7");
        }

        private void btnEight_Click(object sender, EventArgs e) {

            EnterNumber("8");
        }

        private void btnNine_Click(object sender, EventArgs e) {

            EnterNumber("9");
        }

        private void btnPlus_Click(object sender, EventArgs e) {

            EnterOperation("+");
        }

        private void btnMinus_Click(object sender, EventArgs e) {

            EnterOperation("-");
        }

        private void btnEqual_Click(object sender, EventArgs e) {

            EnterOperation("=");
        }
    }
}