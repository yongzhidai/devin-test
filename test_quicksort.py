import unittest
from quicksort import quicksort

class TestQuickSort(unittest.TestCase):
    def test_random_array(self):
        arr = [64, 34, 25, 12, 22, 11, 90]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_already_sorted_array(self):
        arr = [1, 2, 3, 4, 5, 6]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_reverse_sorted_array(self):
        arr = [6, 5, 4, 3, 2, 1]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_array_with_duplicates(self):
        arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_empty_array(self):
        arr = []
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_single_element_array(self):
        arr = [1]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_negative_numbers(self):
        arr = [-5, 10, -3, 8, -9, 3, -1]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))
        
    def test_all_same_elements(self):
        arr = [4, 4, 4, 4, 4]
        self.assertEqual(quicksort(arr.copy()), sorted(arr))

if __name__ == '__main__':
    unittest.main(argv=[''], exit=False)
