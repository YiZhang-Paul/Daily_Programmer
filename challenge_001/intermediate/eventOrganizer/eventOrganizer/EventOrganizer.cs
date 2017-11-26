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
        private Dictionary<string, List<UserEvent>> UserEvents { get; set; }

        public EventOrganizer() {

            InitializeComponent();
        }

        private void LoadUI(object sender, EventArgs e) {

            Buttons = new ButtonManager(new Button[] { Add, Edit, Delete });
            UserEvents = new Dictionary<string, List<UserEvent>>();
            ToggleModificationKeys();
            ResizeListHeader();
        }

        private void ToggleModificationKeys() { 
        
            foreach(var button in new Button[] { Edit, Delete }) {

                Buttons.Toggle(button);
            }
        }

        private void ResizeListHeader() {

            var columns = EventList.Columns;

            foreach(DataGridViewColumn column in columns) {

                column.Width = EventList.Width / columns.Count;
            }
        }

        public bool HasEvent(UserEvent userEvent) { 
        
            string date = userEvent.Date.ToShortDateString();
            string title = userEvent.Title.ToLower();

            if(!UserEvents.ContainsKey(date)) {

                return false;
            }

            return UserEvents[date].Any(curEvent => curEvent.Title.ToLower() == title);
        }

        public void AddEvent(UserEvent userEvent) {

            string date = userEvent.Date.ToShortDateString();
            UserEvents[date] = UserEvents.ContainsKey(date) ? UserEvents[date] : new List<UserEvent>();
            UserEvents[date].Add(userEvent);
        }

        private void Add_Click(object sender, EventArgs e) {

            var addEventForm = new AddEventForm();
            addEventForm.ParentForm = this;
            addEventForm.Show();
        }
    }
}