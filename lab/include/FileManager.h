#ifndef FILE_MANAGER_H
#define FILE_MANAGER_H

#include <string>
#include <vector>

class FileManager {
public:
    static bool fileExists(const std::string& filename);
    static void saveCounter(const std::string& filename, int counter);
    static int loadCounter(const std::string& filename);
    // Add save/load functions for various entities if needed
};

#endif
