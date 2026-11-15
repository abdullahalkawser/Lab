#include "../include/FileManager.h"
#include <fstream>
#include <sys/stat.h>

bool FileManager::fileExists(const std::string& filename) {
    struct stat buffer;
    return (stat(filename.c_str(), &buffer) == 0);
}

void FileManager::saveCounter(const std::string& filename, int counter) {
    std::ofstream outFile(filename);
    if(outFile.is_open()) {
        outFile << counter;
        outFile.close();
    }
}

int FileManager::loadCounter(const std::string& filename) {
    if(!fileExists(filename)) return 1005; // Default starting ID counter
    std::ifstream inFile(filename);
    int counter = 1005;
    if(inFile.is_open()) {
        inFile >> counter;
        inFile.close();
    }
    return counter;
}
