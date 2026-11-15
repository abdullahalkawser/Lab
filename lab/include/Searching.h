#ifndef SEARCHING_H
#define SEARCHING_H

#include "Case.h"
#include "Suspect.h"
#include <vector>
#include <string>

class Searching {
public:
    // Linear search for Cases by ID, Title, or Category
    static int linearSearchCaseById(const std::vector<Case>& cases, const std::string& targetId, int& comparisons);
    static std::vector<int> linearSearchCaseByTitle(const std::vector<Case>& cases, const std::string& targetTitle, int& comparisons);

    // Binary search for Cases by ID (requires sorted array by ID)
    static int binarySearchCaseById(const std::vector<Case>& cases, const std::string& targetId, int& comparisons);

    // Suspect searching
    static int linearSearchSuspectById(const std::vector<Suspect>& suspects, const std::string& targetId, int& comparisons);
    static int binarySearchSuspectById(const std::vector<Suspect>& suspects, const std::string& targetId, int& comparisons);
};

#endif
