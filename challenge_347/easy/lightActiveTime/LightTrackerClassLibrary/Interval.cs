using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightTrackerClassLibrary {
    public class Interval {

        public int Start { get; private set; }
        public int End { get; private set; }

        public Interval(int start, int end) {

            if(start > end) {

                throw new ArgumentException("Interval Start Time Must Precede End Time.");
            }

            Start = start;
            End = end;
        }

        public static bool operator <(Interval earlier, Interval later) {

            return earlier.Start < later.Start;
        }

        public static bool operator >(Interval later, Interval earlier) {

            return later.Start >= earlier.Start;
        }

        private bool Contains(int timestamp) {

            return timestamp >= Start && timestamp <= End;
        }

        public bool Overlap(Interval otherInterval) {

            return Contains(otherInterval.Start) || Contains(otherInterval.End) ||
                   otherInterval.Contains(Start) || otherInterval.Contains(End);
        }

        public Interval Join(Interval otherInterval) {

            if(!Overlap(otherInterval)) {
            
                return null;
            }

            int start = Math.Min(Start, otherInterval.Start);
            int end = Math.Max(End, otherInterval.End);

            return new Interval(start, end);
        }
    }
}