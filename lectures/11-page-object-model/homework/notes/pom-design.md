# Page Object Model Design — Lecture 10 Homework

## Repeated Locators

- `#session-format` → 2 times
- `#topic-visual` → 2 times
- `#level-intro` → 2 times
- `#code-of-conduct` → 2 times
- `#materials` → 2 times
- `button[type="submit"]` → 2 times
- `#total-count` → 3 times
- `tbody > tr` → 3 times
- `.pill.status-approved` → 1 time

## Repeated Action Sequences

- Select format → Check topic → Select level → Accept code → Upload files → Submit
- Locate row by speaker → Click Approve or Decline → Handle dialog → Verify status or removal

## Test Intent (Business Language)

- Complete session submission and verify confirmation
- Block submission if required fields are missing
- Approve or decline a specific speaker’s session
- Validate table headers, row count, and submission count

## Proposed Page Object APIs

### SessionFormPage

- `navigate()`
- `selectFormat(vaueOrLabel)`
- `setTopics(topics)`
- `selectAudience(level)`
- `uploadFiles(filePaths)`
- `acceptCodeOfConduct()`
- `clicksubmit()`
- `completeSubmission`

### SessionConfirmationPage

- `getSuccessMessage()`
- `getSelectedFormat()`
- `getSelectedTopics()`
- `getAudienceLevel()`
- `getUploadedFileNames()`

### SubmissionsTablePage

- `goto()`
- `getTotalCount()`
- `getHeaders()`
- `findRowBySpeaker(name)`
- `getStatusForSpeaker(name)`
- `approveSpeaker(name)`
- `declineSpeaker(name)`
- `isRowPresent(name)`
