$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bmicalculator/test/BMI.feature");
formatter.feature({
  "id": "as-a-health-specialist",
  "description": "I want a BMI Calculator\nSo that I can calculate patient\u0027s Body Mass Index",
  "name": "As a health specialist",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 32748550000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;2",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"25\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"170\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"50\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"17.30\" as bmi and \"Underweight\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 6580585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "170",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 7011201000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 7087439000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17.30",
      "offset": 14
    },
    {
      "val": "Underweight",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 1508246000,
  "status": "passed"
});
formatter.after({
  "duration": 2859157000,
  "status": "passed"
});
formatter.before({
  "duration": 39963816000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;3",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"27\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"181\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"80\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"24.42\" as bmi and \"Normal\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "27",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 6362844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "181",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 7096459000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 6970010000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24.42",
      "offset": 14
    },
    {
      "val": "Normal",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 1530944000,
  "status": "passed"
});
formatter.after({
  "duration": 4411746000,
  "status": "passed"
});
formatter.before({
  "duration": 30621387000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;4",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"27\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"180\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"90\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"27.78\" as bmi and \"Overweight\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "27",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 10429471000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "180",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 6933249000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 9054451000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27.78",
      "offset": 14
    },
    {
      "val": "Overweight",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 1467390000,
  "status": "passed"
});
formatter.after({
  "duration": 3228187000,
  "status": "passed"
});
formatter.before({
  "duration": 30802637000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-health-specialist;calculate-body-mass-index;;5",
  "tags": [
    {
      "name": "@test",
      "line": 5
    }
  ],
  "description": "",
  "name": "Calculate Body Mass Index",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"28\" as age",
  "keyword": "When ",
  "line": 7,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I enter \"175\" as height",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I enter \"100\" as weight",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I should see \"32.65\" as bmi and \"Obese\" as category",
  "keyword": "Then ",
  "line": 10,
  "matchedColumns": [
    3,
    4
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "28",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_age(String)"
});
formatter.result({
  "duration": 6432033000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "175",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.Given_I_enter_as_height(String)"
});
formatter.result({
  "duration": 7035510000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "BMI_Calc_StepDef.And_I_enter_as_weight(String)"
});
formatter.result({
  "duration": 7130353000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32.65",
      "offset": 14
    },
    {
      "val": "Obese",
      "offset": 33
    }
  ],
  "location": "BMI_Calc_StepDef.Then_I_should_see_as_bmi_and_as_category(String,String)"
});
formatter.result({
  "duration": 1565669000,
  "status": "passed"
});
formatter.after({
  "duration": 5005615000,
  "status": "passed"
});
});