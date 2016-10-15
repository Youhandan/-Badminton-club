# -Badminton-club
##Aim
This project is aim to help Xiaoming book badminton venue and do financial statistics in Badminton-club.  
##Introduction
This project mainly contain three parts. The first part is to realize the user interface interaction(UI). The second part is to realize the core logic. In the third part, including the third-party libraries 'query.min.js', '.ignore file', 'README.md' file(This part will not explain in below).  

In the first part, containing 3 files('index.html', 'indexScript.js', 'style.css'). The UI has two parts, left part is input part, right output part. In the input part, you don not need to text yourself, just select the needed information and add it to 'Activity List'. What's more, it also has some input validation listed as blow. There are some case below.
+ Participation item can't be empty and the input number can't be smaller than 0 or float.
 * When input a float and the item not on focus, it will only keep the integer part. 
 - When input a number smaller than 0, it will alert and set the input number as 0. 
 - When input nothing and click 'Add', it will alert 
+ EndTime should be larger than StartTime. There are some cases below.
 - When select a end time smaller than start time and the item not on focus, it will alert.
 - When select end time first and then select start time, it will verify the item when you cilck 'Add'.  
 When the 'Activity List' complete, click 'Generate Summary', the result will be displayed in the output part. Click 'clear List', it will clear the two show boxes.  
 
In the second part, containing 1 file-'generateSummary.js', which is requred in this work. The specific funcition is shown in the table below.
https://youhandan.github.io/-Badminton-club/index.html
