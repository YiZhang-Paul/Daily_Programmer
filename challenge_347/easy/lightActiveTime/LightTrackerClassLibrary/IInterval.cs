using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LightTrackerClassLibrary {
    public interface IInterval {

        int Start { get; }
        int End { get; }
        int Duration { get; }

        bool Overlap(IInterval otherInterval);
        IInterval Join(IInterval otherInterval);
    }
}