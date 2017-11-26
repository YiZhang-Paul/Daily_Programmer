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

        public EventOrganizer ParentForm { get; set; }

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

        private void TryAddEvent(UserEvent userEvent) {

            if(ParentForm.HasEvent(userEvent)) {

                MessageBox.Show("Event with Same Title and Date Already Exists.");
            }
            else {

                ParentForm.AddEvent(userEvent);
                CloseTimer.Tick += this.CloseForm;
                CloseTimer.Start();
            }
        }

        private void Add_Click(object sender, EventArgs e) {

            string title = EventTitle.Text.Trim();
            var date = EventDate.Value.Date;
            //input validation
            TitleErrorLabel.Visible = !UserEvent.IsValidTitle(title);
            DateErrorLabel.Visible = !UserEvent.IsValidDate(date);

            if(!TitleErrorLabel.Visible && !DateErrorLabel.Visible) {

                TryAddEvent(new UserEvent(title, date, EventDetail.Text.Trim()));
            }
        }

        private void Cancel_Click(object sender, EventArgs e) {

            CloseTimer.Tick += this.CloseForm;
            CloseTimer.Start();
        }

        private void CloseForm(object sender, EventArgs e) {

            this.Opacity -= 0.05;

            if(this.Opacity <= 0.85) {

                this.Close();
            }
        }
    }
}