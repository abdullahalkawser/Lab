#include "../include/Queue.h"
#include <iostream>

InvestigationQueue::InvestigationQueue() : frontNode(nullptr), rearNode(nullptr), sizeCount(0) {}

InvestigationQueue::~InvestigationQueue() { clear(); }

void InvestigationQueue::enqueue(const std::string& id, const std::string& details) {
    QueueNode* newNode = new QueueNode(id, details);
    if(rearNode == nullptr) {
        frontNode = rearNode = newNode;
    } else {
        rearNode->next = newNode;
        rearNode = newNode;
    }
    sizeCount++;
}

bool InvestigationQueue::dequeue(std::string& id, std::string& details) {
    if(frontNode == nullptr) return false;
    QueueNode* temp = frontNode;
    id = temp->requestId;
    details = temp->requestDetails;
    frontNode = frontNode->next;
    if(frontNode == nullptr) rearNode = nullptr;
    delete temp;
    sizeCount--;
    return true;
}

void InvestigationQueue::display() const {
    QueueNode* curr = frontNode;
    while(curr) {
        std::cout << "[Request ID: " << curr->requestId << "] " << curr->requestDetails << std::endl;
        curr = curr->next;
    }
}

void InvestigationQueue::clear() {
    while(frontNode) {
        QueueNode* temp = frontNode;
        frontNode = frontNode->next;
        delete temp;
    }
    rearNode = nullptr;
    sizeCount = 0;
}
