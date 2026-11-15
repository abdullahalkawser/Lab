#ifndef EVIDENCE_H
#define EVIDENCE_H

#include <string>
#include <iostream>

class EvidenceNode {
public:
    std::string evidenceId;
    std::string relatedCaseId;
    std::string evidenceType; // e.g., Network Logs, Hard Drive Image, Email Dump, RAM Dump
    std::string evidenceDescription;
    std::string collectionDate;
    bool isVerified;
    std::string checksum;
    EvidenceNode* next;

    EvidenceNode(std::string id, std::string caseId, std::string type, std::string desc, std::string date, bool verified = false, std::string cs = "");

    std::string generateChecksum() const;
    std::string serialize() const;
    static EvidenceNode* deserialize(const std::string& line);
    void display() const;
};

class EvidenceLinkedList {
private:
    EvidenceNode* head;
    int count;

public:
    EvidenceLinkedList();
    ~EvidenceLinkedList();

    void insertEvidence(std::string id, std::string caseId, std::string type, std::string desc, std::string date, bool verified = false, std::string checksum = "");
    bool deleteEvidence(const std::string& id);
    EvidenceNode* searchEvidence(const std::string& id) const;
    void displayAll() const;
    void displayByCase(const std::string& caseId) const;
    bool verifyEvidence(const std::string& id);

    int getCount() const;
    EvidenceNode* getHead() const { return head; }

    void saveToFile(const std::string& filename) const;
    void loadFromFile(const std::string& filename);
    void clear();
};

#endif
