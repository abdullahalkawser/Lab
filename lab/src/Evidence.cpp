#include "../include/Evidence.h"
#include <iostream>
#include <vector>
#include <sstream>

EvidenceNode::EvidenceNode(std::string id, std::string caseId, std::string type, std::string desc, std::string date, bool verified, std::string cs)
    : evidenceId(id), relatedCaseId(caseId), evidenceType(type), evidenceDescription(desc),
      collectionDate(date), isVerified(verified), checksum(cs), next(nullptr) {
    if(checksum.empty()) checksum = generateChecksum();
}

std::string EvidenceNode::generateChecksum() const {
    // Simple simulated checksum: just combine ID and Type
    return "CS-" + evidenceId + "-" + evidenceType;
}

std::string EvidenceNode::serialize() const {
    std::stringstream ss;
    ss << evidenceId << "|" << relatedCaseId << "|" << evidenceType << "|" << evidenceDescription << "|"
       << collectionDate << "|" << isVerified << "|" << checksum;
    return ss.str();
}

EvidenceNode* EvidenceNode::deserialize(const std::string& line) {
    std::stringstream ss(line);
    std::string item;
    std::vector<std::string> tokens;
    while(std::getline(ss, item, '|')) {
        tokens.push_back(item);
    }
    if(tokens.size() < 7) return nullptr;
    return new EvidenceNode(tokens[0], tokens[1], tokens[2], tokens[3], tokens[4], (bool)std::stoi(tokens[5]), tokens[6]);
}

void EvidenceNode::display() const {
    std::cout << "Evidence ID: " << evidenceId << " | Case: " << relatedCaseId << std::endl;
    std::cout << "Type: " << evidenceType << " | Verified: " << (isVerified ? "YES" : "NO") << std::endl;
    std::cout << "Desc: " << evidenceDescription << std::endl;
}

EvidenceLinkedList::EvidenceLinkedList() : head(nullptr), count(0) {}

EvidenceLinkedList::~EvidenceLinkedList() { clear(); }

void EvidenceLinkedList::insertEvidence(std::string id, std::string caseId, std::string type, std::string desc, std::string date, bool verified, std::string checksum) {
    EvidenceNode* newNode = new EvidenceNode(id, caseId, type, desc, date, verified, checksum);
    newNode->next = head;
    head = newNode;
    count++;
}

bool EvidenceLinkedList::deleteEvidence(const std::string& id) {
    EvidenceNode* curr = head;
    EvidenceNode* prev = nullptr;
    while(curr) {
        if(curr->evidenceId == id) {
            if(prev) prev->next = curr->next;
            else head = curr->next;
            delete curr;
            count--;
            return true;
        }
        prev = curr;
        curr = curr->next;
    }
    return false;
}

EvidenceNode* EvidenceLinkedList::searchEvidence(const std::string& id) const {
    EvidenceNode* curr = head;
    while(curr) {
        if(curr->evidenceId == id) return curr;
        curr = curr->next;
    }
    return nullptr;
}

void EvidenceLinkedList::displayAll() const {
    EvidenceNode* curr = head;
    while(curr) {
        curr->display();
        std::cout << "---------------------------------" << std::endl;
        curr = curr->next;
    }
}

bool EvidenceLinkedList::verifyEvidence(const std::string& id) {
    EvidenceNode* node = searchEvidence(id);
    if(node) {
        node->isVerified = true;
        return true;
    }
    return false;
}

int EvidenceLinkedList::getCount() const { return count; }

void EvidenceLinkedList::clear() {
    EvidenceNode* curr = head;
    while(curr) {
        EvidenceNode* temp = curr;
        curr = curr->next;
        delete temp;
    }
    head = nullptr;
    count = 0;
}
