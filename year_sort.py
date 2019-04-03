#==============================================================
#   Team Poppins
#   Summary of Structures for $ per Student
#
#   YearlyData is a LIST containing dictionaries.
#   For example: YearlyData[30] will return a dictionary
#   with the YEARLY information of distric 30.
#   DISTRICT IS THE INDEX! :D
#
#   Ex:
#   YearlyData[30] is
#
#           {
#               '2006': '15785.36427572',
#               '2007': '16511.70413854',
#               '2004': '13599.20970575',
#               '2005': '14537.10192264',
#               '2008': '17247.01511027',
#               '2009': '17238.6524035',
#               '2011': '16857.31382471',
#               '2010': '17342.72414216',
#               '2012': '16451.87364638'
#           }
#
#
#   Lists a through i are lists that contain all the information
#   for ONE year:
#       a contains 2004 information
#       b contains 2005 information
#       c contains 2006 information
#       d contains 2007 information
#       e contains 2008 information
#       f contains 2009 information
#       g contains 2010 information
#       h contains 2011 information
#       i contains 2012 information
#
#
#   a[1] =
#    {
#       'boro': 'Bronx',
#       'csd': '8',
#       'year': '2004',
#       'grand_total_csd': '14302.27624505',
#       'grand_total_boro': '14972.38671875'
#   }
#
#   i[1] =
#    {
#       'boro': 'Bronx',
#       'csd': '8', 'year':
#       '2012', 'grand_total_csd':
#       '18212.7838962',
#       'grand_total_boro':
#       '18238.63085938'
#    }
#
#
#
#==============================================================
import csv
reader = csv.DictReader(open('./data/hsfix.csv', 'rb'))
dict_list = []
for line in reader:
    dict_list.append(line)\
#print(dict_list[1])

#SORTING DATA IN SEPERATE LISTS VIA YEAR
#==============================================================
#2004
a = list()
for item in dict_list:
    if item['year'] == '2004':
        a.append(item.copy())
print(a[1])
#print(a[10])
#==============================================================
#2005
b = []
for item in dict_list:
    if item['year'] == '2005':
        b.append(item.copy())
#print(b[1])
#print(b[10])
#==============================================================
#2006
c = []
for item in dict_list:
    if item['year'] == '2006':
        c.append(item.copy())
#print(c[1])
#print(c[10])
#==============================================================
#2007
d = []
for item in dict_list:
    if item['year'] == '2007':
        d.append(item.copy())
#print(d[1])
#print(d[10])
#2008
e = []
for item in dict_list:
    if item['year'] == '2008':
        e.append(item.copy())
#print(e[1])
#print(e[10])
#==============================================================
#2009
f = []
for item in dict_list:
    if item['year'] == '2009':
        f.append(item.copy())
#print(f[1])
#print(f[10])
#==============================================================
#2010
g = []
for item in dict_list:
    if item['year'] == '2010':
        g.append(item.copy())
#print(g[1])
#print(g[10])
#==============================================================
#2011
h = []
for item in dict_list:
    if item['year'] == '2011':
        h.append(item.copy())
#print(h[1])
#print(h[10])
#==============================================================
#2012
i = []
for item in dict_list:
    if item['year'] == '2012':
        i.append(item.copy())
print(i[1])
#print(i[10])
#==============================================================

ALLYEARS = [a,b,c,d,e,f,g,h,i]
ALLDIS = range(1,33)
#print(ALLDIS)
YearlyData = ['holder']
#print(ALLYEARS)

for dis in ALLDIS:
    L = []
    for year in ALLYEARS: #this is a LIST of every disctric
        d = {}
        for singleDis in year:
            if singleDis['csd'] == str(dis):
                d['year'] = singleDis['year']
                d['money'] = singleDis['grand_total_csd']
        L.append(d)
    YearlyData.append(L)
    #for every year (x), pull out district (y) and create a dictionary with key

print(YearlyData[30])
