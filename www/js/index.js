/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

shirtNum = document.getElementById("shirt-number");
shirtText = document.getElementById("text");

shirtNum.addEventListener("keydown", (n) => {
    console.log(n, n.key);
    if (n.key === "Enter") {
        // shirtNum.value = parseInt(shirtNum.value, 10);
        footballerShirtNumbers(shirtNum.value);
    }
});


function footballerShirtNumbers(n) {
    var answer;
    switch (n) {
        case "1":
        case "13":
        case "25":
            answer = "Goalkeeper";
            document.querySelector("#shirt").setAttribute("fill", "yellow");
            // shirt.style.fill = "yellow";
            break;
        case "2":
        case "12":
        case "24":
            answer = "Right Back";
            break;
        case "3":
            answer = "Left Back";
            break;
        case "5":
        case "6":
        case "26":
            answer = "Centre Back";
            break;
        case "4":
            answer = "Defensive Midfielder";
            break;
        case "7":
            answer = "Right Winger";
            break;
        case "8":
        case "14":
        case "16":
            answer = "Central Midfielder";
            break;
        case "11":
        case "17":
            answer = "Left Winger";
            break;
        case "10":
            answer = "Attacking Midfielder";
            break;
        case "9":
        case "20":
        case "27":
            answer = "Forward";
            break;
        default:
            answer = ""
    }
    shirtText.innerHTML = answer;
    const circleType = new CircleType(document.getElementById('text'));
    circleType.radius(150);
    
    return answer;
}


console.log(footballerShirtNumbers(5));