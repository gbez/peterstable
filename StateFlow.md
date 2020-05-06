# StateFlowOutline

1. App.js

- Based on the Route, load StateManager with a given appName...

2. StateManager

- With the appName props, StateManager queries the settings for that given appName
- the returned settings are then passed to the page, the sidebar, and the navbar.

3. NavBar sets components based on state
4. SideBar sets componenets based on state
5. Page sets componenets based on State

## Axios Calls

- When and where do we want to do axios calls?

1. We want to READ settings into the StateManager
2. We want to READ documents into each respective page
3. We want to CREATE/UPDATE documents on the Modal
4. We want to DELETE documents on a page item
