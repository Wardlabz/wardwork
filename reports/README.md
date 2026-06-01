# Test Reports

This directory contains manual test reports for WARDWORK issues.

## Directory Structure

```
reports/
├── README.md                 # This file
├── .gitkeep                 # Ensures directory is tracked by git
└── issue-#/                 # Individual issue report directories
    ├── Report_OfferDetail_Issue_#.md
    ├── Report_ServiceDetail_Issue_#.md
    └── [Additional report files as needed]
```

## Report Naming Convention

- Format: `Report_[PageType]_Issue_[IssueNumber].md`
- Example: `Report_OfferDetail_Issue_1349.md`
- Example: `Report_ServiceDetail_Issue_1349.md`

## Report Contents

Each report should include:
- Issue reference and testing environment
- Profile verification (for real data requirements)
- Publication verification (offers/services)
- Detailed testing checklist
- Screenshots for each testing step
- Issues found (if any)
- Overall assessment and recommendations
- Test environment details

## Requirements

As per project guidelines:
- All manual testing must include real profile data
- Real services and offers must be published (not placeholder content)
- Screenshots are mandatory for all testing steps
- Reports must be completed before PR submission

## Creating New Reports

When creating a new report for an issue:
1. Create a directory: `mkdir reports/issue-#`
2. Copy and adapt existing report templates
3. Follow the naming convention
4. Complete all checklist items
5. Attach all required screenshots
6. Submit with the PR

## Template Files

Report templates are available in existing issue directories and can be adapted for new testing tasks.