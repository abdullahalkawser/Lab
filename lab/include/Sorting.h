#ifndef SORTING_H
#define SORTING_H

#include "Case.h"
#include "Suspect.h"
#include <vector>
#include <string>

enum class SortCriteria {
    ID = 1,
    PRIORITY,
    CATEGORY,
    RISK_SCORE
};

class Sorting {
public:
    // 1. Bubble Sort
    static void bubbleSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending = true, long long& comparisons = dummyRef, long long& swaps = dummyRef);
    static void bubbleSortSuspects(std::vector<Suspect>& suspects, bool ascending = true);

    // 2. Selection Sort
    static void selectionSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending = true, long long& comparisons = dummyRef, long long& swaps = dummyRef);

    // 3. Insertion Sort
    static void insertionSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending = true, long long& comparisons = dummyRef, long long& shifts = dummyRef);

    // 4. Merge Sort
    static void mergeSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending = true, long long& comparisons = dummyRef);

    // 5. Counting Sort (for numeric attributes like Priority 1-4 or Risk Score 0-100)
    static void countingSortCasesByPriority(std::vector<Case>& cases);
    static void countingSortSuspectsByRisk(std::vector<Suspect>& suspects);

    // 6. Radix Sort (for numeric Case IDs like CS1001 -> 1001)
    static void radixSortCases(std::vector<Case>& cases);

    static long long dummyRef;

private:
    static void merge(std::vector<Case>& cases, int left, int mid, int right, SortCriteria criteria, bool ascending, long long& comparisons);
    static void mergeSortHelper(std::vector<Case>& cases, int left, int right, SortCriteria criteria, bool ascending, long long& comparisons);
};

#endif
