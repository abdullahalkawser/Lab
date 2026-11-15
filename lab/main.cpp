#include <iostream>
#include <vector>
#include <string>
#include "include/Case.h"
#include "include/Evidence.h"
#include "include/Suspect.h"
#include "include/ArrayOperations.h"
#include "include/Searching.h"
#include "include/Sorting.h"
#include "include/Stack.h"
#include "include/Queue.h"
#include "include/StringAnalyzer.h"
#include "include/TerminalUI.h"
#include "include/Animation.h"
#include "include/ReportGenerator.h"

// Globals for simplicity in this project scope
ArrayOperations g_cases;
EvidenceLinkedList g_evidence;
std::vector<Suspect> g_suspects;
ActivityStack g_history;
InvestigationQueue g_requestQueue;

void showMainMenu() {
    std::cout << "\n============================================================\n";
    std::cout << "                  CYBER SHIELD - DASHBOARD                  \n";
    std::cout << "============================================================\n";
    std::cout << " [01] CASE MANAGEMENT        [10] STRING ANALYZER            \n";
    std::cout << " [02] EVIDENCE MANAGEMENT    [11] INVESTIGATION RADAR       \n";
    std::cout << " [03] SUSPECT MANAGEMENT     [12] REPORT GENERATOR          \n";
    std::cout << " [04] LINEAR SEARCH          [13] ALGORITHM LAB             \n";
    std::cout << " [05] BINARY SEARCH          [14] EXIT SYSTEM               \n";
    std::cout << "============================================================\n";
    std::cout << " Enter choice: ";
}

int main() {
    Animation::showBootScreen();
    Animation::showASCIIShield();
    Animation::showMatrixRain();
    Animation::showInvestigationRadar();
    Animation::showLoadingBar();

    // Sample data
    g_cases.insertCase(Case("CS1001", "Phishing Attack on Bank", CrimeCategory::PHISHING, "John Doe", "SUS101", "Phishing email detected", Priority::CRITICAL, InvestigationStatus::OPEN, "2026-11-16", "Email Header"));
    g_cases.insertCase(Case("CS1002", "Data Breach in Corp", CrimeCategory::DATA_BREACH, "Jane Smith", "SUS102", "DB leak", Priority::HIGH, InvestigationStatus::IN_PROGRESS, "2026-11-16", "Log files"));

    g_suspects.push_back(Suspect("SUS101", "John Doe", 30, "USA", "192.168.1.1", "J_D", 85, "CS1001", "High risk"));
    g_suspects.push_back(Suspect("SUS102", "Jane Smith", 25, "Canada", "10.0.0.1", "J_S", 60, "CS1002", "Medium risk"));

    int choice = 0;
    while(true) {
        showMainMenu();
        std::cin >> choice;
        std::cin.ignore();

        if (choice == 14) break;

        switch(choice) {
            case 1:
                TerminalUI::printHeader("Case Management");
                g_cases.displayAll();
                TerminalUI::printFooter();
                break;
            case 2:
                TerminalUI::printHeader("Evidence Management");
                g_evidence.displayAll();
                TerminalUI::printFooter();
                break;
            case 3:
                TerminalUI::printHeader("Suspect Management");
                for(const auto& s : g_suspects) s.display();
                TerminalUI::printFooter();
                break;
            case 10: {
                TerminalUI::printHeader("String Analyzer");
                std::string input;
                std::cout << "Enter text for analysis: ";
                std::getline(std::cin, input);
                StringAnalyzer::analyze(input);
                TerminalUI::printFooter();
                break;
            }
            case 12: {
                TerminalUI::printHeader("Report Generator");
                ReportGenerator::generateTXTReport("reports/summary.txt", g_cases, g_evidence, g_suspects, g_history);
                TerminalUI::printAlert("Report saved to reports/summary.txt");
                TerminalUI::printFooter();
                break;
            }
            default:
                std::cout << "Invalid choice.\n";
        }
    }

    return 0;
}
