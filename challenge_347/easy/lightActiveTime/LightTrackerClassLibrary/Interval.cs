using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightTrackerClassLibrary {
    public class Interval : IInterval {

        public int Start { get; private set; }
        public int End { get; private set; }
        public int Duration { get { return End - Start; } }

        public Interval(int start, int end) {

            if(start > end) {

                throw new ArgumentException("Interval Start Time Must Precede End Time.");
            }

            Start = start;
            End = end;
        }

        private bool Contains(IInterval interval, int timestamp) {

            return timestamp >= interval.Start && timestamp <= interval.End;
        }

        public bool Overlap(IInterval otherInterval) {

            return Contains(this, otherInterval.Start) || Contains(this, otherInterval.End) ||
                   Contains(otherInterval, this.Start) || Contains(otherInterval, this.End);
        }

        public IInterval Join(IInterval otherInterval) { 
        
            if(!Overlap(otherInterval)) {

                return null;
            }

            int start = Math.Min(this.Start, otherInterval.Start);
            int end = Math.Max(this.End, otherInterval.End);

            return new Interval(start, end);
        }
    }
}