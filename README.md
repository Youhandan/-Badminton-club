# -Badminton-club
##Introduction
This project is aim to help Xiaoming book badminton venue and do financial statistics in Badminton-club.  It mainly contains two parts. one is to realize the user interface interaction(UI), another is to realize the core logic. 
##How to use
1. Open the link https://youhandan.github.io/-Badminton-club/index.html.
2. Enter each activity information in **Activity List**, the format is *{yyyy-MM-dd HH:mm~HH:mm} {number}*. You can type yourself or add from **Activity Information**. There are some tips you should pay attention.
 + Be sure that each item takes up a line and do not leave blank lines. 
 + The activity date should not be repeated, and time is whole hour. 
 + Time period are 2 hours or 3 hours.
 + Number should be a positive integer (including zero)
3. Click **Generate Summary**, the fiancial summary will show in **Result**.
4. If you want to clear the two show box, just click **Clear List**. 

##Test Example
###Succeed Example
####Example1
2016-10-18 17:00~20:00 50  
####Example2
2016-06-02 20:00~22:00 7  
2016-06-03 09:00~12:00 14  
2016-06-04 14:00~17:00 22  
2016-06-05 19:00~22:00 3  
2016-06-06 12:00~15:00 15  
2016-06-07 15:00~17:00 12  
2016-06-08 10:00~13:00 19  
2016-06-09 16:00~18:00 16  
2016-06-10 20:00~22:00 5  
2016-06-11 13:00~15:00 11
###Fail Example
####Example1 (Repeat date)
2016-06-03 20:00~22:00 7  
2016-06-03 09:00~12:00 14

####Example2 (Wrong input format)
+ 1431553456346
+ 2016-06-0309:00~12:00 14

####Example3 (Wrong date format)
+ 2016-13-03 09:00~12:00 14
+ 2016-06-40 09:00~12:00 14    

####Example4 (Wrong time format)
+ 2016-06-03 09:30~12:00 14 (not whole hour)
+ 2016-06-04 09:00~15:00 14 (more than 3h)
+ 2016-06-05 09:00~10:00 14 (less than 2h)

####Example5 (Wrong number)
+ 2016-06-03 09:00~12:00 -1 (not positive number)
+ 2016-06-03 09:00~12:00 8.5 (not integer)UI

##UI react
+ Enter 8.5 in **Participation** box, it will remain the integer part
+ Enter -1 in **Participation** box, it will alert and set value 0
+ Select **EndTime** and make the time period less than 2h or more than 3h, it will alert
+ Ignore the alert and remain wrong input, click **Add**, it will alert and not add activity item in **Acitivity List** box

**Some other function**  
The page layout can auto adjust when you narrow the browser.
