import os
import sys


SUM = 0

def file_extension(path): 
    return os.path.splitext(path)[1]

def main(path):
    global SUM
    if path[-1] != '/':
        path = path + '/'
    for d in os.listdir(path):
        dpath = path + d
        if os.path.isfile(dpath):
            if file_extension(dpath) in [".vue",".js"]:
                count = 0
                with open(dpath, 'r', encoding='utf8', errors='ignore') as file:
                    for line in file:
                        if line != '\n' and line[0:1] != '//' and line[0] != '#':
                            count = count + 1
                print(dpath, 'lines=', count)
                SUM = SUM + count
        else:
            main(dpath)


if __name__ == '__main__':
    main(sys.argv[1])
    print(SUM)