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

        private ButtonManager ButtonManager { get; set; }

        public EventManager EventManager { get; set; }

        public EventOrganizer() {

            InitializeComponent();
        }

        private void LoadUI(object sender, EventArgs e) {

            ButtonManager = new ButtonManager(new Button[] { Add, Edit, Delete });
            EventManager = new EventManager();
            ToggleModificationKeys();
            LoadEvents();
        }

        private void ToggleModificationKeys(bool enable = false) { 
        
            foreach(var button in new Button[] { Edit, Delete }) {

                if(enable) {

                    ButtonManager.Enable(button);
                }
                else {

                    ButtonManager.Disable(button);
                }
            }
        }

        private void ResizeListHeader() {

            var columns = EventList.Columns;

            foreach(DataGridViewColumn column in columns) {

                column.Width = EventList.Width / columns.Count;
            }
        }

        public void ListEvents() {

            EventList.DataSource = EventManager.ToTable();
            EventList.ClearSelection();
            ResizeListHeader();
        }

        private void LoadEvents() {

            if(File.Exists("events.txt")) {

                var formatter = new BinaryFormatter();

                using(var stream = new FileStream("events.txt", FileMode.Open, FileAccess.Read)) {

                    EventManager.Events = (Dictionary<string, List<UserEvent>>)formatter.Deserialize(stream);
                }

                ListEvents();
            }
        }

        private void SaveEvents() {

            using(var stream = new FileStream("events.txt", FileMode.Create, FileAccess.Write)) {

                new BinaryFormatter().Serialize(stream, EventManager.Events);
            }
        }

        private UserEvent GetSelectedEvent() { 
        
            if(EventList.SelectedRows.Count > 0) {

                var row = EventList.SelectedRows[0];
                string title = row.Cells[0].Value.ToString();
                string date = row.Cells[1].Value.ToString();

                return EventManager.Events[date].First(userEvent => userEvent.Title == title);
            }

            return null;
        }

        private void Add_Click(object sender, EventArgs e) {

            var addEventForm = new AddEventForm();
            addEventForm.Organizer = this;
            addEventForm.Show();
        }

        private void Edit_Click(object sender, EventArgs e) {

            if(ButtonManager.IsEnabled((Button)sender)) {

                var editEventForm = new EditEventForm();
                editEventForm.Organizer = this;
                editEventForm.currentEvent = GetSelectedEvent();
                editEventForm.LoadForm();
                editEventForm.Show();
            }
        }

        private void Delete_Click(object sender, EventArgs e) {

            if(ButtonManager.IsEnabled((Button)sender)) {

                EventManager.Delete(GetSelectedEvent());
                ListEvents();
            }
        }

        private void EventOrganizer_FormClosed(object sender, FormClosedEventArgs e) {

            SaveEvents();
        }

        private void EventList_RowStateChanged(object sender, DataGridViewRowStateChangedEventArgs e) {

            ToggleModificationKeys(EventList.SelectedRows.Count > 0);
        }
    }
}