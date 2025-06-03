# Active Context

## Current Work Focus
The immediate task is to create a shell script named `git_commit_push.sh`. This script will:
1. Accept a commit message as a command-line argument.
2. Execute `git add .`.
3. Execute `git commit -m "message"`, where "message" is the provided argument.
4. Execute `git push`.

## Recent Changes
- Initialized the Memory Bank by creating `projectbrief.md` and `productContext.md`.

## Next Steps
1. Create `systemPatterns.md`.
2. Create `techContext.md`.
3. Create `progress.md`.
4. Create the `git_commit_push.sh` script.
5. Make the script executable.
6. Test the script.

## Active Decisions and Considerations
- The script should be placed in the root of the project for now.
- Error handling for the script (e.g., no commit message provided) will be considered after the basic functionality is implemented.

## Important Patterns and Preferences
- Shell scripts should be well-commented.
- Use `#!/bin/bash` shebang for portability.

## Learnings and Project Insights
- Establishing the Memory Bank is the first priority.
