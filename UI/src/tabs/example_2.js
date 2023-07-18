import Yasqe from "@triply/yasqe";
import Yasr from "@triply/yasr";
import {query2, rewrittenQuery2} from "../static_data";

export const yasqe2 = new Yasqe(
    document.getElementById('query2')
);

export const yasqe2_r = new Yasqe(
    document.getElementById('query2_rewritten')
);

const yasr = new Yasr(
    document.getElementById('results2')
);

yasr.setResponse({head:{vars:[""]},results:{bindings:[{"":{type:"literal",value: ""}}]}});

yasqe2.setValue(query2);
yasqe2.expandEditor();

yasqe2_r.setValue(rewrittenQuery2);
//yasqe2_r.expandEditor();

const urlRegex = new RegExp(/<?(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*))>?/);

const query = () => {
    document.getElementById("startQuery2").nextElementSibling.className = "message loader";
    document.getElementById("startQuery2").nextElementSibling.innerHTML = "";
    fetch(`https://server-podquery-demo.vito.be/1`, {
        method: "GET",
    })
        .then((response) => {
            document.getElementById("startQuery2").nextElementSibling.className = "message";
            if (response.ok) {
                document.getElementById("startQuery2").nextElementSibling.innerHTML = "<p>Ok</p>";
                return response.json()
            } else {
                document.getElementById("startQuery2").nextElementSibling.innerHTML = "<p style='color: red'>" + response.statusText + "</p>";
                console.log(response.status, response.statusText);
                return {};
            }
        })
        .then((json) => {
            /*
            console.log(json);
            console.log("Received: ");
            for (const bindings of json) {
                console.log("\tResult:")
                for (const element of Object.keys(bindings.entries)) {
                    console.log("\t\t" + element + ": " + bindings.entries[element].value);
                }
            }
             */
            const results = [];
            let temp = {};
            let headVars = new Map();
            for (const bindings of json){
                temp = {};
                for (const element of Object.keys(bindings.entries)) {
                    headVars.set(element, element);
                    const regexArray = urlRegex.exec(element);
                    if (regexArray == null) {
                        temp[element] = {type:"literal",value: bindings.entries[element].value};
                    }
                    else {
                        temp[element] = {type:"uri",value: regexArray[1]};
                    }
                }
                results.push(temp)
            }
            const response={head:{vars:Array.from(headVars.keys())},results:{bindings:results}};
            yasr.setResponse(response);
        })
        .catch((err) => {
            document.getElementById("startQuery2").nextElementSibling.className = "message";
            document.getElementById("startQuery2").nextElementSibling.innerHTML = "<p style='color: red'>" + err + "</p>";
            console.log(err);
        })
};



document.getElementById("startQuery2").addEventListener("click", event => {
    query();
});
