# Manual Test Report: Edit / Delete Portfolio Project

## Scope

- Site: https://www.wardwork.org
- Issue: #1356
- Flow: Edit an existing portfolio project and delete it afterward.
- Branch: manual-test-portfolio-project-flow
- Tester: Not executed in this repository update
- Test date: Not executed

## Execution Status

Blocked.

This report cannot be marked as passed from the repository alone because the reviewer requested real production testing on https://www.wardwork.org with an authenticated contributor account and embedded screenshots for each completed step. No production credentials, contributor profile details, or screenshots are available in this branch.

## Required Starting State

- A real account is signed in.
- The account has a completed real profile.
- The account has a published real service and a published real offer.
- At least one portfolio project exists, preferably the project created during the add-portfolio test.

## Test Steps

| Step | Expected Result | Status | Screenshot |
| --- | --- | --- | --- |
| Open the portfolio page. | Portfolio page loads with existing projects. | Not executed | Required |
| Select an existing project to edit. | Edit controls or edit form are available. | Not executed | Required |
| Update the project title, description, and/or image with real professional content. | Edited values are accepted and image changes are reflected. | Not executed | Required |
| Save the edited project. | Changes are saved without errors. | Not executed | Required |
| Reopen or refresh the portfolio page. | Edited project displays the updated content. | Not executed | Required |
| Delete the project. | Delete confirmation or delete action completes successfully. | Not executed | Required |
| Return to the portfolio list/page. | Deleted project no longer appears in the list. | Not executed | Required |

## Result

Not executed. This PR should not claim the edit/delete portfolio flow has passed until the production test is completed and the PR description embeds the screenshots listed below.

## Required Evidence

- Portfolio page before edit: Required
- Edit form populated with changes: Required
- Updated project visible after save: Required
- Delete confirmation/action: Required
- Portfolio page after deletion showing project removed: Required

## Notes

After the production test is performed, update each row with `Passed` or `Failed`, replace `Required` with the embedded screenshot link or filename, and record the tester plus exact test date.
