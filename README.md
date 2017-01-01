Simple tool that reads the current applied styles and attempts to create an output report

# Installing

Run the commands:

```
npm install && npm run build
```

Then install in chrome using developer mode. Load the unpacked extension under the folder `./project_root_here/chrome`

# Known Issues
- Currently reads directly from the DOM, this can cause layout and paint cycles to occur. This can be rather expensive over the entire DOM tree. Preferable to create a clone of the DOM
- Currently operates in the main thread, this should be moved to a web worker to avoid processing inside of the main thread which may cause UI performance issues

# LICENSE 
MIT License

Copyright (c) 2016 Jonathan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
