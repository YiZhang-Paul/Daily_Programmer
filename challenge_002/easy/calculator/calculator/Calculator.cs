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

namespace calculator {
    public partial class Calculator : Form {

        private string _validKeys = "[0-9=]|clearEntry|clearAll|delete";

        private BasicCalculator BasicCalculator { get; set; }
        private bool IsDisabled { get; set; }

        public Calculator() {

            InitializeComponent();
            BasicCalculator = new BasicCalculator();
        }

        private void UpdateDisplay() {

            this.Display.Text = BasicCalculator.DisplayNumber();
            this.Equation.Text = BasicCalculator.Equation.Content;
        }

        private void ShowError(string message) {

            this.Display.Text = message;
        }

        private void EnableKey(Button button) {

            button.FlatAppearance.MouseDownBackColor = Color.FromArgb(67, 67, 67);
            button.FlatAppearance.MouseOverBackColor = Color.FromArgb(59, 59, 59);
            button.ForeColor = SystemColors.ControlLightLight;
            button.MouseEnter += this.ButtonMouseEnter;
        }

        private void DisableKey(Button button) {

            button.FlatAppearance.MouseDownBackColor = button.BackColor;
            button.FlatAppearance.MouseOverBackColor = button.BackColor;
            button.ForeColor = Color.FromArgb(64, 64, 64);
            button.MouseEnter -= this.ButtonMouseEnter;
        }

        private void ToggleKey(Button button, bool enable) {

            if(enable) {

                EnableKey(button);
            }
            else {

                DisableKey(button);
            }
        }

        private void ToggleKeypad() {

            foreach(var button in this.KeyLayout.Controls.OfType<Button>()) {

                if(!Regex.IsMatch(button.Tag.ToString(), "^" + _validKeys + "$")) {

                    ToggleKey(button, IsDisabled);
                }
            }

            IsDisabled = !IsDisabled;
        }

        private void HandleError(string message = "Invalid Input") {

            ToggleKeypad();
            BasicCalculator.Reset();
            ShowError(message);
        }
        /// <summary>
        /// handle user input
        /// </summary>
        private void HandleInput(object sender, EventArgs e) {

            this.Display.Focus();
            string tag = ((Button)sender).Tag.ToString();

            if(IsDisabled && Regex.IsMatch(tag, "^" + _validKeys + "$")) {

                ToggleKeypad();
            }

            try {

                if(!IsDisabled) {

                    if(Regex.IsMatch(tag, "^[0-9.]$")) BasicCalculator.AddInput(tag);
                    else if(tag == "=") BasicCalculator.GetResult();
                    else if(tag == "negate") BasicCalculator.Negate();
                    else if(tag == "clearAll") BasicCalculator.Reset();
                    else if(tag == "clearEntry") BasicCalculator.ClearEntry();
                    else if(tag == "delete") BasicCalculator.Delete();
                    else BasicCalculator.ProcessOperation(tag);

                    UpdateDisplay();
                }
            }
            catch(DivideByZeroException) {

                HandleError("Divide by Zero");
            }
            catch(Exception) {

                HandleError();
            }
        }
        /**
         * event listeners
         */
        private void ButtonMouseEnter(object sender, EventArgs e) { 
        
            var button = (Button)sender;
            button.FlatAppearance.BorderSize = 2;
            button.FlatAppearance.BorderColor = Color.FromArgb(90, 90, 90);
        }

        private void ButtonMouseLeave(object sender, EventArgs e) {

            ((Button)sender).FlatAppearance.BorderSize = 0;
        }

        private void ResizeDisplay(object sender, PaintEventArgs e) {

            var label = (Label)sender;
            var size = e.Graphics.MeasureString(label.Text, label.Font);
            int maxWidth = (int)(label.Parent.Size.Width * 0.95);
            int maxHeight = label.Parent.Size.Height;
            float scale = Math.Min(maxWidth / size.Width, maxHeight / size.Height);
            float fontSize = Math.Min(label.Font.Size * scale, 36);
            label.Font = new Font("Segoe UI Semibold", fontSize, FontStyle.Bold);
        }
    }
}