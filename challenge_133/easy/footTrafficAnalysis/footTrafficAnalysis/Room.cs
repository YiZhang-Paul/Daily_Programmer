using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace footTrafficAnalysis {
    class Room {
        public int RoomId { get; private set; }
        public int TotalVisit { get; private set; }
        public int VisitTime { get; private set; }
        public int AverageVisitTime { get { return VisitTime / TotalVisit; } }

        public Room() {
            TotalVisit = 0;
            VisitTime = 0;
        }
        /*
         * @param {int} [id] - room ID
         */
        public Room(int id) {
            RoomId = id;
            TotalVisit = 0;
            VisitTime = 0;
        }
        /*
         * update total number of visitors
         * @param {int} [visitors] - additional visitors
         */
        public void AddVisitor(int visitors = 1) {
            TotalVisit += visitors;
        }
        /*
         * update total visit time
         * @param {int} [time] - additional visit time
         */
        public void AddVisitTime(int time = 0) {
            VisitTime += time;
        }
        /*
         * retrieve room information
         *
         * @return {string} [room information]
         */
        public string GetRoomInfo() {
            return "Room " + RoomId + ", " + AverageVisitTime + " minutes average visit, " + TotalVisit + " visitor(s) total";
        }
    }
}