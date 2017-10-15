using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace footTrafficAnalysis {
    class Visitor {
        public int VistorId { get; private set; }
        public int RoomId { get; private set; }
        public int EnterTime { get; private set; }

        public Visitor() { 
        }
        /*
         * @param {int} [id] - visitor ID
         */
        public Visitor(int id) {
            VistorId = id;
        }
        /*
         * enter a room
         * @param {int} [roomId] - room ID
         * @param {int} [time] - enter time
         */
        public void EnterRoom(int roomId, int time) {
            RoomId = roomId;
            EnterTime = time;
        }
        /*
         * leave a room
         */
        public void LeaveRoom() {
            RoomId = 0;
            EnterTime = 0;
        }
        /*
         * retrieve total visit time in current room
         * @param {int} [time] - current time
         * 
         * @return {int} [total visit time]
         */
        public int GetVisitTime(int time) {
            return time - EnterTime;
        }
    }
}