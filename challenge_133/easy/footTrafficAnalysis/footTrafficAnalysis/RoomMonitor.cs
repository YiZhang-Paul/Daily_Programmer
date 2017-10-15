using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace footTrafficAnalysis {
    class RoomMonitor {
        public Dictionary<int, Room> Rooms { get; set; }
        public Dictionary<int, Visitor> Visitors { get; set; }
        /*
         * read log file
         * @param {string} [logs] - log file to read
         * 
         * @return {List<string[]>} [organized log file]
         */
        public List<string[]> ReadLog(string logs) { 
            return logs.Split('\n').Select(log => log.Trim().Split(' ')).ToList();
        }
        /*
         * analyze room traffic
         * @param {string} [logs] - log file to read
         */
        public void AnalyzeTraffic(string logs) {
            Rooms = new Dictionary<int, Room>();
            Visitors = new Dictionary<int, Visitor>();
            //read and process log file
            List<string[]> logFile = ReadLog(logs);
            foreach(string[] log in logFile) {
                ProcessLog(log);
            }
        }
        /*
         * process a log record
         * @param {string[]} [log] - log record to process
         */
        public void ProcessLog(string[] log) {
            int visitorId = Int32.Parse(log[0]);
            int roomId = Int32.Parse(log[1]);
            //retrieve or create room/visitor
            Rooms[roomId] = Rooms.ContainsKey(roomId) ? Rooms[roomId] : new Room(roomId);
            Visitors[visitorId] = Visitors.ContainsKey(visitorId) ? Visitors[visitorId] : new Visitor(visitorId);
            //record traffic
            if(log[2] == "I") {
                Rooms[roomId].AddVisitor();
                Visitors[visitorId].EnterRoom(roomId, Int32.Parse(log[3]));
            } else {
                int visitTime = Visitors[visitorId].GetVisitTime(Int32.Parse(log[3]));
                Rooms[roomId].AddVisitTime(visitTime);
                Visitors[visitorId].LeaveRoom();
            }
        }
        /*
         * display room traffics
         */
        public void DisplayTraffic() {
            StringBuilder result = new StringBuilder();
            //display room information in the order of room ID
            foreach(var pair in Rooms.OrderBy(room => room.Key)) {
                result.Append(pair.Value.GetRoomInfo() + "\n");
            }
            Console.WriteLine(result.ToString());
        }
    }
}