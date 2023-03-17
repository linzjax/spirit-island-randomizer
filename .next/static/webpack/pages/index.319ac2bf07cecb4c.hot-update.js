"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/choose.ts":
/*!*************************!*\
  !*** ./utils/choose.ts ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst chooseOption = (list)=>{\n    return list.splice(Math.floor(Math.random() * list.length), 1)[0];\n};\nconst spiritList = [\n    {\n        name: \"Lightning's Swift Strike\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Pandemonium\"\n            },\n            {\n                name: \"Wind\"\n            }\n        ]\n    },\n    {\n        name: \"River Surges in Sunlight\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Sunshine\"\n            }\n        ]\n    },\n    {\n        name: \"Vital Strength of the Earth\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Resilience\"\n            }\n        ]\n    },\n    {\n        name: \"Shadows Flicker Like Flame\",\n        aspects: [\n            {\n                name: \"Standard\"\n            },\n            {\n                name: \"Madness\"\n            },\n            {\n                name: \"Reach\"\n            }\n        ]\n    },\n    {\n        name: \"Thunderspeaker\"\n    },\n    {\n        name: \"A Spread of Rampant Green\"\n    },\n    {\n        name: \"Ocean's Hungry Grasp\"\n    },\n    {\n        name: \"Bringer of Dreams and Nightmares\"\n    },\n    {\n        name: \"Stone's Unyielding Defiance\"\n    },\n    {\n        name: \"Shifting Memory of Ages\"\n    },\n    {\n        name: \"Grinning Trickster Stirs Up Trouble\"\n    },\n    {\n        name: \"Lure of the Deep Wilderness\"\n    },\n    {\n        name: \"Many Minds Move as One\"\n    },\n    {\n        name: \"Volcano Looming High\"\n    },\n    {\n        name: \"Shroud of Silent Mist\"\n    },\n    {\n        name: \"Vengeance as a Burning Plague\"\n    },\n    {\n        name: \"Starlight Seeks Its Form\"\n    },\n    {\n        name: \"Fractured Days Split the Sky\"\n    }\n];\nconst chooseSpirits = (numberOfPlayers)=>{\n    let spirits = [];\n    for(let i = 0; i < numberOfPlayers; i++){\n        spirits.push(chooseOption(spiritList));\n    }\n    return spirits;\n};\nconst adversaryList = [\n    {\n        name: \"Brandenburg-Prussia\"\n    },\n    {\n        name: \"England\"\n    },\n    {\n        name: \"Sweden\"\n    },\n    {\n        name: \"Habsburg Monarchy\"\n    },\n    {\n        name: \"Russia\"\n    }\n];\nconst chooseAdversary = ()=>chooseOption(adversaryList);\nconst scenarioList = [\n    {\n        name: \"Blitz\"\n    },\n    {\n        name: \"Guard the Isle's Heart\"\n    },\n    {\n        name: \"Rituals of Terror\"\n    },\n    {\n        name: \"Dahan Insurrection\"\n    },\n    {\n        name: \"Elemental Invocation\"\n    },\n    {\n        name: \"Despicable Theft\"\n    },\n    {\n        name: \"The Great River\"\n    }\n];\nconst chooseScenario = ()=>chooseOption(scenarioList);\nconst blightCardList = [\n    {\n        name: \"Downward Spiral\"\n    },\n    {\n        name: \"Memory Fades to Dust\"\n    },\n    {\n        name: \"Thriving Communities\"\n    },\n    {\n        name: \"Unnatural Proliferation\"\n    },\n    {\n        name: \"All Things Weaken\"\n    },\n    {\n        name: \"Power Corrodes the Spirit\"\n    },\n    {\n        name: \"Untended Land Crumbles\"\n    },\n    {\n        name: \"Invaders Find the Land to Their Liking\"\n    },\n    {\n        name: \"Strong Earth Shatters Slowly\"\n    }\n];\nconst chooseBlight = ()=>chooseOption(blightCardList);\nconst chooseResults = (param)=>{\n    let { numberOfPlayers , includeAdversary , includeScenario , includeBlightCard  } = param;\n    const spirits = chooseSpirits(numberOfPlayers);\n    const finalSpiritList = spirits.map((spirit)=>{\n        if (spirit.aspects) {\n            const aspect = chooseOption(spirit.aspects);\n            return {\n                name: spirit.name,\n                aspect: aspect.name\n            };\n        }\n        return spirit;\n    });\n    const results = {\n        spirits: finalSpiritList\n    };\n    if (includeAdversary) {\n        results[\"adversary\"] = chooseAdversary().name;\n    }\n    if (includeScenario) {\n        results[\"scenario\"] = chooseScenario().name;\n    }\n    if (includeBlightCard) {\n        results[\"blight_card\"] = chooseBlight().name;\n    }\n    return results;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (chooseResults);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFO1lBQ2xCLE1BQU1tQixTQUFTNUIsYUFBYTJCLE9BQU9sQixPQUFPO1lBQzFDLE9BQU87Z0JBQ0xELE1BQU1tQixPQUFPbkIsSUFBSTtnQkFDakJvQixRQUFRQSxPQUFPcEIsSUFBSTtZQUNyQjtRQUNGLENBQUM7UUFFRCxPQUFPbUI7SUFDVDtJQUVBLE1BQU1FLFVBQVU7UUFDZGpCLFNBQVNhO0lBQ1g7SUFFQSxJQUFJSCxrQkFBa0I7UUFDcEJPLE9BQU8sQ0FBQyxZQUFZLEdBQUdiLGtCQUFrQlIsSUFBSTtJQUMvQyxDQUFDO0lBRUQsSUFBSWUsaUJBQWlCO1FBQ25CTSxPQUFPLENBQUMsV0FBVyxHQUFHWCxpQkFBaUJWLElBQUk7SUFDN0MsQ0FBQztJQUVELElBQUlnQixtQkFBbUI7UUFDckJLLE9BQU8sQ0FBQyxjQUFjLEdBQUdULGVBQWVaLElBQUk7SUFDOUMsQ0FBQztJQUVELE9BQU9xQjtBQUNUO0FBRUEsK0RBQWVSLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2hvb3NlLnRzPzlmYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bpcml0IH0gZnJvbSBcInR5cGVzL2luZGV4XCJcblxuY29uc3QgY2hvb3NlT3B0aW9uID0gKFxuICBsaXN0OiB7IG5hbWU6IHN0cmluZzsgYXNwZWN0cz86IHsgbmFtZTogc3RyaW5nIH1bXSB9W11cbikgPT4ge1xuICByZXR1cm4gbGlzdC5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpLCAxKVswXVxufVxuXG5jb25zdCBzcGlyaXRMaXN0ID0gW1xuICB7XG4gICAgbmFtZTogXCJMaWdodG5pbmcncyBTd2lmdCBTdHJpa2VcIixcbiAgICBhc3BlY3RzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU3RhbmRhcmRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQYW5kZW1vbml1bVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIldpbmRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUml2ZXIgU3VyZ2VzIGluIFN1bmxpZ2h0XCIsXG4gICAgYXNwZWN0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlN0YW5kYXJkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU3Vuc2hpbmVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVml0YWwgU3RyZW5ndGggb2YgdGhlIEVhcnRoXCIsXG4gICAgYXNwZWN0czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlN0YW5kYXJkXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUmVzaWxpZW5jZVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTaGFkb3dzIEZsaWNrZXIgTGlrZSBGbGFtZVwiLFxuICAgIGFzcGVjdHM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJTdGFuZGFyZFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIk1hZG5lc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJSZWFjaFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJUaHVuZGVyc3BlYWtlclwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkEgU3ByZWFkIG9mIFJhbXBhbnQgR3JlZW5cIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJPY2VhbidzIEh1bmdyeSBHcmFzcFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJyaW5nZXIgb2YgRHJlYW1zIGFuZCBOaWdodG1hcmVzXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3RvbmUncyBVbnlpZWxkaW5nIERlZmlhbmNlXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2hpZnRpbmcgTWVtb3J5IG9mIEFnZXNcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJHcmlubmluZyBUcmlja3N0ZXIgU3RpcnMgVXAgVHJvdWJsZVwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkx1cmUgb2YgdGhlIERlZXAgV2lsZGVybmVzc1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hbnkgTWluZHMgTW92ZSBhcyBPbmVcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWb2xjYW5vIExvb21pbmcgSGlnaFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNocm91ZCBvZiBTaWxlbnQgTWlzdFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZlbmdlYW5jZSBhcyBhIEJ1cm5pbmcgUGxhZ3VlXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3RhcmxpZ2h0IFNlZWtzIEl0cyBGb3JtXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRnJhY3R1cmVkIERheXMgU3BsaXQgdGhlIFNreVwiXG4gIH1cbl1cblxuY29uc3QgY2hvb3NlU3Bpcml0cyA9IChudW1iZXJPZlBsYXllcnM6IG51bWJlcikgPT4ge1xuICBsZXQgc3Bpcml0cyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQbGF5ZXJzOyBpKyspIHtcbiAgICBzcGlyaXRzLnB1c2goY2hvb3NlT3B0aW9uKHNwaXJpdExpc3QpKVxuICB9XG4gIHJldHVybiBzcGlyaXRzXG59XG5cbmNvbnN0IGFkdmVyc2FyeUxpc3QgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkJyYW5kZW5idXJnLVBydXNzaWFcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJFbmdsYW5kXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3dlZGVuXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSGFic2J1cmcgTW9uYXJjaHlcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSdXNzaWFcIlxuICB9XG5dXG5cbmNvbnN0IGNob29zZUFkdmVyc2FyeSA9ICgpID0+IGNob29zZU9wdGlvbihhZHZlcnNhcnlMaXN0KVxuXG5jb25zdCBzY2VuYXJpb0xpc3QgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkJsaXR6XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3VhcmQgdGhlIElzbGUncyBIZWFydFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJpdHVhbHMgb2YgVGVycm9yXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGFoYW4gSW5zdXJyZWN0aW9uXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRWxlbWVudGFsIEludm9jYXRpb25cIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEZXNwaWNhYmxlIFRoZWZ0XCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVGhlIEdyZWF0IFJpdmVyXCJcbiAgfVxuXVxuXG5jb25zdCBjaG9vc2VTY2VuYXJpbyA9ICgpID0+IGNob29zZU9wdGlvbihzY2VuYXJpb0xpc3QpXG5cbmNvbnN0IGJsaWdodENhcmRMaXN0ID0gW1xuICB7XG4gICAgbmFtZTogXCJEb3dud2FyZCBTcGlyYWxcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNZW1vcnkgRmFkZXMgdG8gRHVzdFwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlRocml2aW5nIENvbW11bml0aWVzXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVW5uYXR1cmFsIFByb2xpZmVyYXRpb25cIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbGwgVGhpbmdzIFdlYWtlblwiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBvd2VyIENvcnJvZGVzIHRoZSBTcGlyaXRcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJVbnRlbmRlZCBMYW5kIENydW1ibGVzXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW52YWRlcnMgRmluZCB0aGUgTGFuZCB0byBUaGVpciBMaWtpbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTdHJvbmcgRWFydGggU2hhdHRlcnMgU2xvd2x5XCJcbiAgfVxuXVxuXG5jb25zdCBjaG9vc2VCbGlnaHQ6ICgpID0+IHsgbmFtZTogc3RyaW5nIH0gPSAoKSA9PiBjaG9vc2VPcHRpb24oYmxpZ2h0Q2FyZExpc3QpXG5cbmNvbnN0IGNob29zZVJlc3VsdHM6IChhcmdzOiB7XG4gIG51bWJlck9mUGxheWVyczogbnVtYmVyXG4gIGluY2x1ZGVBZHZlcnNhcnk6IGJvb2xlYW5cbiAgaW5jbHVkZVNjZW5hcmlvOiBib29sZWFuXG4gIGluY2x1ZGVCbGlnaHRDYXJkOiBib29sZWFuXG59KSA9PiB7XG4gIHNwaXJpdHM6IGFueVtdXG4gIGFkdmVyc2FyeT86IHN0cmluZ1xuICBzY2VuYXJpbz86IHN0cmluZ1xuICBibGlnaHRDYXJkPzogc3RyaW5nXG59ID0gKHtcbiAgbnVtYmVyT2ZQbGF5ZXJzLFxuICBpbmNsdWRlQWR2ZXJzYXJ5LFxuICBpbmNsdWRlU2NlbmFyaW8sXG4gIGluY2x1ZGVCbGlnaHRDYXJkXG59KSA9PiB7XG4gIGNvbnN0IHNwaXJpdHMgPSBjaG9vc2VTcGlyaXRzKG51bWJlck9mUGxheWVycylcblxuICBjb25zdCBmaW5hbFNwaXJpdExpc3QgPSBzcGlyaXRzLm1hcCgoc3Bpcml0KSA9PiB7XG4gICAgaWYgKHNwaXJpdC5hc3BlY3RzKSB7XG4gICAgICBjb25zdCBhc3BlY3QgPSBjaG9vc2VPcHRpb24oc3Bpcml0LmFzcGVjdHMpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBzcGlyaXQubmFtZSxcbiAgICAgICAgYXNwZWN0OiBhc3BlY3QubmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGlyaXRcbiAgfSlcblxuICBjb25zdCByZXN1bHRzID0ge1xuICAgIHNwaXJpdHM6IGZpbmFsU3Bpcml0TGlzdFxuICB9XG5cbiAgaWYgKGluY2x1ZGVBZHZlcnNhcnkpIHtcbiAgICByZXN1bHRzW1wiYWR2ZXJzYXJ5XCJdID0gY2hvb3NlQWR2ZXJzYXJ5KCkubmFtZVxuICB9XG5cbiAgaWYgKGluY2x1ZGVTY2VuYXJpbykge1xuICAgIHJlc3VsdHNbXCJzY2VuYXJpb1wiXSA9IGNob29zZVNjZW5hcmlvKCkubmFtZVxuICB9XG5cbiAgaWYgKGluY2x1ZGVCbGlnaHRDYXJkKSB7XG4gICAgcmVzdWx0c1tcImJsaWdodF9jYXJkXCJdID0gY2hvb3NlQmxpZ2h0KCkubmFtZVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hvb3NlUmVzdWx0c1xuIl0sIm5hbWVzIjpbImNob29zZU9wdGlvbiIsImxpc3QiLCJzcGxpY2UiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzcGlyaXRMaXN0IiwibmFtZSIsImFzcGVjdHMiLCJjaG9vc2VTcGlyaXRzIiwibnVtYmVyT2ZQbGF5ZXJzIiwic3Bpcml0cyIsImkiLCJwdXNoIiwiYWR2ZXJzYXJ5TGlzdCIsImNob29zZUFkdmVyc2FyeSIsInNjZW5hcmlvTGlzdCIsImNob29zZVNjZW5hcmlvIiwiYmxpZ2h0Q2FyZExpc3QiLCJjaG9vc2VCbGlnaHQiLCJjaG9vc2VSZXN1bHRzIiwiaW5jbHVkZUFkdmVyc2FyeSIsImluY2x1ZGVTY2VuYXJpbyIsImluY2x1ZGVCbGlnaHRDYXJkIiwiZmluYWxTcGlyaXRMaXN0IiwibWFwIiwic3Bpcml0IiwiYXNwZWN0IiwicmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/choose.ts\n"));

/***/ })

});