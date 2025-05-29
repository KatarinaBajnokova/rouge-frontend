Rouge

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
Important: Use PORT 3000 for the Frontend!
Frontend must run on PORT 3000!
This is required for CORS to work with the backend on port 8000!
Changing the frontend port may cause CORS errors!!!!!!!!!!!!!!!!
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

----Project Description----

Rouge is a modern, full-stack web application for online shopping. It features a PHP/SQLite backend and a React/Mantine frontend. Users can browse, filter, favorite products, leave reviews, and manage their baskets in a fast, mobile-first UI.

What it does: Provides a complete e-commerce experience with authentication, dynamic filters, reviews, and modern design.

Technologies used:

Frontend: React, Vite, Mantine, Sass

Backend: PHP 8+, SQLite, REST API
----How to Install and Run the Project----

Clone both repositories

git clone https://github.com/KatarinaBajnokova/rouge-backend.git

git clone https://github.com/KatarinaBajnokova/rouge-frontend.git
Install dependencies

In the terminal run:

npm install
Verify package.json in the frontend

In rouge-frontend/package.json, ensure you see these dependencies:

"dependencies": { "@emotion/react": "^11.14.0", "@emotion/styled": "^11.14.0", "@mantine/carousel": "^7.17.4", "@mantine/core": "^7.17.4", "@mantine/hooks": "^7.17.4", "@mantine/notifications": "^7.17.4", "@tabler/icons-react": "^3.31.0", "@tanstack/react-query": "^5.75.5", "@testing-library/dom": "^10.4.0", "@testing-library/jest-dom": "^6.6.3", "@testing-library/react": "^16.3.0", "@testing-library/user-event": "^13.5.0", "firebase": "^11.6.0", "react": "^19.1.0", "react-dom": "^19.1.0", "react-icons": "^5.5.0", "react-responsive-carousel": "^3.2.23", "react-router-dom": "^7.5.1", "sass": "^1.86.3", "slick-carousel": "^1.8.1", "web-vitals": "^2.1.4" }, "devDependencies": { "@vitejs/plugin-react": "^4.4.1", "concurrently": "^9.1.2", "prettier": "^3.5.3", "rollup-plugin-visualizer": "^5.14.0", "vite": "^6.3.2" }

Run both servers

Frontend:

cd rouge-frontend

npm start
Backend (in a new terminal):

cd rouge-backend

php -S localhost:8000 -t public

⚠️⚠️⚠️BOTH MUST BE ON THE PORTS SHOWN BELLOW!!!!!⚠️⚠️⚠️

        ⚠️⚠️⚠️PORT 3000⚠️⚠️⚠️

    Frontend: http://localhost:3000

    Backend: http://localhost:8000

Open in your browser

http://localhost:3000 -----> 3000⚠️⚠️⚠️

MAKE SURE THAT IT IS 3000⚠️⚠️⚠️
Missing Packages? Install Manually

In rouge-frontend, run:

Main dependencies

npm install @emotion/react npm install @emotion/styled npm install @mantine/carousel npm install @mantine/core npm install @mantine/hooks npm install @mantine/notifications npm install @tabler/icons-react npm install @tanstack/react-query npm install @testing-library/dom npm install @testing-library/jest-dom npm install @testing-library/react npm install @testing-library/user-event npm install firebase npm install react npm install react-dom npm install react-icons npm install react-responsive-carousel npm install react-router-dom npm install sass npm install slick-carousel npm install web-vitals

Dev dependencies

npm install --save-dev @vitejs/plugin-react npm install --save-dev concurrently npm install --save-dev prettier npm install --save-dev rollup-plugin-visualizer npm install --save-dev vite

----Link to the deployed version----

https://rouge-e249d.web.app/

The website is deployed via firebase, however we have encountered the following errors:

vendor-Cu7huOqk.js:9 Uncaught TypeError: Cannot read properties of undefined (reading 'useLayoutEffect') at vendor-Cu7huOqk.js:9:7250 (anonymous) @ vendor-Cu7huOqk.js:9

Uncaught TypeError: undefined has no properties

<anonymous> https://rouge-coral.vercel.app/assets/vendor-CsWxUodm.js:9
vendor-CsWxUodm.js:9:7229

<anonymous> https://rouge-coral.vercel.app/assets/vendor-CsWxUodm.js:9
We have tried to deploy it via Vercel, Netlify, and Firebase.

In all three situations we are getting the same errors.

We have tried to resolve it, but unfortunately we could not.

We also integatred it into Google Analytics, but we were unable to test it, since there is no user acitvity on the website because it is not loading correctly.

We rebuilt it several times, we have deployed it multiple times, adjusted vite config in different ways, however it was not resolving our problem.

After careful consideration of our situation we have came to the conclusion that the main problem is probably arising from Mantine.

The errror is likely coming from Mantine, which uses useMergeRef internally and somehwere in the code it gets returned as an undefined ref.

We have tried to solve this by overwriting it but it was unsuccesful.

----⚠️Logs, Commits & History⚠️----

Due to github merging issues and other problems, we have changed repositories.

Initialy we were working in the following two repositories:

    Frontend: https://github.com/Wawa755/Rouge.git

    Backend: https://github.com/Wawa755/Rouge_backend.git

Afterwards, we have change the entire project into this one.
