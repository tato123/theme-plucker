Simple tool that reads the current applied styles and attempts to create an output report

# Known Issues
- Currently reads directly from the DOM, this can cause layout and paint cycles to occur. This can be rather expensive over the entire DOM tree. Preferable to create a clone of the DOM
- Currently operates in the main thread, this should be moved to a web worker to avoid processing inside of the main thread which may cause UI performance issues
