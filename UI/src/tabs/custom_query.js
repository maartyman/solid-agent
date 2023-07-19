import Yasqe from "@triply/yasqe";
import Yasr from "@triply/yasr";
import {schemaQuery, schemaToFoafMappings} from "../static_data";
const {query1, query2, mappings} = require("../static_data");

const sources = document.getElementById("sources");
const rules = document.getElementById("mappings");

export const yasqe3 = new Yasqe(
    document.getElementById('query3')
);

export const yasqe3_r = new Yasqe(
    document.getElementById('query3_rewritten')
);

const yasr = new Yasr(
    document.getElementById('results3')
);

yasr.setResponse({head:{vars:[""]},results:{bindings:[{"":{type:"literal",value: ""}}]}});
yasqe3_r.setValue("");

function setPreset(queryString, sourcesString, rulesString) {
    yasqe3.setValue(queryString);
    sources.value = sourcesString;
    rules.value = rulesString;
    yasqe3.expandEditor();
}

setPreset(query1,
    `https://server.solid-sandbox.vito.be/alice/health/regional_research_survey
https://server.solid-sandbox.vito.be/alice/profile/card
https://server.solid-sandbox.vito.be/alice/health/hospital-report
`,
    mappings);

const urlRegex = new RegExp(/<?(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*))>?/);

let controller = undefined;
let signal = undefined;

const query = () => {
    document.getElementById("startQuery3").nextElementSibling.className = "message loader";
    document.getElementById("startQuery3").nextElementSibling.innerHTML = "";
    if (signal !== undefined) {
        controller.abort();
    }
    controller = new AbortController();
    signal = controller.signal;
    let queryExplanation = {
        queryString: yasqe3.getValue().toString(),
        sources: sources.value.replace(" ", "").replace("\t", "").split("\n").filter(
            (value, index, array) => value !== ""
        ),
        rules: rules.value
    }
    fetch(`https://server-podquery-demo.vito.be/`, {
        method: "POST",
        body: JSON.stringify(queryExplanation),
        signal: signal
    })
    .then((response) => {
        document.getElementById("startQuery3").nextElementSibling.className = "message";
        if (response.ok) {
            document.getElementById("startQuery3").nextElementSibling.innerHTML = "<p>Ok</p>";
            return response.json()
        } else {
            document.getElementById("startQuery3").nextElementSibling.innerHTML = "<p style='color: red'>" + response.statusText + "</p>";
            console.log(response.status, response.statusText);
            return {};
        }
    }).then((json) => {
        /*
        console.log(json);
        console.log("Received: ");
        for (const bindings of json.bindings) {
            console.log("\tResult:")
            for (const element of Object.keys(bindings.entries)) {
                console.log("\t\t" + element + ": " + bindings.entries[element].value);
            }
        }
        */
        const results = [];
        let temp = {};
        let headVars = new Map();
        for (const bindings of json.bindings){
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
        yasqe3_r.setValue(json.query);
    })
    .catch((err) => {
        document.getElementById("startQuery3").nextElementSibling.className = "message";
        document.getElementById("startQuery3").nextElementSibling.innerHTML = "<p style='color: red'>" + err + "</p>";
        console.log(err);
    })
};



document.getElementById("startQuery3").addEventListener("click", event => {
    query();
});

document.getElementById("ex1").addEventListener('click', () =>
    setPreset(query1,
        `https://server.solid-sandbox.vito.be/alice/health/regional_research_survey
https://server.solid-sandbox.vito.be/alice/profile/card
https://server.solid-sandbox.vito.be/alice/health/hospital-report
`,
        mappings)
);

document.getElementById("ex2").addEventListener('click', () =>
    setPreset(query2,
        `https://server.solid-sandbox.vito.be/alice/health/regional_research_survey
https://server.solid-sandbox.vito.be/alice/profile/card
https://server.solid-sandbox.vito.be/alice/health/hospital-report
`,
        mappings)
);

document.getElementById("ex3").addEventListener('click', () =>
    setPreset(schemaQuery,
        `https://server.solid-sandbox.vito.be/alice/profile/card
`,
        schemaToFoafMappings)
);

document.getElementById("ex4").addEventListener('click', () =>
    setPreset("",
        "",
        "")
);
