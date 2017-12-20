using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bankerAlgorithm {
    class Process {

        private int[] RequiredResources { get; set; }
        private int[] AssignedResources { get; set; }

        public Process(int[] requiredResources) {

            RequiredResources = requiredResources;
            AssignedResources = new int[3];
        }

        public void ReceiveResource(int[] resources) {

            for(int i = 0; i < resources.Length; i++) {

                AssignedResources[i] += resources[i];
            }
        }
    }
}