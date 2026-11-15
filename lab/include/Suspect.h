#ifndef SUSPECT_H
#define SUSPECT_H

#include <string>
#include <iostream>
#include <vector>

enum class RiskLevel {
    LOW = 1,
    MEDIUM,
    HIGH,
    CRITICAL
};

class Suspect {
private:
    std::string suspectId;
    std::string fullName;
    int age;
    std::string nationality;
    std::string ipAddress;
    std::string alias;
    int riskScore; // 0 - 100
    std::string linkedCases; // Comma separated case IDs or notes
    std::string backgroundNotes;

public:
    Suspect();
    Suspect(std::string id, std::string name, int ag, std::string nat, std::string ip, std::string al, int score, std::string cases, std::string notes);

    // Getters
    std::string getSuspectId() const;
    std::string getFullName() const;
    int getAge() const;
    std::string getNationality() const;
    std::string getIpAddress() const;
    std::string getAlias() const;
    int getRiskScore() const;
    RiskLevel getRiskLevel() const;
    std::string getRiskLevelString() const;
    std::string getLinkedCases() const { return linkedCases; }
    std::string getBackgroundNotes() const;

    // Setters
    void setFullName(const std::string& name);
    void setAge(int ag);
    void setNationality(const std::string& nat);
    void setIpAddress(const std::string& ip);
    void setAlias(const std::string& al);
    void setRiskScore(int score);
    void setLinkedCases(const std::string& cases);
    void setBackgroundNotes(const std::string& notes);

    void calculateRiskScore(int maliciousIps, int breachHistory, int financialFraudCount, int darkWebActivity);
    void display() const;
    void displaySummary() const;

    std::string serialize() const;
    static Suspect deserialize(const std::string& line);
};

#endif
