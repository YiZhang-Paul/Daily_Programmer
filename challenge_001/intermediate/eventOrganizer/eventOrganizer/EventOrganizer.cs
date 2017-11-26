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
    public partial class EventOrganizer : Form {

        private ButtonManager Buttons { get; set; }

        public EventOrganizer() {

            InitializeComponent();
        }

        private void LoadUI(object sender, EventArgs e) {

            Buttons = new ButtonManager(new Button[] { Add, Edit, Delete });
            ToggleModificationKeys();
            ResizeListHeader();
        }

        private void ResizeListHeader() {

            var columns = EventList.Columns;

            foreach(DataGridViewColumn column in columns) {

                column.Width = EventList.Width / columns.Count;
            }
        }

        private void ToggleModificationKeys() { 
        
            foreach(var button in new Button[] { Edit, Delete }) {

                Buttons.Toggle(button);
            }
        }

        private void Add_Click(object sender, EventArgs e) {

            var addEventForm = new AddEventForm();
            addEventForm.Show();
        }
    }
}