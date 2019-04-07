# Poppins- Maggie Zhao, Karen Li, Clara Mohri, Kaitlin Wan

## Description of data sets:
[2015-2016 Demographic Data - Grades 9-12 School](https://catalog.data.gov/dataset/2015-2016-demographic-data-grades-9-12-school)

A collection of data regarding each school, including the demographic breakdown of students that are English language learners, in poverty, reside in temporary housing, or have disabilities.

[New York City School Spending Per Student](https://www.newyorkfed.org/data-and-statistics/data-visualization/nyc-school-spending#interactive/table)

Data that illustrates the progression of various school spending indicators over time and show the variability in school spending indicators across New York City community school districts and boroughs.

[School District Breakdowns](https://data.cityofnewyork.us/Education/School-District-Breakdowns/g3vh-kbnw)

Data on demographic statistics (like the number of students that receive public assistance or the percentage of permanent resident aliens) broken down by school districts.

### Tentative:
[New York City Population by Borough, 1950 - 2040](https://data.cityofnewyork.us/City-Government/New-York-City-Population-by-Borough-1950-2040/xywu-7bv9)

[2016 DOE High School Performance Directory](https://data.cityofnewyork.us/Education/2016-DOE-High-School-Performance-Directory/qvir-knu3)

## Significance:
All of the datasets chosen by our group relate to the breakdown of schools and school districts by students of various socioeconomic statuses. We hope to combine our data to figure out if there is a correlation between things like school performance and school spending or number of non-US citizens.

## Explanation, in broad strokes if necessary, of how you aim to make this data come alive.
The landing page will be a map of New York City split by school districts. Without any user interaction, it will show school spending for each district.

The user will be able to switch between three displays:
- The user will be able to change the map from the landing page to display different information (like school spending, demographic data, etc.)
- The user can switch to a sunburst graph that shows the breakdown of a school/school district.
- The user can switch to a line graph that shows the amount of school spending by year.

We hope to explore and provoke the following questions:
- Does school spending have a significant effect on school performance?
- How can one determine if a school has good performance?
- What makes "successful" schools/school districts different from others?
- How can schools improve their performance?

## Explanation of D3 feature utilization:
We will be using enter/exit selections for filtering the user selection. As the user chooses between different data sets, we will enter the data from the new selection, and exit the data from the previous selection. We would also use event listeners when hovering to provide labels for the data, as shown in the following examples. The user will click to choose between different graphs and different data sets.

## Our visualization
Our website will have graphs that are similar to the following graphs from the [gallery](https://github.com/d3/d3/wiki/Gallery).

Sunburst (will show the demographic breakdown):
![alt text](/doc/breakdown.png "sunburst")

Data Map:
![alt text](/doc/map.png "map")

Line graph
![alt text](/doc/time.png "time")

## Launch Codes
1. Create and open your virtual environment

```
$ python3 -m venv venv
$ . venv/bin/activate
```

2. Clone the Poppins repository

```
$ git clone https://github.com/mzhao3/Poppins.git
```

3. Install dependencies in [requirements.txt] (/requirements.txt)

```
pip install -r requirements.txt
```

4. Run the flask app
```
$ cd Poppins
$ flask run
```

4. Open the flask app in your favorite browser!
  Go to http://127.0.0.1:5000/
