using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace eventOrganizer {
    public partial class EventOrganizer : Form {

        private ButtonManager Buttons { get; set; }
        private Dictionary<string, List<UserEvent>> UserEvents { get; set; }

        public EventOrganizer() {

            InitializeComponent();
        }

        private void LoadUI(object sender, EventArgs e) {

            Buttons = new ButtonManager(new Button[] { Add, Edit, Delete });
            ToggleModificationKeys();
            LoadEvents();
            ListEvents();
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
            ListEvents();
        }

        private void LoadEvents() {

            if(!File.Exists("events.txt")) {
            
                UserEvents = new Dictionary<string,List<UserEvent>>();
            }
            else {
                    
                var formatter = new BinaryFormatter();
            
                using(var stream = new FileStream("events.txt", FileMode.Open, FileAccess.Read)) {

                    UserEvents = (Dictionary<string, List<UserEvent>>)formatter.Deserialize(stream);
                }
            }
        }

        private void ListEvents() {

            var table = new DataTable();
            table.Columns.Add("Title");
            table.Columns.Add("Date");

            foreach(var pair in UserEvents) {
            
                foreach(var userEvent in pair.Value) {

                    table.Rows.Add(userEvent.Title, userEvent.Date.ToShortDateString());
                }
            }

            EventList.DataSource = table;
            ResizeListHeader();
        }

        private void SaveEvents() {

            using(var stream = new FileStream("events.txt", FileMode.Create, FileAccess.Write)) {

                new BinaryFormatter().Serialize(stream, UserEvents);
            }
        }

        private void Add_Click(object sender, EventArgs e) {

            var addEventForm = new AddEventForm();
            addEventForm.Organizer = this;
            addEventForm.Show();
        }

        private void EventOrganizer_FormClosed(object sender, FormClosedEventArgs e) {

            SaveEvents();
        }
    }
}