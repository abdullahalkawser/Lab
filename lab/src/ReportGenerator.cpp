#include "../include/ReportGenerator.h"
#include <fstream>
#include <iostream>
#include <iomanip>

bool ReportGenerator::generateTXTReport(const std::string& filename, const ArrayOperations& caseOps, const EvidenceLinkedList& evidenceList, const std::vector<Suspect>& suspects, const ActivityStack& activityHistory) {
    std::ofstream outFile(filename);
    if(!outFile.is_open()) return false;

    outFile << "=========================================================================\n";
    outFile << "               CYBER SHIELD - DIGITAL FORENSICS & INVESTIGATION REPORT    \n";
    outFile << "=========================================================================\n\n";

    outFile << "--- 1. CASE SUMMARY ---\n";
    outFile << "Total Cases: " << caseOps.size() << "\n\n";
    for(size_t i = 0; i < (size_t)caseOps.size(); ++i) {
        const Case& c = caseOps.getAt(i);
        outFile << "Case ID: " << c.getCaseId() << "\n"
                << "Title: " << c.getCaseTitle() << "\n"
                << "Category: " << c.getCategoryString() << "\n"
                << "Priority: " << c.getPriorityString() << "\n"
                << "Status: " << c.getStatusString() << "\n"
                << "Suspect: " << c.getSuspectName() << " (ID: " << c.getSuspectId() << ")\n"
                << "Description: " << c.getCaseDescription() << "\n"
                << "-------------------------------------------------------------------------\n";
    }

    outFile << "\n--- 2. SUSPECT PROFILES ---\n";
    outFile << "Total Suspects: " << suspects.size() << "\n\n";
    for(const auto& s : suspects) {
        outFile << "Suspect ID: " << s.getSuspectId() << " | Name: " << s.getFullName() << "\n"
                << "Age: " << s.getAge() << " | Nationality: " << s.getNationality() << "\n"
                << "Risk Score: " << s.getRiskScore() << " (" << s.getRiskLevelString() << ")\n"
                << "Alias: " << s.getAlias() << " | IP: " << s.getIpAddress() << "\n"
                << "Linked Cases: " << s.getLinkedCases() << "\n"
                << "-------------------------------------------------------------------------\n";
    }

    outFile << "\n--- 3. EVIDENCE RECORD SUMMARY ---\n";
    outFile << "Total Evidence Items: " << evidenceList.getCount() << "\n\n";
    EvidenceNode* currEv = evidenceList.getHead();
    while(currEv) {
        outFile << "Evidence ID: " << currEv->evidenceId << " | Case ID: " << currEv->relatedCaseId << "\n"
                << "Type: " << currEv->evidenceType << "\n"
                << "Verification Status: " << (currEv->isVerified ? "VERIFIED" : "UNVERIFIED") << "\n"
                << "Checksum: " << currEv->checksum << "\n"
                << "Description: " << currEv->evidenceDescription << "\n"
                << "-------------------------------------------------------------------------\n";
        currEv = currEv->next;
    }

    outFile.close();
    return true;
}

bool ReportGenerator::generateCSVReport(const std::string& filename, const ArrayOperations& caseOps) {
    std::ofstream outFile(filename);
    if(!outFile.is_open()) return false;

    outFile << "CaseID,CaseTitle,Category,Priority,Status,SuspectID,Date\n";
    for(size_t i = 0; i < (size_t)caseOps.size(); ++i) {
        const Case& c = caseOps.getAt(i);
        outFile << "\"" << c.getCaseId() << "\","
                << "\"" << c.getCaseTitle() << "\","
                << "\"" << c.getCategoryString() << "\","
                << "\"" << c.getPriorityString() << "\","
                << "\"" << c.getStatusString() << "\","
                << "\"" << c.getSuspectId() << "\","
                << "\"" << c.getDate() << "\"\n";
    }

    outFile.close();
    return true;
}
