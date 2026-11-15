#ifndef TERMINAL_UI_H
#define TERMINAL_UI_H

#include <string>
#include <vector>

class TerminalUI {
public:
    static void clearScreen();
    static void setCursor(int x, int y);
    static void printHeader(const std::string& title);
    static void printFooter();
    static void printMenu(const std::vector<std::string>& options, int selectedIndex = -1);
    static void printAlert(const std::string& message, bool isError = false);
    static void printProgressBar(float progress, const std::string& message);
    static void colorize(const std::string& color);
    static void resetColor();
};

#endif
