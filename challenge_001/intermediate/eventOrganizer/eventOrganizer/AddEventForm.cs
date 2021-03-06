﻿using System;
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

        public EventOrganizer Organizer { get; set; }
        public Label TopLabel { get { return Title; } }
        public TextBox TitleBox { get { return EventTitle; } }
        public DateTimePicker DatePicker { get { return EventDate; } }
        public RichTextBox DetailBox { get { return EventDetail; } }
        public Button AddButton { get { return Add; } }
        public Timer OnCloseTimer { get { return CloseTimer; } }

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

            if(Organizer.EventManager.HasEvent(userEvent)) {

                MessageBox.Show("Event with Same Title and Date Already Exists.");
            }
            else {

                Organizer.EventManager.Add(userEvent);
                Organizer.ListEvents();
                CloseTimer.Tick += this.CloseForm;
                CloseTimer.Start();
            }
        }

        protected bool ValidateInput(string title, DateTime date) {

            TitleErrorLabel.Visible = !UserEvent.IsValidTitle(title);
            DateErrorLabel.Visible = !UserEvent.IsValidDate(date);

            return !TitleErrorLabel.Visible && !DateErrorLabel.Visible;
        }

        protected void CloseForm(object sender, EventArgs e) {

            this.Opacity -= 0.05;

            if(this.Opacity <= 0.85) {

                this.Close();
            }
        }

        protected void Add_Click(object sender, EventArgs e) {

            string title = EventTitle.Text.Trim();
            var date = EventDate.Value.Date;

            if(ValidateInput(title, date)) {

                TryAddEvent(new UserEvent(title, date, EventDetail.Text.Trim()));
            }
        }

        private void Cancel_Click(object sender, EventArgs e) {

            CloseTimer.Tick += this.CloseForm;
            CloseTimer.Start();
        }
    }
}