#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re
import os

# Functions
def isMatching(testedString, valueArray):
    for value in valueArray:
        if testedString.find(value) >= 0:
            return True
    return False

def process(fIn, fOut):

    # https://sk.wikipedia.org/wiki/Akademick%C3%BD_titul
    uni_1_degrees = ["Bc."]
    uni_2_degrees = ["Mgr.", "Mgr. art.", "RNDr.", "PharmDr.", "PhDr.", "JUDr.", "PaedDr.", "ThDr.", "MSc.", "Ing.", "Ing. arch.", "MUDr.", "MDDr.", "MVDr.", "ThLic.", "MSc"]
    uni_2_degrees_old = ["akad. maliar", "akad. sochár", "akad. arch.", "ICDr.", "RCDr.", "RSDr.", "MUC.", "MVc.", "PhMr.", "ThMgr."]
    uni_3_degrees = ["PhD.", "ArtD.", "Dr."]

    enterpreneur = ["živnostn", "podnikate", "SZČO"]

    result = ''

    # Statistics
    candidates = 0  # No. of all candidates
    uni_1 = 0       # No. of all candidates with Bc. degree
    uni_2 = 0       # - || - Master degree
    uni_3 = 0       # - || - Doctoral degree
    age_sum = 0     # sum of all candidates ages (for avg calculation)
    age_25 = 0      # No. of candidates with age < 25
    age_25_35 = 0   # No. of candidates with age in interval <25, 35)
    age_35_45 = 0   # No. of candidates with age in interval <35, 45)
    age_45_55 = 0   # No. of candidates with age in interval <45, 55)
    age_55_65 = 0   # No. of candidates with age in interval <55, 65)
    age_65 = 0      # No. of candidates with age >= 65
    jobs = {"enterpreneur": 0, "unemployed": 0, "retiree": 0}
    cities = {"Bratislava": 0, "Košice": 0, "Prešov": 0, "Nitra": 0, "Žilina": 0, "Banská Bystrica": 0, "Trnava": 0, ", Martin": 0, "Trenčín": 0, "Poprad": 0, "Piešťany": 0}


    for line in fIn:
        if line.find("Číslo kandidátnej listiny") >= 0:
            result = result + re.search("[0-9]+", line).group(0) + ";"
        if line.find("Názov politickej strany") >= 0:
            result = result + re.sub(".+[:][ ]", "", line).strip() + ";"

        # Line with candidate
        if len(re.findall("^[1-9][0-9]{0,2}[.][ ]", line)) > 0:
            candidates += 1

            # Education
            if isMatching(line, uni_3_degrees):
                uni_3 += 1
            elif isMatching(line, uni_2_degrees) or isMatching(line, uni_2_degrees_old):
                uni_2 += 1
            elif isMatching(line, uni_1_degrees):
                uni_1 += 1

            # Age
            age = int((re.search("[1-9][0-9][ ][r][.][,]", line).group(0))[:2])
            age_sum = age_sum + age
            if age < 25:
                age_25 += 1
            elif age >= 25 and age < 35:
                age_25_35 += 1
            elif age >= 35 and age < 45:
                age_35_45 += 1
            elif age >= 45 and age < 55:
                age_45_55 += 1
            elif age >= 55 and age < 65:
                age_55_65 += 1
            else:
                age_65 += 1

            # Jobs
            if isMatching(line, enterpreneur):
                jobs["enterpreneur"] += 1
            elif isMatching(line, ["nezamestna"]):
                jobs["unemployed"] += 1
            elif isMatching(line, ["dôchod"]):
                jobs["retiree"] += 1

            # Cities
            for k, v in cities.items():
                if isMatching(line, [k]):
                    cities[k] += 1
                    break

    result = result + str(candidates) + ";" + str(uni_1) + ";" + str(uni_2) + ";" + str(uni_3) + ";" + str(age_25) + ";" + str(age_25_35) + ";" + str(age_35_45) + ";" + str(age_45_55) + ";" + str(age_55_65) + ";" + str(age_65) + ";" + str(age_sum / candidates) + ";" + str(jobs["retiree"]) + ";" + str(jobs["enterpreneur"]) + ";" + str(jobs["unemployed"]) + ";" + str(cities["Bratislava"]) + ";" + str(cities["Košice"]) + ";" + str(cities["Prešov"]) + ";" + str(cities["Nitra"]) + ";" + str(cities["Žilina"]) + ";" + str(cities["Banská Bystrica"]) + ";" + str(cities["Trnava"]) + ";" + str(cities[", Martin"]) + ";" + str(cities["Trenčín"]) + ";" + str(cities["Poprad"]) + ";" + str(cities["Piešťany"])
    fOut.write(result + "\n")

def testFunc(testedFile):
    for line in testedFile:
        splitted = line.strip().split(";")
        if splitted[0] == "12":
            print(splitted[2] == "150")
            print(splitted[3] == "3")
            print(int(splitted[2]) - int(splitted[3]) - int(splitted[4]) - int(splitted[5]) == 29)
            print(splitted[6] == "3")
            print(splitted[9] == "36")
            print(splitted[11] == "2")
            print(splitted[13] == "0")
            print(splitted[14] == "17")
            print(splitted[15] == "0")
            print(splitted[16] == "50") # BA
            print(splitted[17] == "5")
            print(splitted[26] == "2")


fOut = open("./output.csv", "w")
fOut.write("cislo_listiny;nazov_strany;kandidati;vs_1_stupen;vs_2_stupen;vs_3_stupen;vek_pod_25;vek_25_35;vek_35_45;vek_45_55;vek_55_65;vek_nad_65;vek_priem;dochodci;zivnostnici;nezamestnani;ba;ke;po;nr;za;bb;tt;mt;tr;pp;pn\n")

for f in os.listdir("files"):
    if f.endswith('.txt'):
        fIn = open("files/" + f, "r")
        process(fIn, fOut)
        fIn.close()

fOut.close()

# Run tests
# f = open("./output.csv", "r")
# testFunc(f)
# fOut.close()