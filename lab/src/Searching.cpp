#include "../include/Searching.h"
#include <iostream>
#include <algorithm>

int Searching::linearSearchCaseById(const std::vector<Case>& cases, const std::string& targetId, int& comparisons) {
    comparisons = 0;
    for (size_t i = 0; i < cases.size(); ++i) {
        comparisons++;
        if (cases[i].getCaseId() == targetId) {
            return i;
        }
    }
    return -1;
}

std::vector<int> Searching::linearSearchCaseByTitle(const std::vector<Case>& cases, const std::string& targetTitle, int& comparisons) {
    comparisons = 0;
    std::vector<int> results;
    for (size_t i = 0; i < cases.size(); ++i) {
        comparisons++;
        if (cases[i].getCaseTitle().find(targetTitle) != std::string::npos) {
            results.push_back(i);
        }
    }
    return results;
}

int Searching::binarySearchCaseById(const std::vector<Case>& cases, const std::string& targetId, int& comparisons) {
    comparisons = 0;
    int left = 0;
    int right = cases.size() - 1;

    while (left <= right) {
        comparisons++;
        int mid = left + (right - left) / 2;
        if (cases[mid].getCaseId() == targetId) {
            return mid;
        }
        if (cases[mid].getCaseId() < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int Searching::linearSearchSuspectById(const std::vector<Suspect>& suspects, const std::string& targetId, int& comparisons) {
    comparisons = 0;
    for (size_t i = 0; i < suspects.size(); ++i) {
        comparisons++;
        if (suspects[i].getSuspectId() == targetId) {
            return i;
        }
    }
    return -1;
}

int Searching::binarySearchSuspectById(const std::vector<Suspect>& suspects, const std::string& targetId, int& comparisons) {
    comparisons = 0;
    int left = 0;
    int right = suspects.size() - 1;
    while (left <= right) {
        comparisons++;
        int mid = left + (right - left) / 2;
        if (suspects[mid].getSuspectId() == targetId) return mid;
        if (suspects[mid].getSuspectId() < targetId) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
