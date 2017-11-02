using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace slidingWindow {
    class Deque<T> {

        private LinkedList<T> _queue = new LinkedList<T>();

        public int Count { get { return _queue.Count; } }
        public bool IsEmpty { get { return Count == 0; } }
        /// <summary>
        /// clear all items in queue
        /// </summary>
        public void Clear() {

            _queue.Clear();
        }
        /// <summary>
        /// examine item at the start of queue
        /// </summary>
        public T PeekStart() {

            return _queue.First();
        }
        /// <summary>
        /// examine item at the end of queue
        /// </summary>
        public T PeekEnd() {

            return _queue.Last();
        }
        /// <summary>
        /// insert item to the front of queue
        /// </summary>
        public void PushStart(T item) {

            _queue.AddFirst(item);
        }
        /// <summary>
        /// insert item to the end of queue
        /// </summary>
        public void PushEnd(T item) {

            _queue.AddLast(item);
        }
        /// <summary>
        /// remove item at the start of queue
        /// </summary>
        public T PopStart() {

            var item = _queue.First();
            _queue.RemoveFirst();

            return item;
        }
        /// <summary>
        /// remove item at the end of queue
        /// </summary>
        public T PopEnd() {

            var item = _queue.Last();
            _queue.RemoveLast();

            return item;
        }
    }
}