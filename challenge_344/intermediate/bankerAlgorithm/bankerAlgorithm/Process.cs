using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bankerAlgorithm {
    class Process {

        public string Name { get; private set; }
        public int[] RequiredResources { get; private set; }
        public int[] AssignedResources { get; private set; }

        public Process(string name, int[] requiredResources) {

            Name = name;
            RequiredResources = requiredResources;
            AssignedResources = new int[3];
        }

        public void ReceiveResource(int[] resources) {

            for(int i = 0; i < resources.Length; i++) {

                AssignedResources[i] += resources[i];
            }
        }

        public void ReleaseResource(Allocator allocator) { 
        
            allocator.ReceiveResource(AssignedResources);
            //clear all assigned resources
            AssignedResources = AssignedResources.Select(slot => 0).ToArray();
        }
    }
}