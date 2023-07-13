import Yasqe from "@triply/yasqe";
import Yasr from "@triply/yasr";

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

yasqe2.setValue(`PREFIX schema: <http://schema.org/>

SELECT ?s WHERE { ?s a schema:Person }`);
yasqe2.expandEditor();

yasqe2_r.setValue(`SELECT  ?s
WHERE { 
    {
        {
            SELECT  ?rvar3
            WHERE { 
                ?rvar3  a  <http://xmlns.com/foaf/0.1/Person> 
            }
        }
        BIND(?rvar3 AS ?s)
    }
    UNION
    { 
        { 
            SELECT  ?rvar2
            WHERE { 
                ?rvar2  a  <http://schema.org/Person>
            }
        }
        BIND(?rvar2 AS ?s)
    }
}`);
yasqe2_r.expandEditor();

const urlRegex = new RegExp(/<?(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*))>?/);

const query = () => {

    fetch(`http://localhost:3001/1`, {
        method: "GET",
    })
        .then((response) => response.json())
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
        });
};



document.getElementById("startQuery2").addEventListener("click", event => {
    query();
});
