#ifndef QUEUE_H
#define QUEUE_H

#include <string>
#include <iostream>

struct QueueNode {
    std::string requestId;
    std::string requestDetails;
    QueueNode* next;

    QueueNode(std::string id, std::string det) : requestId(id), requestDetails(det), next(nullptr) {}
};

class InvestigationQueue {
private:
    QueueNode* frontNode;
    QueueNode* rearNode;
    int sizeCount;

public:
    InvestigationQueue();
    ~InvestigationQueue();

    void enqueue(const std::string& id, const std::string& details);
    bool dequeue(std::string& id, std::string& details);
    bool peekFront(std::string& id, std::string& details) const;
    bool peekRear(std::string& id, std::string& details) const;
    bool isEmpty() const;
    int size() const;
    void display() const;
    void clear();
};

#endif
