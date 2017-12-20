using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bankerAlgorithm {
    class Allocator {

        private int[] Resources { get; set; }

        public Allocator(int[] resources) {

            Resources = resources;
        }

        public void ReceiveResource(int[] resources) {

            for(int i = 0; i < resources.Length; i++) {

                Resources[i] += resources[i];
            }
        }

        public void Allocate(Process process, int[] resources) {

            for(int i = 0; i < resources.Length; i++) {

                Resources[i] -= resources[i];
            }

            process.ReceiveResource(resources);
        }
    }
}