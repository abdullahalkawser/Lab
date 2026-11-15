#ifndef REPORT_GENERATOR_H
#define REPORT_GENERATOR_H

#include "ArrayOperations.h"
#include "Evidence.h"
#include "Suspect.h"
#include "Stack.h"
#include <string>

class ReportGenerator {
public:
    static bool generateTXTReport(const std::string& filename, const ArrayOperations& caseOps, const EvidenceLinkedList& evidenceList, const std::vector<Suspect>& suspects, const ActivityStack& activityHistory);
    static bool generateCSVReport(const std::string& filename, const ArrayOperations& caseOps);
};

#endif
