using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace eventOrganizer {
    public class EventManager {

        public Dictionary<string, List<UserEvent>> Events { get; set; }

        public EventManager() {

            Events = new Dictionary<string, List<UserEvent>>();
        }

        public bool HasEvent(UserEvent userEvent) {

            string title = userEvent.Title.ToLower();
            string date = userEvent.Date.ToShortDateString();

            if(!Events.ContainsKey(date)) {

                return false;
            }

            return Events[date].Any(curEvent => curEvent.Title.ToLower() == title);
        }

        public void Add(UserEvent userEvent) {

            string date = userEvent.Date.ToShortDateString();
            Events[date] = Events.ContainsKey(date) ? Events[date] : new List<UserEvent>();
            Events[date].Add(userEvent);
        }

        public void Update(UserEvent oldEvent, UserEvent newEvent) {

            Delete(oldEvent);
            Add(newEvent);
        }

        public void Delete(UserEvent userEvent) {

            string date = userEvent.Date.ToShortDateString();

            if(Events[date].Count == 1) {

                Events.Remove(date);
            }
            else {

                Events[date].Remove(userEvent);
            }
        }

        public DataTable ToTable() {

            var table = new DataTable();
            table.Columns.Add("Title");
            table.Columns.Add("Date");

            foreach(var dateGroup in Events) {

                foreach(var userEvent in dateGroup.Value) {

                    table.Rows.Add(userEvent.Title, userEvent.Date.ToShortDateString());
                }
            }

            return table;
        }
    }
}