#include "../include/Sorting.h"
#include <iostream>
#include <algorithm>

long long Sorting::dummyRef = 0;

// 1. Bubble Sort
void Sorting::bubbleSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending, long long& comparisons, long long& swaps) {
    comparisons = 0;
    swaps = 0;
    int n = cases.size();
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; ++j) {
            comparisons++;
            bool condition = false;
            if (criteria == SortCriteria::ID) {
                condition = ascending ? (cases[j].getCaseId() > cases[j+1].getCaseId()) : (cases[j].getCaseId() < cases[j+1].getCaseId());
            } else if (criteria == SortCriteria::PRIORITY) {
                condition = ascending ? (cases[j].getPriorityNumeric() > cases[j+1].getPriorityNumeric()) : (cases[j].getPriorityNumeric() < cases[j+1].getPriorityNumeric());
            }
            if (condition) {
                std::swap(cases[j], cases[j+1]);
                swaps++;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
}

void Sorting::bubbleSortSuspects(std::vector<Suspect>& suspects, bool ascending) {
    int n = suspects.size();
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            bool condition = ascending ? (suspects[j].getRiskScore() > suspects[j+1].getRiskScore()) : (suspects[j].getRiskScore() < suspects[j+1].getRiskScore());
            if (condition) {
                std::swap(suspects[j], suspects[j+1]);
            }
        }
    }
}

// 2. Selection Sort
void Sorting::selectionSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending, long long& comparisons, long long& swaps) {
    comparisons = 0;
    swaps = 0;
    int n = cases.size();
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j) {
            comparisons++;
            bool condition = false;
            if (criteria == SortCriteria::ID) {
                condition = ascending ? (cases[j].getCaseId() < cases[minIndex].getCaseId()) : (cases[j].getCaseId() > cases[minIndex].getCaseId());
            } else if (criteria == SortCriteria::PRIORITY) {
                condition = ascending ? (cases[j].getPriorityNumeric() < cases[minIndex].getPriorityNumeric()) : (cases[j].getPriorityNumeric() > cases[minIndex].getPriorityNumeric());
            }
            if (condition) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            std::swap(cases[i], cases[minIndex]);
            swaps++;
        }
    }
}

// 3. Insertion Sort
void Sorting::insertionSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending, long long& comparisons, long long& shifts) {
    comparisons = 0;
    shifts = 0;
    int n = cases.size();
    for (int i = 1; i < n; ++i) {
        Case key = cases[i];
        int j = i - 1;
        while (j >= 0) {
            comparisons++;
            bool condition = false;
            if (criteria == SortCriteria::ID) {
                condition = ascending ? (cases[j].getCaseId() > key.getCaseId()) : (cases[j].getCaseId() < key.getCaseId());
            } else if (criteria == SortCriteria::PRIORITY) {
                condition = ascending ? (cases[j].getPriorityNumeric() > key.getPriorityNumeric()) : (cases[j].getPriorityNumeric() < key.getPriorityNumeric());
            }
            if (condition) {
                cases[j + 1] = cases[j];
                shifts++;
                j--;
            } else {
                break;
            }
        }
        cases[j + 1] = key;
    }
}

// 4. Merge Sort
void Sorting::merge(std::vector<Case>& cases, int left, int mid, int right, SortCriteria criteria, bool ascending, long long& comparisons) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    std::vector<Case> L(cases.begin() + left, cases.begin() + mid + 1);
    std::vector<Case> R(cases.begin() + mid + 1, cases.begin() + right + 1);

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        comparisons++;
        bool condition = false;
        if (criteria == SortCriteria::ID) {
            condition = ascending ? (L[i].getCaseId() <= R[j].getCaseId()) : (L[i].getCaseId() >= R[j].getCaseId());
        } else {
            condition = ascending ? (L[i].getPriorityNumeric() <= R[j].getPriorityNumeric()) : (L[i].getPriorityNumeric() >= R[j].getPriorityNumeric());
        }
        if (condition) {
            cases[k++] = L[i++];
        } else {
            cases[k++] = R[j++];
        }
    }
    while (i < n1) cases[k++] = L[i++];
    while (j < n2) cases[k++] = R[j++];
}

void Sorting::mergeSortHelper(std::vector<Case>& cases, int left, int right, SortCriteria criteria, bool ascending, long long& comparisons) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSortHelper(cases, left, mid, criteria, ascending, comparisons);
        mergeSortHelper(cases, mid + 1, right, criteria, ascending, comparisons);
        merge(cases, left, mid, right, criteria, ascending, comparisons);
    }
}

void Sorting::mergeSortCases(std::vector<Case>& cases, SortCriteria criteria, bool ascending, long long& comparisons) {
    comparisons = 0;
    if (!cases.empty()) {
        mergeSortHelper(cases, 0, cases.size() - 1, criteria, ascending, comparisons);
    }
}

// 5. Counting Sort (by Priority 1-4)
void Sorting::countingSortCasesByPriority(std::vector<Case>& cases) {
    int n = cases.size();
    if (n <= 1) return;
    int maxVal = 4; // Priorities 1 to 4
    std::vector<int> count(maxVal + 1, 0);
    std::vector<Case> output(n);

    for (int i = 0; i < n; ++i) {
        int pri = cases[i].getPriorityNumeric();
        if (pri >= 1 && pri <= 4) count[pri]++;
    }

    for (int i = 1; i <= maxVal; ++i) {
        count[i] += count[i - 1];
    }

    for (int i = n - 1; i >= 0; --i) {
        int pri = cases[i].getPriorityNumeric();
        if (pri >= 1 && pri <= 4) {
            output[count[pri] - 1] = cases[i];
            count[pri]--;
        }
    }
    cases = output;
}

void Sorting::countingSortSuspectsByRisk(std::vector<Suspect>& suspects) {
    int n = suspects.size();
    if (n <= 1) return;
    int maxVal = 100;
    std::vector<int> count(maxVal + 1, 0);
    std::vector<Suspect> output(n);

    for (int i = 0; i < n; ++i) {
        int score = suspects[i].getRiskScore();
        if (score >= 0 && score <= 100) count[score]++;
    }
    for (int i = 1; i <= maxVal; ++i) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; --i) {
        int score = suspects[i].getRiskScore();
        if (score >= 0 && score <= 100) {
            output[count[score] - 1] = suspects[i];
            count[score]--;
        }
    }
    suspects = output;
}

// 6. Radix Sort (for numeric part of Case ID like CS1001 -> 1001)
static int extractCaseNum(const std::string& id) {
    try {
        return std::stoi(id.substr(2));
    } catch (...) {
        return 0;
    }
}

void Sorting::radixSortCases(std::vector<Case>& cases) {
    int n = cases.size();
    if (n <= 1) return;

    int maxNum = 0;
    for (int i = 0; i < n; ++i) {
        int num = extractCaseNum(cases[i].getCaseId());
        if (num > maxNum) maxNum = num;
    }

    for (int exp = 1; maxNum / exp > 0; exp *= 10) {
        std::vector<Case> output(n);
        int count[10] = {0};

        for (int i = 0; i < n; ++i) {
            int num = extractCaseNum(cases[i].getCaseId());
            count[(num / exp) % 10]++;
        }

        for (int i = 1; i < 10; ++i) count[i] += count[i - 1];

        for (int i = n - 1; i >= 0; --i) {
            int num = extractCaseNum(cases[i].getCaseId());
            int idx = (num / exp) % 10;
            output[count[idx] - 1] = cases[i];
            count[idx]--;
        }
        cases = output;
    }
}
