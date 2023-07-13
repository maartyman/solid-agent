import Yasqe from "@triply/yasqe";
import Yasr from "@triply/yasr";
import {yasqe1_r} from "./example_1";


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
}

setPreset("", "", "");

const urlRegex = new RegExp(/<?(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*))>?/);

const query = () => {
    let queryExplanation = {
        queryString: yasqe3.getValue().toString(),
        sources: sources.value.replace(" ", "").replace("\t", "").split("\n").filter(
            (value, index, array) => value !== ""
        ),
        rules: rules.value
    }
    fetch(`http://localhost:3001`, {
        method: "POST",
        body: JSON.stringify(queryExplanation)
    })
    .then((response) => response.json())
    .then((json) => {
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
    });
};



document.getElementById("startQuery3").addEventListener("click", event => {
    query();
});

document.getElementById("ex1").addEventListener('click', () =>
    setPreset(
        "SELECT ?s ?p ?o WHERE {?s ?p ?o}",
        "http://localhost:3000/alice/profile/card\nhttp://localhost:3000/alice/health/regional_research_survey",
        ""
    )
);

document.getElementById("ex2").addEventListener('click', () => setPreset("", "", ""));

document.getElementById("ex3").addEventListener('click', () => setPreset("", "", ""));
