def partition(arr, low, high):
    """
    Partition function that takes the last element as pivot,
    places the pivot at its correct position in sorted array,
    and places all smaller elements to left of pivot and
    all greater elements to right of pivot
    """
    pivot = arr[high]
    i = low - 1  # Index of smaller element

    for j in range(low, high):
        # If current element is smaller than or equal to pivot
        if arr[j] <= pivot:
            i += 1  # Increment index of smaller element
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quicksort(arr, low=None, high=None):
    """
    The main function that implements QuickSort
    arr[] --> Array to be sorted
    low --> Starting index
    high --> Ending index
    """
    # Initialize low and high for first call
    if low is None:
        low = 0
    if high is None:
        high = len(arr) - 1

    if low < high:
        # pi is partitioning index, arr[pi] is now at right place
        pi = partition(arr, low, high)

        # Separately sort elements before partition and after partition
        quicksort(arr, low, pi - 1)
        quicksort(arr, pi + 1, high)
    
    return arr

# Example usage:
if __name__ == "__main__":
    # This will be useful for testing in the next step
    test_array = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", test_array)
    sorted_array = quicksort(test_array.copy())
    print("Sorted array:", sorted_array)
