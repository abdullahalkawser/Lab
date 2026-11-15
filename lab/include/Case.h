#ifndef CASE_H
#define CASE_H

#include <string>
#include <iostream>

enum class CrimeCategory {
    PHISHING = 1,
    IDENTITY_THEFT,
    ONLINE_FRAUD,
    CYBERBULLYING,
    DATA_BREACH,
    MALWARE_INCIDENT,
    SOCIAL_MEDIA_FRAUD
};

enum class Priority {
    LOW = 1,
    MEDIUM,
    HIGH,
    CRITICAL
};

enum class InvestigationStatus {
    OPEN = 1,
    IN_PROGRESS,
    PENDING_EVIDENCE,
    UNDER_REVIEW,
    CLOSED,
    SOLVED
};

class Case {
private:
    std::string caseId;
    std::string caseTitle;
    CrimeCategory category;
    std::string suspectName;
    std::string suspectId;
    std::string caseDescription;
    Priority priority;
    InvestigationStatus status;
    std::string date;
    std::string evidenceDescription;

public:
    Case();
    Case(std::string id, std::string title, CrimeCategory cat, std::string sName,
         std::string sId, std::string desc, Priority pri, InvestigationStatus stat,
         std::string dt, std::string evDesc);

    // Getters
    std::string getCaseId() const;
    std::string getCaseTitle() const;
    CrimeCategory getCategory() const;
    std::string getCategoryString() const;
    std::string getSuspectName() const;
    std::string getSuspectId() const;
    std::string getCaseDescription() const;
    Priority getPriority() const;
    std::string getPriorityString() const;
    int getPriorityNumeric() const;
    InvestigationStatus getStatus() const;
    std::string getStatusString() const;
    std::string getDate() const;
    std::string getEvidenceDescription() const;

    // Setters
    void setCaseTitle(const std::string& title);
    void setCategory(CrimeCategory cat);
    void setSuspectName(const std::string& name);
    void setSuspectId(const std::string& id);
    void setCaseDescription(const std::string& desc);
    void setPriority(Priority pri);
    void setStatus(InvestigationStatus stat);
    void setDate(const std::string& dt);
    void setEvidenceDescription(const std::string& evDesc);

    void display() const;
    void displaySummary() const;

    // Serialization
    std::string serialize() const;
    static Case deserialize(const std::string& line);

    // Helpers
    static CrimeCategory stringToCategory(const std::string& str);
    static Priority stringToPriority(const std::string& str);
    static InvestigationStatus stringToStatus(const std::string& str);
};

#endif
