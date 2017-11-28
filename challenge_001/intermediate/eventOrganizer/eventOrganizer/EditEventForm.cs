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
    public partial class EditEventForm : AddEventForm {

        public UserEvent InEdit { get; set; }

        public EditEventForm() {

            InitializeComponent();
        }

        public void LoadForm() {
            //change form title
            TopLabel.Text = "Edit Event";
            TopLabel.Left = (TopLevelControl.Width - TopLabel.Width) / 2;
            //load event information
            TitleBox.Text = InEdit.Title;
            DatePicker.Value = InEdit.Date;
            DetailBox.Text = InEdit.Description;
            //create update button
            AddButton.Text = "Update";
            AddButton.Click -= this.Add_Click;
            AddButton.Click += this.Update_Click;
        }

        private void Update_Click(object sender, EventArgs e) {

            string title = TitleBox.Text.Trim();
            var date = DatePicker.Value.Date;

            if(ValidateInput(title, date)) {

                Organizer.UpdateEvent(InEdit, title, date, DetailBox.Text.Trim());
                OnCloseTimer.Tick += this.CloseForm;
                OnCloseTimer.Start();
            }
        }
    }
}