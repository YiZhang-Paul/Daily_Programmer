using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace eventOrganizer {
    public partial class AddEventForm : Form {

        private Point MouseXY { get; set; }

        public AddEventForm() {

            InitializeComponent();
        }

        private void GetMousePosition(object sender, MouseEventArgs e) {

            MouseXY = e.Location;
        }

        private void DragMouse(object sender, MouseEventArgs e) { 
        
            if(e.Button == MouseButtons.Left) {

                this.Left += e.X - MouseXY.X;
                this.Top += e.Y - MouseXY.Y;
            }
        }

        private void Add_Click(object sender, EventArgs e) {

            string title = EventTitle.Text.Trim();
            var date = EventDate.Value.Date;
            //input validation
            TitleErrorLabel.Visible = !UserEvent.IsValidTitle(title);
            DateErrorLabel.Visible = !UserEvent.IsValidDate(date);

            if(!TitleErrorLabel.Visible && !DateErrorLabel.Visible) {

                var userEvent = new UserEvent(title, date, EventDetail.Text.Trim());
                this.Close();
            }
        }

        private void Cancel_Click(object sender, EventArgs e) {

            this.Close();
        }
    }
}