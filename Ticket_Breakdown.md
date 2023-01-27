# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1: Add a new column to the Agents table to store the Facility's custom Agent id.

    Acceptance Criteria:
        A new column named "facility_id" is added to the Agents table
        The new column is of data type VARCHAR and has a maximum length of 255
        The column can be nullable
    Implementation Details:
        ALTER TABLE statement will be used to add new column.
    Time/Effort Estimate: 1 hour

2: Update the getShiftsByFacility function to include the Facility's custom Agent id.

    Acceptance Criteria:
        The getShiftsByFacility function now returns the Facility's custom Agent id in addition to the internal database id
        The Facility's custom Agent id is included as a new field in the returned JSON object
    Implementation Details:
        JOIN statement will be used to join the Agents table with the Shifts table and retrieve the Facility's custom Agent id
    Time/Effort Estimate: 2 hours

3: Update the generateReport function to use the Facility's custom Agent id instead of the internal database id when generating the report.

    Acceptance Criteria:
        The generateReport function now uses the Facility's custom Agent id when generating the report
        The Facility's custom Agent id is displayed in the generated report instead of the internal database id
    Implementation Details:
        The function will check if the Facility's custom Agent id is available, if yes it will use it, if not it will use internal database id.
    Time/Effort Estimate: 1 hour

4: Update the Facility's UI to allow them to enter their custom Agent id when adding a new Agent to the platform.

    Acceptance Criteria:
        A new field is added to the "Add Agent" form in the Facility's UI
        The new field is labeled "Facility's custom Agent id"
        The Facility can enter their custom Agent id for the Agent when adding them to the platform
    Implementation Details:
        A new input field will be added to the "Add Agent" form in the Facility's UI
    Time/Effort Estimate: 1 hour

5: Update the Facility's UI to allow them to view and edit their custom Agent id for each Agent they work with.

    Acceptance Criteria:
        A new section is added to the Facility's UI that displays a list of all Agents they work with
        The list includes the Facility's custom Agent id for each Agent
        The Facility can edit the custom Agent id for each Agent
    Implementation Details:
        A new section will be added to the Facility's UI that displays a list of all Agents they work with
    Time/Effort Estimate: 2 hours