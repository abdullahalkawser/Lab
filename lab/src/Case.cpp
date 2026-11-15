#include "../include/Case.h"
#include <iostream>
#include <sstream>
#include <vector>

Case::Case() : caseId(""), caseTitle(""), category(CrimeCategory::PHISHING),
               suspectName(""), suspectId(""), caseDescription(""),
               priority(Priority::LOW), status(InvestigationStatus::OPEN),
               date(""), evidenceDescription("") {}

Case::Case(std::string id, std::string title, CrimeCategory cat, std::string sName,
           std::string sId, std::string desc, Priority pri, InvestigationStatus stat,
           std::string dt, std::string evDesc)
    : caseId(id), caseTitle(title), category(cat), suspectName(sName), suspectId(sId),
      caseDescription(desc), priority(pri), status(stat), date(dt), evidenceDescription(evDesc) {}

std::string Case::getCaseId() const { return caseId; }
std::string Case::getCaseTitle() const { return caseTitle; }
CrimeCategory Case::getCategory() const { return category; }
std::string Case::getCategoryString() const {
    switch(category) {
        case CrimeCategory::PHISHING: return "Phishing";
        case CrimeCategory::IDENTITY_THEFT: return "Identity Theft";
        case CrimeCategory::ONLINE_FRAUD: return "Online Fraud";
        case CrimeCategory::CYBERBULLYING: return "Cyberbullying";
        case CrimeCategory::DATA_BREACH: return "Data Breach";
        case CrimeCategory::MALWARE_INCIDENT: return "Malware Incident";
        case CrimeCategory::SOCIAL_MEDIA_FRAUD: return "Social Media Fraud";
        default: return "Unknown";
    }
}
std::string Case::getSuspectName() const { return suspectName; }
std::string Case::getSuspectId() const { return suspectId; }
std::string Case::getCaseDescription() const { return caseDescription; }
Priority Case::getPriority() const { return priority; }
std::string Case::getPriorityString() const {
    switch(priority) {
        case Priority::LOW: return "LOW";
        case Priority::MEDIUM: return "MEDIUM";
        case Priority::HIGH: return "HIGH";
        case Priority::CRITICAL: return "CRITICAL";
        default: return "UNKNOWN";
    }
}
int Case::getPriorityNumeric() const { return static_cast<int>(priority); }
InvestigationStatus Case::getStatus() const { return status; }
std::string Case::getStatusString() const {
    switch(status) {
        case InvestigationStatus::OPEN: return "OPEN";
        case InvestigationStatus::IN_PROGRESS: return "IN PROGRESS";
        case InvestigationStatus::PENDING_EVIDENCE: return "PENDING EVIDENCE";
        case InvestigationStatus::UNDER_REVIEW: return "UNDER REVIEW";
        case InvestigationStatus::CLOSED: return "CLOSED";
        case InvestigationStatus::SOLVED: return "SOLVED";
        default: return "UNKNOWN";
    }
}
std::string Case::getDate() const { return date; }
std::string Case::getEvidenceDescription() const { return evidenceDescription; }

void Case::setCaseTitle(const std::string& title) { caseTitle = title; }
void Case::setCategory(CrimeCategory cat) { category = cat; }
void Case::setSuspectName(const std::string& name) { suspectName = name; }
void Case::setSuspectId(const std::string& id) { suspectId = id; }
void Case::setCaseDescription(const std::string& desc) { caseDescription = desc; }
void Case::setPriority(Priority pri) { priority = pri; }
void Case::setStatus(InvestigationStatus stat) { status = stat; }
void Case::setDate(const std::string& dt) { date = dt; }
void Case::setEvidenceDescription(const std::string& evDesc) { evidenceDescription = evDesc; }

void Case::display() const {
    std::cout << "Case ID: " << caseId << " | Title: " << caseTitle << std::endl;
    std::cout << "Category: " << getCategoryString() << " | Priority: " << getPriorityString() << std::endl;
    std::cout << "Suspect: " << suspectName << " (ID: " << suspectId << ")" << std::endl;
    std::cout << "Status: " << getStatusString() << " | Date: " << date << std::endl;
    std::cout << "Description: " << caseDescription << std::endl;
    std::cout << "Evidence: " << evidenceDescription << std::endl;
}

void Case::displaySummary() const {
    std::cout << "[" << caseId << "] " << caseTitle << " | " << getPriorityString() << " | " << getStatusString() << std::endl;
}

std::string Case::serialize() const {
    std::stringstream ss;
    ss << caseId << "|" << caseTitle << "|" << (int)category << "|" << suspectName << "|"
       << suspectId << "|" << caseDescription << "|" << (int)priority << "|" << (int)status
       << "|" << date << "|" << evidenceDescription;
    return ss.str();
}

Case Case::deserialize(const std::string& line) {
    std::stringstream ss(line);
    std::string item;
    std::vector<std::string> tokens;
    while(std::getline(ss, item, '|')) {
        tokens.push_back(item);
    }
    if(tokens.size() < 10) return Case();
    return Case(tokens[0], tokens[1], (CrimeCategory)std::stoi(tokens[2]), tokens[3],
                tokens[4], tokens[5], (Priority)std::stoi(tokens[6]), (InvestigationStatus)std::stoi(tokens[7]),
                tokens[8], tokens[9]);
}

CrimeCategory Case::stringToCategory(const std::string&) { return CrimeCategory::PHISHING; }
Priority Case::stringToPriority(const std::string&) { return Priority::LOW; }
InvestigationStatus Case::stringToStatus(const std::string&) { return InvestigationStatus::OPEN; }
