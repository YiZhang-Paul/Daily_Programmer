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

        public EventOrganizer() {

            InitializeComponent();
            ResizeListHeader();
        }

        private void ResizeListHeader() {

            var columns = EventList.Columns;

            foreach(ColumnHeader column in columns) {

                column.Width = EventList.Width / columns.Count;
            }
        }
    }
}