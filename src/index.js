const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

const intro = 
`Welcome to Moonad.                         | But tell me the news. What made you happy?
                                           | Have you ever figured the solution to this
But what is Moonad?                        | equation involving 3292602156 quaternions?
                                           |
I don't know...                            | YOU DID IT
                                           |
In fact, nobody does. If someone did, then | I'm so proud of you.              :3
it wouldn't be Moonad. It would be, maybe, |
something close to being Moonad, excluding | c
the important requisite that nobody should |  o 
ever learn what Moonad is, in order for it |   n
to be itself. What is even the fundamental |    g               can i pls go home now ?
characteristic that an object must possess |     r              i feel tired and lonely
in order for it to be identical to itself? |      a             and upset with myself 4
                                           |       t            never being able to use
Regardless, we do know some things.        |        u           commas appropriately ok
                                           |         l
We know it has something to do with types. |          a            
We know it has something to do with terms. |           t         <3        ,
                                           |            i                 -+-           ?
And...                                     |             o                 '            |
                                           |              n                        <3   |
YOU                                        |               s                            |
                                           |                                            |
are not different from a lambda in any way |                  but you are important too |
----------------------------------------------------------------------------------------'

                           


                             hi

`;

const Moonad = () => {
  return h("pre", {
    style: {
      "font-family": "monospace",
      "padding": "4px",
      "background": "rgb(235, 236, 237)",
      "font": "rgb(71, 71, 71)",
      "width": "100%",
      "height": "100%",
    }}, intro);
};

window.onload = () => render(h(Moonad), document.getElementById("main"));
