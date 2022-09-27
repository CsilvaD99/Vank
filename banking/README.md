# Vank

Vank is a client side webpage that provides its users the abilty to quickly send money to other users. Similar to a cashapp/zelle app.
**Vank does not use real money, or request any money in any form or fashion. When an account gets created Vank automatically gives them "$100" to have funds to use the webpage.**

---

#Color Palette
NavBar Blue : #1155b7
Button blue : #1876d1
Card White: #ffffff
Application Background color: #ededed
Income text color : #1dcc70
Sent text color:#ff3973

---

#How to run Vank

1. Clone the Vank repo above to your computer.
2. create a .env file with a `SUPABASE_URL=` and a `SUPABASE_KEY=` variables.
3. In the terminal get to the `server` folder and type `npm i` to download the packeges.
4. Once the npm i is done run `nodemon` to get the server up and running.
5. In the terminal navigate to the `banking`folder.
6. Once in the banking folder run `npm i` to download the react packeges.
7. After the packages are done run `npm start` to get the react app running.
8. Vank should automatically open your browser in your localhost:3000.

---

#Vank's creation
Vank was made within the final 2 weeks at DigitalCrafts during the capstone project section. Vank's frontend uses React.js with React-Redux,React-Router-Dom,MUI for the inputs and buttons, and css for the rest of the styling.
Vank's backend uses ExpressJS and Supabase for the database. Encryption and authentication is handled by Supabase.
