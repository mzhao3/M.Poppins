#==============================================================
import csv
reader = csv.DictReader(open('./data/hsfix.csv', 'rb'))
dict_list = []
for line in reader:
    dict_list.append(line)\
#print(dict_list[1])
#==============================================================
#2004
a = list()
for item in dict_list:
    if item['year'] == '2004':
        a.append(item.copy())
#print(a[1])
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
print(i[10])
