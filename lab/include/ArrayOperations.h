#ifndef ARRAY_OPERATIONS_H
#define ARRAY_OPERATIONS_H

#include "Case.h"
#include <vector>
#include <string>

class ArrayOperations {
private:
    std::vector<Case> cases;
    int capacity;

public:
    ArrayOperations(int cap = 100);

    bool insertCase(const Case& c);
    bool deleteCase(const std::string& caseId);
    bool updateCase(const std::string& caseId, const Case& updatedCase);
    Case* searchById(const std::string& caseId);
    void displayAll() const;
    void traverseAndReport() const;

    int size() const;
    bool isEmpty() const;
    Case& getAt(int index) { return cases[index]; }
    const Case& getAt(int index) const { return cases[index]; }
    void setCases(const std::vector<Case>& cList) { cases = cList; }
    std::vector<Case>& getCases() { return cases; }
    const std::vector<Case>& getCases() const { return cases; }

    void clear();
};

#endif
