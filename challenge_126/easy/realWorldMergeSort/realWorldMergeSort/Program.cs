using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace realWorldMergeSort {
    class Program {
        static void Main(string[] args) {
 
            //challenge input
            int[] arrayA = new int[] { 692, 1, 32 };
            int[] arrayB = new int[] { 0, 0, 0, 14, 15, 123, 2431 };

            SortAndMerge(arrayA, arrayB);
            Console.WriteLine(string.Join(" ", arrayB));
        }
        /*
         * sort and merge two arrays
         * @param {int[]} [arrayA] - array without buffer
         * @param {int[]} [arrayB] - array with buffer
         */
        public static void SortAndMerge(int[] arrayA, int[] arrayB) { 
            
            QuickSort(arrayA, 0, arrayA.Length - 1);
            //merge sorted array A and array B and store result in array B
            Merge(arrayA, arrayB);
        }
        /*
         * merge two sorted arrays in sorted order
         * @param {int[]} [arrayA] - array A
         * @param {int[]} [arrayB] - array B
         */
        public static void Merge(int[] arrayA, int[] arrayB) { 
            
            int curIndex = 0;
            //current index of smallest element in both arrays
            int indexA = 0;
            int indexB = arrayA.Length;

            while(indexA < arrayA.Length || indexB < arrayB.Length) {

                if(indexA < arrayA.Length && indexB < arrayB.Length) {

                    arrayB[curIndex++] = arrayA[indexA] < arrayB[indexB] ? arrayA[indexA++] : arrayB[indexB++];
                }
                else {

                    arrayB[curIndex++] = indexA < arrayA.Length ? arrayA[indexA++] : arrayB[indexB++];
                }
            }
        }
        /*
         * sort an array using quick sort
         * @param {int[]} [array] - array to sort
         * @param {int} [low] - lower bound of sub-array
         * @param {int} [high] - higher bound of sub-array
         */
        public static void QuickSort(int[] array, int low, int high) { 
        
            if(high > low) {

                int pivot = array[high];
                int curIndex = low;
                int temp;
                //partition current sub-array
                for(int i = low; i < high; i++) {

                    if(array[i] < pivot) {

                        temp = array[i];
                        array[i] = array[curIndex];
                        array[curIndex++] = temp;
                    }
                }
                //move pivot to correct index
                array[high] = array[curIndex];
                array[curIndex] = pivot;

                QuickSort(array, low, curIndex - 1);
                QuickSort(array, curIndex + 1, high);
            }
        }
    }
}