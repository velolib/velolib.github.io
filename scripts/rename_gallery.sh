#!/bin/bash

# Define the target directory
TARGET_DIR="src/content/gallery"

# Check if exiftool is installed
if ! command -v exiftool &> /dev/null; then
    echo "Error: exiftool is not installed. Please install it first."
    exit 1
fi

# Check if the directory exists
if [[ ! -d "$TARGET_DIR" ]]; then
    echo "Error: Directory '$TARGET_DIR' does not exist."
    exit 1
fi

# Confirm before proceeding
read -p "Are you sure you want to rename files in '$TARGET_DIR'? (y/N) " CONFIRM
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
    echo "Operation canceled."
    exit 0
fi

# Loop through all files in the target directory
for file in "$TARGET_DIR"/*; do
    if [[ -f "$file" && ! "$(basename "$file")" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}_ ]]; then
        # Try to get EXIF DateTime first
        DATE=$(exiftool -DateTimeOriginal -d "%Y-%m-%d" "$file" 2>/dev/null | sed 's/.*: //')
        
        # If EXIF DateTime is empty, fall back to file modification time
        if [[ -z "$DATE" ]]; then
            DATE=$(date -r "$file" +%Y-%m-%d)
        fi
        
        mv "$file" "$TARGET_DIR/${DATE}_$(basename "$file")"
    fi
done

echo "Files in '$TARGET_DIR' renamed successfully!"