#include "../include/TerminalUI.h"
#include <iostream>
#include <cstdlib>
#include <thread>
#include <chrono>

void TerminalUI::clearScreen() {
    std::cout << "\033[2J\033[1;1H";
}

void TerminalUI::printHeader(const std::string& title) {
    clearScreen();
    std::cout << "\033[1;36m============================================================\033[0m\n";
    std::cout << "\033[1;32m         CYBER SHIELD - CYBER CRIME INVESTIGATION SYSTEM     \033[0m\n";
    std::cout << "\033[1;36m============================================================\033[0m\n";
    std::cout << "\033[1;33m [ MODULE: " << title << " ]\033[0m\n";
    std::cout << "\033[1;36m------------------------------------------------------------\033[0m\n";
}

void TerminalUI::printFooter() {
    std::cout << "\033[1;36m------------------------------------------------------------\033[0m\n";
    std::cout << "\033[1;33mPress ENTER to continue...\033[0m";
    std::cin.get();
}

void TerminalUI::printAlert(const std::string& message, bool isError) {
    if(isError) {
        std::cout << "\033[1;31m[!] ERROR: " << message << "\033[0m\n";
    } else {
        std::cout << "\033[1;32m[+] SUCCESS: " << message << "\033[0m\n";
    }
}

void TerminalUI::printProgressBar(float progress, const std::string& message) {
    int barWidth = 30;
    std::cout << "\r" << message << " [";
    int pos = barWidth * progress;
    for (int i = 0; i < barWidth; ++i) {
        if (i < pos) std::cout << "=";
        else if (i == pos) std::cout << ">";
        else std::cout << " ";
    }
    std::cout << "] " << int(progress * 100.0) << " %" << std::flush;
}
