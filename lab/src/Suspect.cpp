#include "../include/Suspect.h"
#include <iostream>
#include <sstream>
#include <vector>

Suspect::Suspect() : suspectId(""), fullName(""), age(0), nationality(""),
                     ipAddress(""), alias(""), riskScore(0), linkedCases(""), backgroundNotes("") {}

Suspect::Suspect(std::string id, std::string name, int ag, std::string nat, std::string ip, std::string al, int score, std::string cases, std::string notes)
    : suspectId(id), fullName(name), age(ag), nationality(nat), ipAddress(ip), alias(al),
      riskScore(score), linkedCases(cases), backgroundNotes(notes) {}

std::string Suspect::getSuspectId() const { return suspectId; }
std::string Suspect::getFullName() const { return fullName; }
int Suspect::getAge() const { return age; }
std::string Suspect::getNationality() const { return nationality; }
std::string Suspect::getIpAddress() const { return ipAddress; }
std::string Suspect::getAlias() const { return alias; }
int Suspect::getRiskScore() const { return riskScore; }

RiskLevel Suspect::getRiskLevel() const {
    if (riskScore < 25) return RiskLevel::LOW;
    if (riskScore < 50) return RiskLevel::MEDIUM;
    if (riskScore < 75) return RiskLevel::HIGH;
    return RiskLevel::CRITICAL;
}

std::string Suspect::getRiskLevelString() const {
    switch (getRiskLevel()) {
        case RiskLevel::LOW: return "LOW";
        case RiskLevel::MEDIUM: return "MEDIUM";
        case RiskLevel::HIGH: return "HIGH";
        case RiskLevel::CRITICAL: return "CRITICAL";
        default: return "UNKNOWN";
    }
}

void Suspect::calculateRiskScore(int maliciousIps, int breachHistory, int financialFraudCount, int darkWebActivity) {
    riskScore = (maliciousIps * 5) + (breachHistory * 10) + (financialFraudCount * 15) + (darkWebActivity * 10);
    if (riskScore > 100) riskScore = 100;
}

void Suspect::display() const {
    std::cout << "Suspect ID: " << suspectId << " | Name: " << fullName << std::endl;
    std::cout << "Risk Score: " << riskScore << " (" << getRiskLevelString() << ")" << std::endl;
    std::cout << "Alias: " << alias << " | Nationality: " << nationality << std::endl;
}

std::string Suspect::serialize() const {
    std::stringstream ss;
    ss << suspectId << "|" << fullName << "|" << age << "|" << nationality << "|"
       << ipAddress << "|" << alias << "|" << riskScore << "|" << linkedCases << "|" << backgroundNotes;
    return ss.str();
}

Suspect Suspect::deserialize(const std::string& line) {
    std::stringstream ss(line);
    std::string item;
    std::vector<std::string> tokens;
    while (std::getline(ss, item, '|')) tokens.push_back(item);
    if (tokens.size() < 9) return Suspect();
    return Suspect(tokens[0], tokens[1], std::stoi(tokens[2]), tokens[3], tokens[4], tokens[5], std::stoi(tokens[6]), tokens[7], tokens[8]);
}
