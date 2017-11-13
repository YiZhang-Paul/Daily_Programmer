using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Text.RegularExpressions;

namespace simpleCalculator {
    public partial class Calculator : Form {

        private Point MouseXY { get; set; }
        private Resizer Resizer { get; set; }
        private Formatter Formatter { get; set; }
        private ScientificCalculator ScientificCalculator { get; set; }

        public Calculator() {
            
            InitializeComponent();
            Resizer = new Resizer(this);
            Formatter = new Formatter();
            LoadCalculators();
            ShowNumber();
        }
        /// <summary>
        /// load all calculators
        /// </summary>
        private void LoadCalculators() {

            ScientificCalculator = new ScientificCalculator();
        }
        /// <summary>
        /// display current number input/result on calculator
        /// </summary>
        private void ShowNumber() {

            if(!ScientificCalculator.Input.IsEmpty) {
            
                numberDisplay.Text = ScientificCalculator.Input.Formatted;
            }
            else {

                numberDisplay.Text = Formatter.Format(ScientificCalculator.RunningTotal);
            }
        }
        /// <summary>
        /// display current equation
        /// </summary>
        private void ShowEquation() {

            equationDisplay.Text = string.Join(" ", ScientificCalculator.Numbers) + " " + string.Join(" ", ScientificCalculator.Operations.Select(operation => ScientificCalculator.Equation.GetSymbol(operation)));
            //equationDisplay.Text = ScientificCalculator.Equation.Content;
        }
        /// <summary>
        /// display error message
        /// </summary>
        private void ShowError(string message = "Invalid Input") {

            numberDisplay.Text = message;
        }
        /// <summary>
        /// add user input tp calculator
        /// </summary>
        private void Input(string input) {

            try {

                if(Regex.IsMatch(input, "^[0-9.]$")) {

                    ScientificCalculator.AddInput(input);
                }
                else if(input == "=") {
                
                    ScientificCalculator.GetTotal();
                }
                else {

                    ScientificCalculator.GetRunningTotal(input);
                }

                ShowNumber();
                ShowEquation();
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }   
            catch(Exception) {

                ShowError();
            }
        }
        /// <summary>
        /// retrieve mouse pointer position
        /// </summary>
        private void GetMouseXY(object sender, MouseEventArgs e) {

            MouseXY = e.Location;
        }
        /// <summary>
        /// drag mouse while left button is pressed down
        /// </summary>
        private void Drag(object sender, MouseEventArgs e) { 
        
            if(e.Button == MouseButtons.Left) {

                this.Left += e.X - MouseXY.X;
                this.Top += e.Y - MouseXY.Y;
            }
        }
        /// <summary>
        /// minimize application window
        /// </summary>
        private void Minimize(object sender, EventArgs e) {

            this.WindowState = FormWindowState.Minimized;
        }
        /// <summary>
        /// toggle application window size
        /// </summary>
        private void ToggleSize(object sender, EventArgs e) {

            this.WindowState = this.WindowState == FormWindowState.Maximized ? FormWindowState.Normal : FormWindowState.Maximized;
        }
        /// <summary>
        /// exit application
        /// </summary>
        private void Exit(object sender, EventArgs e) {

            Application.Exit();
        }
        /// <summary>
        /// clear all inputs on calculator
        /// </summary>
        private void ClearAll(object sender, EventArgs e) {

            ScientificCalculator.Reset();
            ShowNumber();
            ShowEquation();
        }
        /// <summary>
        /// delete last input
        /// </summary>
        private void ClearLastInput(object sender, EventArgs e) {

            if(!ScientificCalculator.Locked && !ScientificCalculator.Input.IsEmpty) {
            
                ScientificCalculator.Input.RemoveLast();
                ShowNumber();
            }
        }
        /// <summary>
        /// clear last entry
        /// </summary>
        private void ClearLastEntry(object sender, EventArgs e) {

            ScientificCalculator.Input.Set("0");
            ShowNumber();
        }

        private void btnDot_Click(object sender, EventArgs e) {

            Input(".");
        }

        private void btnZero_Click(object sender, EventArgs e) {

            Input("0");
        }

        private void btnOne_Click(object sender, EventArgs e) {

            Input("1");
        }

        private void btnTwo_Click(object sender, EventArgs e) {

            Input("2");
        }

        private void btnThree_Click(object sender, EventArgs e) {

            Input("3");
        }

        private void btnFour_Click(object sender, EventArgs e) {

            Input("4");
        }

        private void btnFive_Click(object sender, EventArgs e) {

            Input("5");
        }

        private void btnSix_Click(object sender, EventArgs e) {

            Input("6");
        }

        private void btnSeven_Click(object sender, EventArgs e) {

            Input("7");
        }

        private void btnEight_Click(object sender, EventArgs e) {

            Input("8");
        }

        private void btnNine_Click(object sender, EventArgs e) {

            Input("9");
        }

        private void btnPlus_Click(object sender, EventArgs e) {

            Input("+");
        }

        private void btnMinus_Click(object sender, EventArgs e) {

            Input("-");
        }

        private void btnMultiply_Click(object sender, EventArgs e) {

            Input("*");
        }

        private void btnDivide_Click(object sender, EventArgs e) {

            Input("/");
        }

        private void btnEqual_Click(object sender, EventArgs e) {

            Input("=");
        }

        private void btnFactorial_Click(object sender, EventArgs e) {

            Input("!");
        }

        private void btnXSquare_Click(object sender, EventArgs e) {

            Input("x2");
        }

        private void btnXPowerY_Click(object sender, EventArgs e) {

            Input("^");
        }

        private void btnSine_Click(object sender, EventArgs e) {

            Input("sin");
        }

        private void btnCosine_Click(object sender, EventArgs e) {

            Input("cos");
        }

        private void btnTangent_Click(object sender, EventArgs e) {

            Input("tan");
        }

        private void btnSquareRoot_Click(object sender, EventArgs e) {

            Input("sqrt");
        }

        private void btnTenPowerX_Click(object sender, EventArgs e) {

            Input("10x");
        }

        private void btnLog_Click(object sender, EventArgs e) {

            Input("log10");
        }

        private void btnExponential_Click(object sender, EventArgs e) {

            Input("exp");
        }

        private void btnModulos_Click(object sender, EventArgs e) {

            Input("mod");
        }

        private void btnPI_Click(object sender, EventArgs e) {

            ScientificCalculator.LoadPI();
            ShowNumber();
        }

        private void btnNegate_Click(object sender, EventArgs e) {

            ScientificCalculator.Negate();
            ShowNumber();
        }

        private void ToggleExtension(object sender, EventArgs e) {

            this.advancedKeyPanel.Visible = !this.advancedKeyPanel.Visible;
        }
        /**
         * form visual effects
         */
        private void ButtonMouseEnter(object sender, EventArgs e) {

            var button = (Button)sender;
            button.FlatAppearance.BorderSize = 2;
            button.FlatAppearance.BorderColor = Color.FromArgb(75, 75, 75);
        }

        private void ButtonMouseLeave(object sender, EventArgs e) {

            var button = (Button)sender;
            button.FlatAppearance.BorderSize = 0;
        }

        protected override void WndProc(ref Message message) {

            base.WndProc(ref message);

            if(message.Msg == 0x84) { // WM_NCHITTEST

                var cursor = this.PointToClient(Cursor.Position);

                if(Resizer.TopLeft.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htTopLeft;
                }
                else if(Resizer.TopRight.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htTopRight;
                }
                else if(Resizer.BottomLeft.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htBottomLeft;
                }
                else if(Resizer.BottomRight.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htBottomRight;
                }
                else if(Resizer.Top.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htTop;
                }
                else if(Resizer.Left.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htLeft;
                }
                else if(Resizer.Right.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htRight;
                }
                else if(Resizer.Bottom.Contains(cursor)) {

                    message.Result = (IntPtr)Resizer.htBottom;
                }
            }
        }
    }
}