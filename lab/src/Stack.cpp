#include "../include/Stack.h"
#include <iostream>
#include <vector>

ActivityStack::ActivityStack() : topNode(nullptr), sizeCount(0) {}

ActivityStack::~ActivityStack() { clear(); }

void ActivityStack::push(const std::string& timestamp, const std::string& activity) {
    StackNode* newNode = new StackNode(timestamp, activity);
    newNode->next = topNode;
    topNode = newNode;
    sizeCount++;
}

bool ActivityStack::pop(std::string& timestamp, std::string& activity) {
    if (!topNode) return false;
    StackNode* temp = topNode;
    timestamp = temp->timestamp;
    activity = temp->activity;
    topNode = topNode->next;
    delete temp;
    sizeCount--;
    return true;
}

void ActivityStack::display() const {
    StackNode* curr = topNode;
    while(curr) {
        std::cout << "[" << curr->timestamp << "] " << curr->activity << std::endl;
        curr = curr->next;
    }
}

void ActivityStack::clear() {
    while(topNode) {
        StackNode* temp = topNode;
        topNode = topNode->next;
        delete temp;
    }
    sizeCount = 0;
}
