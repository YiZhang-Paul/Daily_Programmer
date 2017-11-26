using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eventOrganizer {
    class UserEvent {

        public string Title { get; private set; }
        public DateTime Date { get; private set; }
        public string Description { get; private set; }

        public UserEvent(string title, DateTime date, string description) {

            Title = title;
            Date = date;
            Description = description;
        }
    }
}