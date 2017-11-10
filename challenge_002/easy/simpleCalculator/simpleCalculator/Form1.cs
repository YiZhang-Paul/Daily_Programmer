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

        private Point _mouseCord;

        public Calculator() {
        
            InitializeComponent();
        }
        /// <summary>
        /// retrieve mouse co-ordinate
        /// </summary>
        private Point GetMouseCord(MouseEventArgs e) {

            return e.Location;
        }
        /// <summary>
        /// mouse drag
        /// </summary>
        private void DragMouse(MouseEventArgs e) {

            if(e.Button == MouseButtons.Left) {

                this.Left += e.X - _mouseCord.X;
                this.Top += e.Y - _mouseCord.Y;
            }
        }
        /** 
         * all event handlers
         */
        private void btnXSquare_Click(object sender, EventArgs e) {

        }

        private void btnSquareRoot_Click(object sender, EventArgs e) {

        }

        private void btnTenToPower_Click(object sender, EventArgs e) {

        }

        private void btnXToPowerY_Click(object sender, EventArgs e) {

        }

        private void btnSine_Click(object sender, EventArgs e) {

        }

        private void btnLog_Click(object sender, EventArgs e) {

        }

        private void btnCosine_Click(object sender, EventArgs e) {

        }

        private void btnExponential_Click(object sender, EventArgs e) {

        }

        private void btnTangent_Click(object sender, EventArgs e) {

        }

        private void btnModulos_Click(object sender, EventArgs e) {

        }

        private void btnDivide_Click(object sender, EventArgs e) {

        }

        private void btnDelete_Click(object sender, EventArgs e) {

        }

        private void button12_Click(object sender, EventArgs e) {

        }

        private void btnClearAll_Click(object sender, EventArgs e) {

        }

        private void topPanel_MouseDown(object sender, MouseEventArgs e) {

            _mouseCord = GetMouseCord(e);
        }

        private void topPanel_MouseMove(object sender, MouseEventArgs e) {

            DragMouse(e);
        }

        private void lblTitle_MouseDown(object sender, MouseEventArgs e) {

            _mouseCord = GetMouseCord(e);
        }

        private void lblTitle_MouseMove(object sender, MouseEventArgs e) {

            DragMouse(e);
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
    }
}
