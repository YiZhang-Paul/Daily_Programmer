using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace LightTrackerClassLibrary {
    public class LightTracker {

        private int[] ParseNumber(string input) {

            return Regex.Matches(input, @"\d+")
                        .Cast<Match>()
                        .Select(match => int.Parse(match.Value))
                        .ToArray();
        }

        private List<IInterval> GetIntervals(string input) { 
        
            var intervals = new List<IInterval>();

            foreach(string interval in input.Trim().Split('\n')) {

                var timestamps = ParseNumber(interval);
                intervals.Add(new Interval(timestamps[0], timestamps[1]));
            }

            return intervals;
        }

        private bool TryMergeInterval(List<IInterval> intervals, int index) {

            for(int i = index + 1; i < intervals.Count; i++) {

                if(intervals[index].Overlap(intervals[i])) {

                    intervals[index] = intervals[index].Join(intervals[i]);
                    intervals.RemoveAt(i);

                    return true;
                }
            }

            return false;
        }

        private List<IInterval> MergeIntervals(List<IInterval> intervals) {

            bool merged = false;

            while(!merged) {

                merged = true;

                for(int i = 0; i < intervals.Count - 1; i++) {

                    merged = !TryMergeInterval(intervals, i);

                    if(!merged) {

                        break;
                    }
                }
            }

            return intervals;
        }

        public int GetActiveTime(string input) {

            var intervals = GetIntervals(input);

            return MergeIntervals(intervals).Aggregate(0, (activeTime, current) => {

                return activeTime + current.Duration;
            });
        }
    }
}