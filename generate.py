import pandas as pd

data = pd.read_csv('../yearly_data.csv', index_col='year')
data = data/1000000
# print(data.Total[data.index == 0])
for i in range(0,13):
    # print(i)
    print("{")
    print("\t name: \"{0}\",  TourismAndSports : {1}, SportAndRecreation : {2}, TourismDevelopment : {3}, PhysicalEducation : {4}".format(data.index[i],data['Tourism and Sports'].values[i],data['Sport and Recreation'].values[i],data['Tourism development'].values[i],data['Physical Education'].values[i]))
    print("},")
