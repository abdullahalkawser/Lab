#include "../include/Animation.h"
#include <iostream>
#include <thread>
#include <chrono>
#include <cstdlib>

void Animation::showBootScreen() {
    std::cout << "\033[2J\033[1;1H";
    std::cout << "\033[1;36m";
    std::cout << "  ____ _   _ ____  _____ ____     ____  _   _ ___ _____ _     _     \n";
    std::cout << " / ___| | | | __ )| ____|  _ \\   / ___|| | | |_ _| ____| |   | |    \n";
    std::cout << "| |   | |_| |  _ \\|  _| | |_) |  \\___ \\| |_| || ||  _| | |   | |    \n";
    std::cout << "| |___|  _  | |_) | |___|  _ <    ___) |  _  || || |___| |___| |___\n";
    std::cout << " \\____|_| |_|____/|_____|_| \\_\\  |____/|_| |_|___|_____|_____|_____|\n";
    std::cout << "\033[0m\n";
    std::cout << "\033[1;32m INVESTIGATE. ANALYZE. DETECT. PROTECT.\033[0m\n\n";
    std::cout << "Initializing Cyber Shield Core Systems...\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(1000));
}

void Animation::showASCIIShield() {
    std::cout << "\033[1;34m";
    std::cout << "          /\\\n";
    std::cout << "         /  \\\n";
    std::cout << "        / /\\ \\\n";
    std::cout << "       / /  \\ \\\n";
    std::cout << "      / /    \\ \\\n";
    std::cout << "     / /======\\ \\\n";
    std::cout << "    /_/        \\_\\\n";
    std::cout << "    [ CYBER SHIELD ]\n";
    std::cout << "\033[0m\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(800));
}

void Animation::showMatrixRain() {
    std::cout << "\033[1;32m[Matrix Rain Simulation Active]\033[0m\n";
    for(int i=0; i<10; ++i) {
        std::cout << "10101011010010101101010010110101010101010\n";
        std::this_thread::sleep_for(std::chrono::milliseconds(50));
    }
}

void Animation::showInvestigationRadar() {
    std::cout << "\033[1;36m[Radar Scanning Network Targets...]\033[0m\n";
    std::cout << "  ( ( ( * ) ) ) Target CS1001 Detected [IP: 192.168.1.45]\n";
    std::this_thread::sleep_for(std::chrono::milliseconds(800));
}

void Animation::showLoadingBar() {
    int barWidth = 40;
    for (int i = 0; i <= 100; i += 10) {
        std::cout << "\rLoading Modules [";
        int pos = barWidth * i / 100;
        for (int j = 0; j < barWidth; ++j) {
            if (j < pos) std::cout << "=";
            else if (j == pos) std::cout << ">";
            else std::cout << " ";
        }
        std::cout << "] " << i << " %" << std::flush;
        std::this_thread::sleep_for(std::chrono::milliseconds(80));
    }
    std::cout << "\n";
}
