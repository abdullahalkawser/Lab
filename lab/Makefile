CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -Iinclude

SRCS = main.cpp \
       src/Case.cpp \
       src/Evidence.cpp \
       src/Suspect.cpp \
       src/ArrayOperations.cpp \
       src/Searching.cpp \
       src/Sorting.cpp \
       src/Stack.cpp \
       src/Queue.cpp \
       src/StringAnalyzer.cpp \
       src/TerminalUI.cpp \
       src/Animation.cpp \
       src/FileManager.cpp \
       src/ReportGenerator.cpp

OBJS = $(SRCS:.cpp=.o)

TARGET = cyber_shield

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $@ $^

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)

.PHONY: all clean
