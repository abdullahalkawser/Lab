#include "../include/ArrayOperations.h"
#include <iostream>

ArrayOperations::ArrayOperations(int cap) : capacity(cap) {}

bool ArrayOperations::insertCase(const Case& c) {
    if ((int)cases.size() >= capacity) return false;
    cases.push_back(c);
    return true;
}

bool ArrayOperations::deleteCase(const std::string& caseId) {
    for (size_t i = 0; i < cases.size(); ++i) {
        if (cases[i].getCaseId() == caseId) {
            cases.erase(cases.begin() + i);
            return true;
        }
    }
    return false;
}

bool ArrayOperations::updateCase(const std::string& caseId, const Case& updatedCase) {
    for (size_t i = 0; i < cases.size(); ++i) {
        if (cases[i].getCaseId() == caseId) {
            cases[i] = updatedCase;
            return true;
        }
    }
    return false;
}

Case* ArrayOperations::searchById(const std::string& caseId) {
    for (auto& c : cases) {
        if (c.getCaseId() == caseId) return &c;
    }
    return nullptr;
}

void ArrayOperations::displayAll() const {
    for (const auto& c : cases) {
        c.displaySummary();
    }
}

void ArrayOperations::traverseAndReport() const {
    std::cout << "\n--- Traversal of Case Array ---\n";
    for (size_t i = 0; i < cases.size(); ++i) {
        std::cout << "Index [" << i << "]: ";
        cases[i].displaySummary();
    }
}

int ArrayOperations::size() const { return cases.size(); }
bool ArrayOperations::isEmpty() const { return cases.empty(); }
void ArrayOperations::clear() { cases.clear(); }
