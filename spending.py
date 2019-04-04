import csv
data = []

with open('data/csd_expend.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        # data ranges from 2004 - 2012
        data.append(row)


def search():
    #categories
    #school spending per student
    #instructional spending
    #instructional support services
    #leadership support services
    #ancillary support services
    #building services
    pass

print(data)
