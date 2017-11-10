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

        public Calculator() {
            
            InitializeComponent();
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
    }
}