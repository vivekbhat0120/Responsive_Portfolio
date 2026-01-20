Quick deploy instructions

1. Install dependencies: `npm install`
2. Build the distribution: `npm run build` (creates the `dist/` folder)
3. Test locally: `npm run start` then open http://localhost:8080
4. Deploy on Netlify:
   - Option A (recommended): Push to Git and connect your repo in the Netlify app. Set Build command: `npm run build` and Publish directory: `dist`
   - Option B: Drag and drop the `dist/` folder in the Netlify "Sites" -> "Deploys" > "Drag and drop" area

Notes:

- The `netlify.toml` sets `dist` as the publish folder and `npm run build` as the build command.
- If you'd like further optimizations (image compression, asset hashing), I can add them.
