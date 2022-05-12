(function(window, undefined) {
  var dictionary = {
    "1c84e066-dffb-46a3-a906-6713b5732de0": "Browse Classes",
    "94a71034-8f95-48af-8c1b-432c9a82727f": "Success",
    "ab60c36d-47a5-48c8-9a13-c2ab0c60a5cc": "Registration",
    "f4fe9564-189b-4fe7-93fc-bf337b1606bb": "Log Out",
    "de4349a5-1541-401d-afb4-ff4f353d531f": "Student Records",
    "894a5c93-000d-429c-9615-6ac9a6ade026": "Financial Aid",
    "6d9170ab-b726-4468-8b9d-3add34268b94": "Graduation Menu",
    "9f070d6f-8ed3-449b-9bab-29c09e027b73": "Guest Access",
    "4c57203e-e82a-474d-8d10-37247cb654c5": "Personal Information",
    "bf3b2b8f-77c5-411c-9084-8d91b8267d33": "Student Account",
    "d342ce2e-50b7-4c02-bd8f-bbfc7ceab3cc": "Student Services",
    "f87b7164-6536-4df1-99b0-31dd5b03df5b": "Error",
    "e13710de-ad2d-49aa-8578-fc4cfbc491a1": "New Students Menu",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main Menu",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);