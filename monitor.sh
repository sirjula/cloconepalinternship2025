#!/bin/bash
#List top 5 resource-heavy processes and append to log file
echo "Top 5 resources"
ps -eo pid,ppid,%cpu,%mem --sort=-%cpu | head -n 6 >> /home/sirjula/Desktop/Intern/Day2-jan21/cronjob/monitor.log

# Get current timestamp
Timestamp=$(date "+%Y-%m-%d %H:%M:%S")
echo "Log file created on $Timestamp" >> /home/sirjula/Desktop/Intern/Day2-jan21/cronjob/monitor.log
echo "--------------------------------">> /home/sirjula/Desktop/Intern/Day2-jan21/cronjob/monitor.log