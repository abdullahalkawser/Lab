#ifndef STACK_H
#define STACK_H

#include <string>
#include <iostream>

struct StackNode {
    std::string timestamp;
    std::string activity;
    StackNode* next;

    StackNode(std::string ts, std::string act) : timestamp(ts), activity(act), next(nullptr) {}
};

class ActivityStack {
private:
    StackNode* topNode;
    int sizeCount;

public:
    ActivityStack();
    ~ActivityStack();

    void push(const std::string& timestamp, const std::string& activity);
    bool pop(std::string& timestamp, std::string& activity);
    bool peek(std::string& timestamp, std::string& activity) const;
    bool isEmpty() const;
    int size() const;
    void display() const;
    void clear();

    void saveToFile(const std::string& filename) const;
    void loadFromFile(const std::string& filename);
};

#endif
