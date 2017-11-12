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
        private ScientificCalculator ScientificCalculator { get; set; }

        public Calculator() {
            
            InitializeComponent();
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

            numberDisplay.Text = ScientificCalculator.Input.Formatted;
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

            if(Regex.IsMatch(input, "^[0-9.]$")) {

                ScientificCalculator.AddInput(input);
            }
            else {

                ScientificCalculator.Process(input);
            }

            ShowNumber();
            ShowEquation();
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

            if(ScientificCalculator.TemporarySave == null) {
            
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

            try {

                Input("+");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnMinus_Click(object sender, EventArgs e) {

            try {

                Input("-");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnMultiply_Click(object sender, EventArgs e) {

            try {

                Input("*");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnDivide_Click(object sender, EventArgs e) {

            try {

                Input("/");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnEqual_Click(object sender, EventArgs e) {

            try {

                ScientificCalculator.GetFinalResult();
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

        private void btnFactorial_Click(object sender, EventArgs e) {

            try {

                Input("!");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnXSquare_Click(object sender, EventArgs e) {

            try {

                Input("x2");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnXPowerY_Click(object sender, EventArgs e) {

            try {

                Input("^");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnSine_Click(object sender, EventArgs e) {

            try {

                Input("sin");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnCosine_Click(object sender, EventArgs e) {

            try {

                Input("cos");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnTangent_Click(object sender, EventArgs e) {

            try {

                Input("tan");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnSquareRoot_Click(object sender, EventArgs e) {

            try {

                Input("sqrt");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnTenPowerX_Click(object sender, EventArgs e) {

            try {

                Input("10x");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnLog_Click(object sender, EventArgs e) {

            try {

                Input("log10");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnExponential_Click(object sender, EventArgs e) {

            try {

                Input("exp");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnModulos_Click(object sender, EventArgs e) {

            try {

                Input("mod");
            }
            catch(DivideByZeroException) {

                ShowError("Divide by Zero");
            }
            catch(Exception) {

                ShowError();
            }
        }

        private void btnPI_Click(object sender, EventArgs e) {

            ScientificCalculator.LoadPI();
            ShowNumber();
        }

        private void btnNegate_Click(object sender, EventArgs e) {

            ScientificCalculator.Negate();
            ShowNumber();
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







        private const int
    HTLEFT = 10,
    HTRIGHT = 11,
    HTTOP = 12,
    HTTOPLEFT = 13,
    HTTOPRIGHT = 14,
    HTBOTTOM = 15,
    HTBOTTOMLEFT = 16,
    HTBOTTOMRIGHT = 17;

        const int _ = 50; // you can rename this variable if you like

        Rectangle TopRect { get { return new Rectangle(0, 0, this.ClientSize.Width, _); } }
        Rectangle LeftRect { get { return new Rectangle(0, 0, _, this.ClientSize.Height); } }
        Rectangle BottomRect { get { return new Rectangle(0, this.ClientSize.Height - _, this.ClientSize.Width, _); } }
        Rectangle RightRect { get { return new Rectangle(this.ClientSize.Width - _, 0, _, this.ClientSize.Height); } }

        Rectangle TopLeft { get { return new Rectangle(0, 0, _, _); } }
        Rectangle TopRight { get { return new Rectangle(this.ClientSize.Width - _, 0, _, _); } }
        Rectangle BottomLeft { get { return new Rectangle(0, this.ClientSize.Height - _, _, _); } }
        Rectangle BottomRight { get { return new Rectangle(this.ClientSize.Width - _, this.ClientSize.Height - _, _, _); } }


        protected override void WndProc(ref Message message) {
            base.WndProc(ref message);

            if(message.Msg == 0x84) // WM_NCHITTEST
    {
                var cursor = this.PointToClient(Cursor.Position);

                if(TopLeft.Contains(cursor)) message.Result = (IntPtr)HTTOPLEFT;
                else if(TopRight.Contains(cursor)) message.Result = (IntPtr)HTTOPRIGHT;
                else if(BottomLeft.Contains(cursor)) message.Result = (IntPtr)HTBOTTOMLEFT;
                else if(BottomRight.Contains(cursor)) message.Result = (IntPtr)HTBOTTOMRIGHT;

                else if(TopRect.Contains(cursor)) message.Result = (IntPtr)HTTOP;
                else if(LeftRect.Contains(cursor)) message.Result = (IntPtr)HTLEFT;
                else if(RightRect.Contains(cursor)) message.Result = (IntPtr)HTRIGHT;
                else if(BottomRect.Contains(cursor)) message.Result = (IntPtr)HTBOTTOM;
            }
        }
    }
}