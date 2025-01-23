#!/bin/bash

# Task 1: Directory Management
echo "creating a directory name project_file in /home directory"
mkdir /home/sirjula/project_files

# Task 2: User and Group Management
echo "creating a new group named developers"
sudo groupadd developers

echo "creating a new user named intern_user"
sudo useradd intern_user

echo "Adding intern_user to the developers group"
sudo Usermod -aG developers intern_user

echo "setting a password for the user" 
sudo passwd intern_user

# Task 3: Permissions and Ownership
echo " Change the ownership of the "project_files" directory to intern_user and group developers"
sudo chown intern_user:developers /home/sirjula/project_files

echo "Set appropriate permissions to owners group others"
sudo chmod 750 /home/sirjula/project_files

# Task 4: Additional Tasks
echo "----- Task 4: Additional Tasks -----"
sudo touch /home/sirjula/project_files/welcome.txt
echo "Welcome.txt file created successfully."

# Write the creation date and time to welcome.txt
echo "Creation Date: $(date)" | sudo tee /home/sirjula/project_files/welcome.txt

# Append the directory path to the file
echo "Directory Path: /home/sirjula/project_files" | sudo tee -a /home/sirjula/project_files/welcome.txt 

# Append the owner of the directory to the file
echo "Owner: $(stat -c '%U' /home/sirjula/project_files)" | sudo tee -a /home/sirjula/project_files/welcome.txt

# Append the group of the directory to the file
echo "Group: $(stat -c '%G' /home/sirjula/project_files)" | sudo tee -a /home/sirjula/project_files/welcome.txt 

# Set appropriate permissions for welcome.txt
sudo chmod 744 /home/sirjula/project_files/welcome.txt

echo ""

# Task 5: Verification
echo "Verifying directory creation and permissions:"
ls -ld /home/sirjula/project_files
echo ""

echo "Verifying user creation and group membership:"
id intern_user
echo ""

echo "Verifying file creation and contents:"
sudo cat /home/sirjula/project_files/welcome.txt
echo ""


