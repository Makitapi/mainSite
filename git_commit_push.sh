#!/bin/bash

# Script to add, commit, and push changes to Git.
# It takes one argument: the commit message.

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: ./git_commit_push.sh \"Your commit message\""
  exit 1
fi

COMMIT_MESSAGE="$1"

echo "Adding all changes..."
git add .

echo "Committing with message: \"$COMMIT_MESSAGE\"..."
git commit -m "$COMMIT_MESSAGE"

echo "Pushing changes to remote repository..."
git push

echo "Git operations completed."
