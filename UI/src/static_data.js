export const query1 = `prefix foaf: <http://xmlns.com/foaf/0.1/>
prefix ggdm: <https://vito.be/schema/ggdm#> 
prefix sur:  <https://w3id.org/survey-ontology#> 
prefix prov: <http://www.w3.org/ns/prov#> 

SELECT ?age ?fruits ?exercise
WHERE { 
  ?completedQ2 sur:answeredIn ?_s ;
               sur:completesQuestion ggdm:question2 ;
               sur:hasAnswer ggdm:yes .
  ?_s prov:wasAssociatedWith ?person .
  OPTIONAL {
    ?completedQ9_1 sur:completesQuestion ggdm:question9-1 ; 
                   sur:hasAnswer ?fruits .
  }
  OPTIONAL {
    ?completedQ10 sur:completesQuestion ggdm:question10 ;
                  sur:hasAnswer ?exercise .
  }
  OPTIONAL {
    ?person foaf:age ?age .
  }
}`;

export const query2 = `prefix sur:  <https://w3id.org/survey-ontology#> 

SELECT ( COUNT(DISTINCT ?completedQuestion) AS ?count )
WHERE { 
  ?completedQuestion sur:answeredIn ?session .
}`;

export const rewrittenQuery1 = `SELECT  ?age ?fruits ?exercise
WHERE
  {   { { { { { { SELECT  ?rvar294514 ?rvar294510 ?rvar294515 ?rvar294513 ?rvar294511 ?rvar294512
                  WHERE
                    { ?rvar294512  <http://www.w3.org/ns/prov#atTime>  ?rvar294513 ;
                                <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar294511 .
                      ?rvar294510  <https://w3id.org/survey-ontology#answeredIn>  ?rvar294512 ;
                                <https://w3id.org/survey-ontology#hasAnswer>  ?rvar294515 ;
                                <https://w3id.org/survey-ontology#completesQuestion>  ?rvar294514
                      FILTER ( ?rvar294514 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                    }
                }
                { SELECT  ?rvar294520 ?rvar294516 ?rvar294521 ?rvar294519 ?rvar294517 ?rvar294518
                  WHERE
                    { ?rvar294518  <http://www.w3.org/ns/prov#atTime>  ?rvar294519 ;
                                <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar294517 .
                      ?rvar294516  <https://w3id.org/survey-ontology#answeredIn>  ?rvar294518 ;
                                <https://w3id.org/survey-ontology#hasAnswer>  ?rvar294521 ;
                                <https://w3id.org/survey-ontology#completesQuestion>  ?rvar294520
                      FILTER ( ?rvar294520 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                    }
                }
              }
              { SELECT  ?rvar294508 ?rvar294504 ?rvar294509 ?rvar294507 ?rvar294505 ?rvar294506
                WHERE
                  { ?rvar294506  <http://www.w3.org/ns/prov#atTime>  ?rvar294507 ;
                              <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar294505 .
                    ?rvar294504  <https://w3id.org/survey-ontology#answeredIn>  ?rvar294506 ;
                              <https://w3id.org/survey-ontology#hasAnswer>  ?rvar294509 ;
                              <https://w3id.org/survey-ontology#completesQuestion>  ?rvar294508
                    FILTER ( ?rvar294508 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                  }
              }
            }
            { SELECT  ?rvar294526 ?rvar294522 ?rvar294527 ?rvar294525 ?rvar294523 ?rvar294524
              WHERE
                { ?rvar294524  <http://www.w3.org/ns/prov#atTime>  ?rvar294525 ;
                            <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar294523 .
                  ?rvar294522  <https://w3id.org/survey-ontology#answeredIn>  ?rvar294524 ;
                            <https://w3id.org/survey-ontology#hasAnswer>  ?rvar294527 ;
                            <https://w3id.org/survey-ontology#completesQuestion>  ?rvar294526
                  FILTER ( ?rvar294526 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                }
            }
          }
          FILTER ( ?rvar294515 = <https://vito.be/schema/ggdm#yes> )
          FILTER ( ?rvar294516 = ?rvar294522 )
          FILTER ( ?rvar294526 = <https://vito.be/schema/ggdm#question2> )
          FILTER ( ?rvar294518 = ?rvar294506 )
          FILTER ( ?rvar294522 = ?rvar294510 )
        }
        BIND(?rvar294518 AS ?_s)
        BIND(?rvar294505 AS ?person)
        BIND(?rvar294516 AS ?completedQ2)
      }
    UNION
      { { { { { { SELECT  (if(bound(?fhirConditionOnsetDateTimeValue), <https://vito.be/schema/ggdm#yes>, <https://vito.be/schema/ggdm#no>) AS ?rvar2009175) (if(bound(?fhirConditionOnsetDateTimeValue), ?fhirConditionOnsetDateTimeValue, concat(str(day(now())), "-", str(month(now())), "-", str(year(now())))) AS ?rvar2009174)
                  WHERE
                    { OPTIONAL
                        { ?c    a                     <http://hl7.org/fhir/Condition> ;
                                <http://hl7.org/fhir/Condition.code>  _:b0 .
                          _:b0  <http://hl7.org/fhir/CodeableConcept.coding>  _:b1 .
                          _:b1  a                     ?fhirConditionCodingClass ;
                                <http://hl7.org/fhir/Coding.system>  _:b2 .
                          _:b2  <http://hl7.org/fhir/value>  ?fhirConditionCodingSystemValue .
                          _:b1  <http://hl7.org/fhir/Coding.code>  _:b3 .
                          _:b3  <http://hl7.org/fhir/value>  "73211009" .
                          _:b1  <http://hl7.org/fhir/Coding.display>  _:b4 .
                          _:b4  <http://hl7.org/fhir/value>  ?fhirConditionCodingDisplayValue .
                          ?c    <http://hl7.org/fhir/Condition.subject>  _:b5 .
                          _:b5  <http://hl7.org/fhir/link>  ?fhirConditionSubjectLink .
                          ?c    <http://hl7.org/fhir/Condition.onsetDateTime>  _:b6 .
                          _:b6  <http://hl7.org/fhir/value>  ?fhirConditionOnsetDateTimeValue
                        }
                    }
                }
                { SELECT  (if(bound(?fhirConditionOnsetDateTimeValue), <https://vito.be/schema/ggdm#yes>, <https://vito.be/schema/ggdm#no>) AS ?rvar2009169) (if(bound(?fhirConditionOnsetDateTimeValue), ?fhirConditionOnsetDateTimeValue, concat(str(day(now())), "-", str(month(now())), "-", str(year(now())))) AS ?rvar2009168)
                  WHERE
                    { OPTIONAL
                        { ?c     a                     <http://hl7.org/fhir/Condition> ;
                                 <http://hl7.org/fhir/Condition.code>  _:b7 .
                          _:b7   <http://hl7.org/fhir/CodeableConcept.coding>  _:b8 .
                          _:b8   a                     ?fhirConditionCodingClass ;
                                 <http://hl7.org/fhir/Coding.system>  _:b9 .
                          _:b9   <http://hl7.org/fhir/value>  ?fhirConditionCodingSystemValue .
                          _:b8   <http://hl7.org/fhir/Coding.code>  _:b10 .
                          _:b10  <http://hl7.org/fhir/value>  "73211009" .
                          _:b8   <http://hl7.org/fhir/Coding.display>  _:b11 .
                          _:b11  <http://hl7.org/fhir/value>  ?fhirConditionCodingDisplayValue .
                          ?c     <http://hl7.org/fhir/Condition.subject>  _:b12 .
                          _:b12  <http://hl7.org/fhir/link>  ?fhirConditionSubjectLink .
                          ?c     <http://hl7.org/fhir/Condition.onsetDateTime>  _:b13 .
                          _:b13  <http://hl7.org/fhir/value>  ?fhirConditionOnsetDateTimeValue
                        }
                    }
                }
              }
              { SELECT  (if(bound(?fhirConditionOnsetDateTimeValue), <https://vito.be/schema/ggdm#yes>, <https://vito.be/schema/ggdm#no>) AS ?rvar2009171) (if(bound(?fhirConditionOnsetDateTimeValue), ?fhirConditionOnsetDateTimeValue, concat(str(day(now())), "-", str(month(now())), "-", str(year(now())))) AS ?rvar2009170)
                WHERE
                  { OPTIONAL
                      { ?c     a                     <http://hl7.org/fhir/Condition> ;
                               <http://hl7.org/fhir/Condition.code>  _:b14 .
                        _:b14  <http://hl7.org/fhir/CodeableConcept.coding>  _:b15 .
                        _:b15  a                     ?fhirConditionCodingClass ;
                               <http://hl7.org/fhir/Coding.system>  _:b16 .
                        _:b16  <http://hl7.org/fhir/value>  ?fhirConditionCodingSystemValue .
                        _:b15  <http://hl7.org/fhir/Coding.code>  _:b17 .
                        _:b17  <http://hl7.org/fhir/value>  "73211009" .
                        _:b15  <http://hl7.org/fhir/Coding.display>  _:b18 .
                        _:b18  <http://hl7.org/fhir/value>  ?fhirConditionCodingDisplayValue .
                        ?c     <http://hl7.org/fhir/Condition.subject>  _:b19 .
                        _:b19  <http://hl7.org/fhir/link>  ?fhirConditionSubjectLink .
                        ?c     <http://hl7.org/fhir/Condition.onsetDateTime>  _:b20 .
                        _:b20  <http://hl7.org/fhir/value>  ?fhirConditionOnsetDateTimeValue
                      }
                  }
              }
            }
            { SELECT  (if(bound(?fhirConditionOnsetDateTimeValue), <https://vito.be/schema/ggdm#yes>, <https://vito.be/schema/ggdm#no>) AS ?rvar2009173) (if(bound(?fhirConditionOnsetDateTimeValue), ?fhirConditionOnsetDateTimeValue, concat(str(day(now())), "-", str(month(now())), "-", str(year(now())))) AS ?rvar2009172)
              WHERE
                { OPTIONAL
                    { ?c     a                     <http://hl7.org/fhir/Condition> ;
                             <http://hl7.org/fhir/Condition.code>  _:b21 .
                      _:b21  <http://hl7.org/fhir/CodeableConcept.coding>  _:b22 .
                      _:b22  a                     ?fhirConditionCodingClass ;
                             <http://hl7.org/fhir/Coding.system>  _:b23 .
                      _:b23  <http://hl7.org/fhir/value>  ?fhirConditionCodingSystemValue .
                      _:b22  <http://hl7.org/fhir/Coding.code>  _:b24 .
                      _:b24  <http://hl7.org/fhir/value>  "73211009" .
                      _:b22  <http://hl7.org/fhir/Coding.display>  _:b25 .
                      _:b25  <http://hl7.org/fhir/value>  ?fhirConditionCodingDisplayValue .
                      ?c     <http://hl7.org/fhir/Condition.subject>  _:b26 .
                      _:b26  <http://hl7.org/fhir/link>  ?fhirConditionSubjectLink .
                      ?c     <http://hl7.org/fhir/Condition.onsetDateTime>  _:b27 .
                      _:b27  <http://hl7.org/fhir/value>  ?fhirConditionOnsetDateTimeValue
                    }
                }
            }
          }
          FILTER ( bnode(concat("session_on_", str(?rvar2009168))) = bnode(concat("session_on_", str(?rvar2009172))) )
          FILTER ( ?rvar2009171 = <https://vito.be/schema/ggdm#yes> )
          FILTER ( bnode(concat("completed_question_2_on_", str(?rvar2009170))) = bnode(concat("completed_question_2_on_", str(?rvar2009174))) )
          FILTER ( bnode(concat("completed_question_2_on_", str(?rvar2009172))) = bnode(concat("completed_question_2_on_", str(?rvar2009170))) )
        }
        BIND(bnode(concat("session_on_", str(?rvar2009168))) AS ?_s)
        BIND(bnode(concat("completed_question_2_on_", str(?rvar2009172))) AS ?completedQ2)
        BIND(<http://example.com/Alice> AS ?person)
      }
    OPTIONAL
      { { { { SELECT  ?rvar5624844 ?rvar5624840 ?rvar5624845 ?rvar5624843 ?rvar5624841 ?rvar5624842
              WHERE
                { ?rvar5624842  <http://www.w3.org/ns/prov#atTime>  ?rvar5624843 ;
                            <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar5624841 .
                  ?rvar5624840  <https://w3id.org/survey-ontology#answeredIn>  ?rvar5624842 ;
                            <https://w3id.org/survey-ontology#hasAnswer>  ?rvar5624845 ;
                            <https://w3id.org/survey-ontology#completesQuestion>  ?rvar5624844
                  FILTER ( ?rvar5624844 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                }
            }
            { SELECT  ?rvar5624850 ?rvar5624846 ?rvar5624851 ?rvar5624849 ?rvar5624847 ?rvar5624848
              WHERE
                { ?rvar5624848  <http://www.w3.org/ns/prov#atTime>  ?rvar5624849 ;
                            <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar5624847 .
                  ?rvar5624846  <https://w3id.org/survey-ontology#answeredIn>  ?rvar5624848 ;
                            <https://w3id.org/survey-ontology#hasAnswer>  ?rvar5624851 ;
                            <https://w3id.org/survey-ontology#completesQuestion>  ?rvar5624850
                  FILTER ( ?rvar5624850 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                }
            }
          }
          FILTER ( ?rvar5624850 = <https://vito.be/schema/ggdm#question9-1> )
          FILTER ( ?rvar5624840 = ?rvar5624846 )
        }
        BIND(?rvar5624845 AS ?fruits)
        BIND(?rvar5624840 AS ?completedQ9_1)
      }
    OPTIONAL
      { { { { SELECT  ?rvar5629010 ?rvar5629006 ?rvar5629011 ?rvar5629009 ?rvar5629007 ?rvar5629008
              WHERE
                { ?rvar5629008  <http://www.w3.org/ns/prov#atTime>  ?rvar5629009 ;
                            <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar5629007 .
                  ?rvar5629006  <https://w3id.org/survey-ontology#answeredIn>  ?rvar5629008 ;
                            <https://w3id.org/survey-ontology#hasAnswer>  ?rvar5629011 ;
                            <https://w3id.org/survey-ontology#completesQuestion>  ?rvar5629010
                  FILTER ( ?rvar5629010 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                }
            }
            { SELECT  ?rvar5629004 ?rvar5629000 ?rvar5629005 ?rvar5629003 ?rvar5629001 ?rvar5629002
              WHERE
                { ?rvar5629002  <http://www.w3.org/ns/prov#atTime>  ?rvar5629003 ;
                            <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar5629001 .
                  ?rvar5629000  <https://w3id.org/survey-ontology#answeredIn>  ?rvar5629002 ;
                            <https://w3id.org/survey-ontology#hasAnswer>  ?rvar5629005 ;
                            <https://w3id.org/survey-ontology#completesQuestion>  ?rvar5629004
                  FILTER ( ?rvar5629004 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
                }
            }
          }
          FILTER ( ?rvar5629000 = ?rvar5629006 )
          FILTER ( ?rvar5629010 = <https://vito.be/schema/ggdm#question10> )
        }
        BIND(?rvar5629005 AS ?exercise)
        BIND(?rvar5629000 AS ?completedQ10)
      }
    OPTIONAL
      { { SELECT  ?rvar5632710 ?rvar5632711
          WHERE
            { ?rvar5632710  <http://xmlns.com/foaf/0.1/age>  ?rvar5632711 }
        }
        BIND(?rvar5632710 AS ?person)
        BIND(?rvar5632711 AS ?age)
      }
  }

`;

export const rewrittenQuery2 = `SELECT  (COUNT(DISTINCT ?completedQuestion) AS ?count)
WHERE
  {   { { SELECT  (if(bound(?fhirConditionOnsetDateTimeValue), <https://vito.be/schema/ggdm#yes>, <https://vito.be/schema/ggdm#no>) AS ?rvar33) (if(bound(?fhirConditionOnsetDateTimeValue), ?fhirConditionOnsetDateTimeValue, concat(str(day(now())), "-", str(month(now())), "-", str(year(now())))) AS ?rvar32)
          WHERE
            { OPTIONAL
                { ?c    a                     <http://hl7.org/fhir/Condition> ;
                        <http://hl7.org/fhir/Condition.code>  _:b0 .
                  _:b0  <http://hl7.org/fhir/CodeableConcept.coding>  _:b1 .
                  _:b1  a                     ?fhirConditionCodingClass ;
                        <http://hl7.org/fhir/Coding.system>  _:b2 .
                  _:b2  <http://hl7.org/fhir/value>  ?fhirConditionCodingSystemValue .
                  _:b1  <http://hl7.org/fhir/Coding.code>  _:b3 .
                  _:b3  <http://hl7.org/fhir/value>  "73211009" .
                  _:b1  <http://hl7.org/fhir/Coding.display>  _:b4 .
                  _:b4  <http://hl7.org/fhir/value>  ?fhirConditionCodingDisplayValue .
                  ?c    <http://hl7.org/fhir/Condition.subject>  _:b5 .
                  _:b5  <http://hl7.org/fhir/link>  ?fhirConditionSubjectLink .
                  ?c    <http://hl7.org/fhir/Condition.onsetDateTime>  _:b6 .
                  _:b6  <http://hl7.org/fhir/value>  ?fhirConditionOnsetDateTimeValue
                }
            }
        }
        BIND(BNODE(concat("completed_question_2_on_", str(?rvar32))) AS ?completedQuestion)
        BIND(BNODE(concat("session_on_", str(?rvar32))) AS ?session)
      }
    UNION
      { { SELECT  ?rvar16 ?rvar12 ?rvar17 ?rvar15 ?rvar13 ?rvar14
          WHERE
            { ?rvar14  <http://www.w3.org/ns/prov#atTime>  ?rvar15 ;
                       <http://www.w3.org/ns/prov#wasAssociatedWith>  ?rvar13 .
              ?rvar12  <https://w3id.org/survey-ontology#answeredIn>  ?rvar14 ;
                       <https://w3id.org/survey-ontology#hasAnswer>  ?rvar17 ;
                       <https://w3id.org/survey-ontology#completesQuestion>  ?rvar16
              FILTER ( ?rvar16 IN (<https://vito.be/schema/ggdm#question1>, <https://vito.be/schema/ggdm#question2>, <https://vito.be/schema/ggdm#question3>, <https://vito.be/schema/ggdm#question4>, <https://vito.be/schema/ggdm#question5>, <https://vito.be/schema/ggdm#question6>, <https://vito.be/schema/ggdm#question6-1>, <https://vito.be/schema/ggdm#question6-2>, <https://vito.be/schema/ggdm#question7>, <https://vito.be/schema/ggdm#question7-1>, <https://vito.be/schema/ggdm#question7-2>, <https://vito.be/schema/ggdm#question7-3>, <https://vito.be/schema/ggdm#question7-4>, <https://vito.be/schema/ggdm#question7-5>, <https://vito.be/schema/ggdm#question7-6>, <https://vito.be/schema/ggdm#question7-7>, <https://vito.be/schema/ggdm#question7-8>, <https://vito.be/schema/ggdm#question7-9>, <https://vito.be/schema/ggdm#question7-10>, <https://vito.be/schema/ggdm#question8-1>, <https://vito.be/schema/ggdm#question9-1>, <https://vito.be/schema/ggdm#question10>, <https://vito.be/schema/ggdm#question11>, <https://vito.be/schema/ggdm#question12>, <https://vito.be/schema/ggdm#question13>, <https://vito.be/schema/ggdm#question14>) )
            }
        }
        BIND(?rvar12 AS ?completedQuestion)
        BIND(?rvar14 AS ?session)
      }
  }`;

export const schemaQuery = `PREFIX schema: <http://schema.org/>

SELECT ?person ?friend
WHERE { 
  ?person a schema:Person .
  ?person schema:knows ?friend .
}`;

export const schemaToFoafMappings = `@prefix :       <http://example.com/> .
@prefix ql:     <http://semweb.mmlab.be/ns/ql#> .
@prefix rdf:    <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rml:    <http://semweb.mmlab.be/ns/rml#> .
@prefix rr:     <http://www.w3.org/ns/r2rml#> .
@prefix schema: <http://schema.org/> .
@prefix sd:     <http://www.w3.org/ns/sparql-service-description#>.
@prefix xsd:    <http://www.w3.org/2001/XMLSchema#> .

:sparqlService a sd:Service ;
\tsd:endpoint <http://localhost:3330/sparql> ;
\tsd:supportedLanguage sd:SPARQL11Query ;
\tsd:resultFormat <http://www.w3.org/ns/formats/SPARQL_Results_JSON> .

:knowsSource a rml:logicalSource ;
    rml:source :sparqlService ;
\trml:referenceFormulation ql:JSONPath ;
\trml:iterator "$.results.bindings[*]" ;
    rml:query """
    prefix foaf: <http://xmlns.com/foaf/0.1/>

    SELECT ?s ?o WHERE { ?s foaf:knows ?o } """ .


:knowsMap a rr:TriplesMap ;
\trml:logicalSource :knowsSource ;
    rr:subjectMap [
        rml:reference "s.value" ;
\t\trr:termType rr:IRI
    ] ;
    rr:predicateObjectMap [
        rr:predicate schema:knows ;
        rr:objectMap [
            rml:reference "o.value" ;
\t\t\trr:termType rr:IRI
        ]
    ] .

:personSource a rml:logicalSource ;
\trml:source :sparqlService ;
\trml:referenceFormulation ql:JSONPath ;
\trml:iterator "$.results.bindings[*]" ;
    rml:query """
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    SELECT ?s WHERE { ?s a foaf:Person } """ .

:personMap a rr:TriplesMap ;
\trml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "s.value" ;
        rr:termType rr:IRI
    ] ;
    rr:predicateObjectMap [
        rr:predicate rdf:type ;
        rr:object schema:Person
    ] .


`;

export const mappings = `@prefix rml:  <http://semweb.mmlab.be/ns/rml#> .
@prefix rr: <http://www.w3.org/ns/r2rml#> .
@prefix ql: <http://semweb.mmlab.be/ns/ql#> .
@prefix qst:  <https://vito.be/schema/qst#> .
@prefix ggdm: <https://vito.be/schema/ggdm#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix owl:  <http://www.w3.org/2002/07/owl#> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix sur:  <https://w3id.org/survey-ontology#> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix :     <https://server.solid-sandbox.vito.be/alice/> .
@prefix sd:   <http://www.w3.org/ns/sparql-service-description#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/> .


#####################
# Diabetes source
#####################

:sparqlService a sd:Service ;
  sd:endpoint <http://localhost:3330/sparql> ;
  sd:supportedLanguage sd:SPARQL11Query ;
  sd:resultFormat <http://www.w3.org/ns/formats/SPARQL_Results_JSON> .

:diabetesSource a rml:LogicalSource ;
  rml:source :sparqlService ;
  rml:referenceFormulation ql:JSONPath ;
  rml:iterator "$.results.bindings[*]" ;
  rml:query 
"""prefix fhir: <http://hl7.org/fhir/> 
prefix owl: <http://www.w3.org/2002/07/owl#> 
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
prefix sct: <http://snomed.info/id/> 
prefix xsd: <http://www.w3.org/2001/XMLSchema#> 
prefix ggdm: <https://vito.be/schema/ggdm#> 

SELECT 
?answer ?date
WHERE { 
  {} OPTIONAL 
  {
    ?c a fhir:Condition ;
      fhir:Condition.code [
        fhir:CodeableConcept.coding [
          a ?fhirConditionCodingClass ;
          fhir:Coding.system [ fhir:value ?fhirConditionCodingSystemValue ] ;
          fhir:Coding.code [ fhir:value "73211009" ] ;
          fhir:Coding.display [ fhir:value ?fhirConditionCodingDisplayValue ] ;
        ] ;
      ] ;
      fhir:Condition.subject [ fhir:link ?fhirConditionSubjectLink ] ;
      fhir:Condition.onsetDateTime [ fhir:value ?fhirConditionOnsetDateTimeValue ] . 
  } .
  BIND(IF(BOUND(?fhirConditionOnsetDateTimeValue),?fhirConditionOnsetDateTimeValue,concat(str(day(now())),"-",str(month(now())),"-",str(year(now())))) AS ?date)
  BIND(IF(BOUND(?fhirConditionOnsetDateTimeValue),ggdm:yes,ggdm:no) AS ?answer)
}""" .

:completedQuestionTriplesMap a rr:TriplesMap ;
  rml:logicalSource :diabetesSource ;
  rr:subjectMap [
    rr:template "completed_question_2_on_{date.value}" ;
    # rr:class :<class> ; # Is there a class for completed questions? If yes fill in, if no remove line
    rr:termType rr:BlankNode ] ;
  rr:predicateObjectMap [
    rr:predicate sur:answeredIn ;
    rr:objectMap [
      rr:template "session_on_{date.value}" ;
      rr:termType rr:BlankNode ] ] ;
  rr:predicateObjectMap [
    rr:predicate sur:hasAnswer ;
    rr:objectMap [
      rml:reference "answer.value" ;
      rr:termType rr:IRI ] ] ;
  rr:predicateObjectMap [
    rr:predicate sur:completesQuestion ;
    rr:object ggdm:question2 ] .

:sessionTriplesMap a rr:TriplesMap ;
  rml:logicalSource :diabetesSource ;
  rr:subjectMap [
    rr:template "session_on_{date.value}" ;
    rr:class sur:SurveyCompletionTask ;
    rr:termType rr:BlankNode ] ;
  rr:predicateObjectMap [
    rr:predicate prov:atTime ;
    rr:objectMap [
      rml:reference "date.value" ;
      rr:datatype xsd:date ] ] ;
  rr:predicateObjectMap [
    rr:predicate prov:wasAssociatedWith ;
    rr:object <https://server.solid-sandbox.vito.be/alice/profile/card#me> ] .

:personSource a rml:LogicalSource ;
\trml:source :sparqlService ;
\trml:referenceFormulation ql:JSONPath ;
\trml:iterator "$.results.bindings[*]" ;
\trml:query
\t"""
\tprefix foaf: <http://xmlns.com/foaf/0.1/>
    prefix ggdm: <https://vito.be/schema/ggdm#> 

\tSELECT ?person ?givenname ?familyname ?age ?hdl ?ratio ?total ?length ?weight
\tWHERE {
        ?person foaf:givenName ?givenname ;
            foaf:familyName ?familyname ;
            foaf:age ?age ;
            foaf:gender ?gender ;
            ggdm:parameterCholesterolHDL ?hdl ;
    \t\tggdm:parameterCholesterolRatio ?ratio ;
    \t\tggdm:parameterCholesterolTotal ?total ;
            ggdm:parameterLength ?length ;
            ggdm:parameterWeight ?weight .
\t}
\t""" .

:givenNameTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate rdf:type ;
        rr:object foaf:Person 
    ] ;
    rr:predicateObjectMap [
        rr:predicate foaf:givenName ;
        rr:objectMap [
            rml:reference "givenname.value" ;
            rr:termType rr:Literal 
        ]
    ] .

:familyNameTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate foaf:familyName ;
        rr:objectMap [
            rml:reference "familyname.value" ;
            rr:termType rr:Literal 
        ]
    ] .

:ageTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate foaf:age ;
        rr:objectMap [
            rml:reference "age.value" ;
            rr:termType rr:Literal 
        ]
    ] .


:genderTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate foaf:gender ;
        rr:objectMap [
            rml:reference "gender.value" ;
            rr:termType rr:Literal 
        ]
    ] .

:paramCholesterolTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate ggdm:parameterCholesterolHDL ;
        rr:objectMap [
            rml:reference "hdl.value" ;
            rr:termType rr:Literal 
        ] 
    ] ;
\trr:predicateObjectMap [
        rr:predicate ggdm:parameterCholesterolRatio ;
        rr:objectMap [
            rml:reference "ratio.value" ;
            rr:termType rr:Literal 
        ] 
    ] ;
\trr:predicateObjectMap [
        rr:predicate ggdm:parameterCholesterolTotal ;
        rr:objectMap [
            rml:reference "total.value" ;
            rr:termType rr:Literal 
        ] 
    ] .

:paramLengthTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate ggdm:parameterLength ;
        rr:objectMap [
            rml:reference "length.value" ;
            rr:termType rr:Literal 
        ]
    ] .

:paramWeightTriplesMap a rr:TriplesMap ;
    rml:logicalSource :personSource ;
    rr:subjectMap [
        rml:reference "person.value" ;
        rr:termType rr:IRI 
    ] ;
    rr:predicateObjectMap [
        rr:predicate ggdm:parameterWeight ;
        rr:objectMap [
            rml:reference "weight.value" ;
            rr:termType rr:Literal 
        ]
    ] .

:answerSource a rml:LogicalSource ;
\trml:source :sparqlService ;
\trml:referenceFormulation ql:JSONPath ;
\trml:iterator "$.results.bindings[*]" ;
\trml:query
\t"""
\tprefix ggdm: <https://vito.be/schema/ggdm#> 
\tprefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> 
\tprefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
\tprefix owl:  <http://www.w3.org/2002/07/owl#> 
\tprefix xsd:  <http://www.w3.org/2001/XMLSchema#> 
\tprefix sur:  <https://w3id.org/survey-ontology#> 
\tprefix prov: <http://www.w3.org/ns/prov#> 
\t
\tSELECT ?question ?completedQuestion ?answer ?date ?person ?session
\tWHERE {
\t\t?session prov:atTime ?date ;
            prov:wasAssociatedWith ?person .
        ?completedQuestion sur:answeredIn ?session ;
            sur:hasAnswer ?answer ;
            sur:completesQuestion ?question .
\t\tFILTER (?question IN (ggdm:question1, ggdm:question2, ggdm:question3, 
\t\t                      ggdm:question4, ggdm:question5, ggdm:question6, 
\t\t\t\t\t\t\t  ggdm:question6-1, ggdm:question6-2,  
\t\t\t\t\t\t\t  ggdm:question7, ggdm:question7-1, ggdm:question7-2,
\t\t\t\t\t\t\t  ggdm:question7-3, ggdm:question7-4, ggdm:question7-5,
\t\t\t\t\t\t\t  ggdm:question7-6, ggdm:question7-7, ggdm:question7-8,
\t\t\t\t\t\t\t  ggdm:question7-9, ggdm:question7-10, ggdm:question8-1, 
\t\t\t\t\t\t\t  ggdm:question9-1, ggdm:question10, ggdm:question11, 
\t\t\t\t\t\t\t  ggdm:question12, ggdm:question13, ggdm:question14))
\t}
\t""" .
\t
:identityCompletedQuestionTriplesMap a rr:TriplesMap ;
\trml:logicalSource :answerSource ;
\trr:subjectMap [
\t\trml:reference "completedQuestion.value" ;
\t\trr:termType rr:IRI 
\t\t] ;
\trr:predicateObjectMap [
\t\trr:predicate sur:answeredIn ;
\t\trr:objectMap [
\t\t\trml:reference "session.value" ;
\t\t\trr:termType rr:IRI 
\t\t\t] 
\t\t] ;
\trr:predicateObjectMap [
\t\trr:predicate sur:hasAnswer ;
\t\trr:objectMap [
\t\t\trml:reference "answer.value" ;
\t\t\trr:termType rr:IRI 
\t\t\t] 
\t\t] ;
\trr:predicateObjectMap [
\t\trr:predicate sur:completesQuestion ;
\t\trr:objectMap [
\t\t\trml:reference "question.value" ;
\t\t\trr:termType rr:IRI 
\t\t\t] 
\t\t] .
\t\t
:identitySessionTriplesMap a rr:TriplesMap ;
\trml:logicalSource :answerSource ;
\trr:subjectMap [
\t\trml:reference "session.value" ;
\t\trr:termType rr:IRI 
\t\t] ;
\trr:predicateObjectMap [
\t\trr:predicate prov:atTime ;
\t\trr:objectMap [
\t\t\trml:reference "date.value" ;
\t\t\trr:datatype xsd:date 
\t\t\t] 
\t\t] ;
\trr:predicateObjectMap [
\t\trr:predicate prov:wasAssociatedWith ;
\t\trr:objectMap [
\t\t\trml:reference "person.value" ;
\t\t\trr:termType rr:IRI 
\t\t\t] 
\t\t] .
`;
